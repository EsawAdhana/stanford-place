"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type {
  AppUser,
  PixelRecord,
  TileResponse
} from "@stanfordplace/shared";
import {
  BOARD_SIZE,
  MAX_TILE_COORDINATE,
  PALETTE,
  TILE_SIZE
} from "@stanfordplace/shared";

import { getBrowserSupabase } from "../lib/supabase/browser";

type SnapshotResponse = {
  boardSize: number;
  tileSize: number;
  onlineCount: number;
  recentPlacements: Array<PixelRecord & { userId: string }>;
};

const MAX_ZOOM_FACTOR = 32;
const ZOOM_STEP = 1.12;
const BASE_CELL_SCREEN_PIXELS = 3.2;
const PIXEL_SNAP_ZOOM_THRESHOLD = 8;
const TAP_DRAG_THRESHOLD_PX = 8;
const MOBILE_LAYOUT_BREAKPOINT_PX = 1024;
const MOBILE_LAYOUT_QUERY = `(max-width: ${MOBILE_LAYOUT_BREAKPOINT_PX}px), (hover: none) and (pointer: coarse)`;

type PointerSnapshot = {
  clientX: number;
  clientY: number;
};

function getPointerDistance(first: PointerSnapshot, second: PointerSnapshot) {
  return Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
}

function getPointerMidpoint(first: PointerSnapshot, second: PointerSnapshot) {
  return {
    clientX: (first.clientX + second.clientX) / 2,
    clientY: (first.clientY + second.clientY) / 2
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function clampOffset(value: number, boardSize: number, canvasSize: number, zoom: number) {
  const visibleSize = canvasSize / zoom;

  if (visibleSize >= boardSize) {
    return (boardSize - visibleSize) / 2;
  }

  return clamp(value, 0, boardSize - visibleSize);
}

function getCenteredOffset(boardSize: number, canvasSize: number, zoom: number) {
  const visibleSize = canvasSize / zoom;
  return (boardSize - visibleSize) / 2;
}

function tileKey(tileX: number, tileY: number) {
  return `${tileX}:${tileY}`;
}

function getScreenSpan(
  start: number,
  end: number,
  offset: number,
  zoom: number,
  snapToPixelGrid: boolean
) {
  const screenStart = (start - offset) * zoom;
  const screenEnd = (end - offset) * zoom;

  if (!snapToPixelGrid) {
    return {
      start: screenStart,
      size: screenEnd - screenStart
    };
  }

  const snappedStart = Math.round(screenStart);
  const snappedEnd = Math.round(screenEnd);

  return {
    start: snappedStart,
    size: Math.max(1, snappedEnd - snappedStart)
  };
}

function formatMs(ms: number) {
  if (ms <= 0) {
    return "Ready";
  }

  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function BoardClient({
  initialUser,
  initialNow
}: {
  initialUser: AppUser;
  initialNow: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const compactControlsRef = useRef<HTMLDivElement | null>(null);
  const hasInitializedViewRef = useRef(false);
  const dragRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    x: number;
    y: number;
    moved: boolean;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    moved: false
  });
  const activePointersRef = useRef<Map<number, PointerSnapshot>>(new Map());
  const pinchRef = useRef<{
    active: boolean;
    initialDistance: number;
    initialZoom: number;
    focalBoardX: number;
    focalBoardY: number;
  }>({
    active: false,
    initialDistance: 0,
    initialZoom: BASE_CELL_SCREEN_PIXELS,
    focalBoardX: 0,
    focalBoardY: 0
  });
  const cooldownResyncPendingRef = useRef(false);

  const [user, setUser] = useState<AppUser>(initialUser);
  const [now, setNow] = useState(initialNow);
  const [selectedColor, setSelectedColor] = useState(3);
  const [zoom, setZoom] = useState(BASE_CELL_SCREEN_PIXELS);
  const [offsetX, setOffsetX] = useState(BOARD_SIZE / 2);
  const [offsetY, setOffsetY] = useState(BOARD_SIZE / 2);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [paletteMenuOpen, setPaletteMenuOpen] = useState(false);
  const [feedMenuOpen, setFeedMenuOpen] = useState(false);
  const [helpMenuOpen, setHelpMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placing, setPlacing] = useState(false);
  const [tileMap, setTileMap] = useState<Record<string, TileResponse>>({});
  const [recentPlacements, setRecentPlacements] = useState<
    Array<PixelRecord & { userId: string }>
  >([]);
  const [, setOnlineCount] = useState(0);

  const cooldownRemaining = user.nextPlaceAt
    ? new Date(user.nextPlaceAt).getTime() - now
    : 0;
  const minimumZoom = BASE_CELL_SCREEN_PIXELS;
  const maximumZoom = minimumZoom * MAX_ZOOM_FACTOR;
  const zoomFactor = minimumZoom > 0 ? zoom / minimumZoom : 1;
  const isZoomedIn = zoom > minimumZoom + 0.001;
  const usesCompactControls = isZoomedIn || isMobileViewport;
  const snapToPixelGrid = zoom < PIXEL_SNAP_ZOOM_THRESHOLD;
  const canvasWidth = Math.max(1, Math.floor(canvasSize.width));
  const canvasHeight = Math.max(1, Math.floor(canvasSize.height));
  const backingCanvasWidth = Math.max(1, Math.floor(canvasWidth * devicePixelRatio));
  const backingCanvasHeight = Math.max(1, Math.floor(canvasHeight * devicePixelRatio));

  const pushRecentPlacement = useCallback(
    (placement: PixelRecord & { userId: string }) => {
      setRecentPlacements((current) => {
        const deduped = current.filter(
          (entry) =>
            !(
              entry.userId === placement.userId &&
              entry.x === placement.x &&
              entry.y === placement.y &&
              entry.updatedAt === placement.updatedAt
            )
        );

        return [placement, ...deduped].slice(0, 20);
      });
    },
    []
  );

  const updateTilePixel = useCallback((pixel: PixelRecord) => {
    const tileX = Math.floor(pixel.x / TILE_SIZE);
    const tileY = Math.floor(pixel.y / TILE_SIZE);
    const key = tileKey(tileX, tileY);

    setTileMap((current) => {
      const existing = current[key];
      if (!existing) {
        return current;
      }

      const nextPixels = existing.pixels.filter(
        (entry) => !(entry.x === pixel.x && entry.y === pixel.y)
      );
      nextPixels.push(pixel);
      nextPixels.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));

      return {
        ...current,
        [key]: {
          ...existing,
          pixels: nextPixels,
          generatedAt: new Date().toISOString()
        }
      };
    });
  }, []);

  const removeTilePixel = useCallback((x: number, y: number) => {
    const key = tileKey(Math.floor(x / TILE_SIZE), Math.floor(y / TILE_SIZE));

    setTileMap((current) => {
      const existing = current[key];
      if (!existing) {
        return current;
      }

      return {
        ...current,
        [key]: {
          ...existing,
          pixels: existing.pixels.filter((entry) => !(entry.x === x && entry.y === y)),
          generatedAt: new Date().toISOString()
        }
      };
    });
  }, []);

  const apiFetch = useCallback(
    async (path: string, init?: RequestInit) => {
      const response = await fetch(path, {
        ...init,
        headers: {
          "Content-Type": "application/json",
          ...(init?.headers ?? {})
        },
        cache: "no-store"
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(payload?.message ?? `Request failed: ${response.status}`);
      }

      return response;
    },
    []
  );

  const loadCurrentUser = useCallback(async () => {
    const response = await apiFetch("/api/board/me");
    return (await response.json()) as AppUser;
  }, [apiFetch]);

  const loadBootstrapData = useCallback(async () => {
    try {
      const [me, snapshotResponse] = await Promise.all([
        loadCurrentUser(),
        apiFetch("/api/board/snapshot")
      ]);
      const snapshot = (await snapshotResponse.json()) as SnapshotResponse;

      setUser(me);
      setRecentPlacements(snapshot.recentPlacements);
      setOnlineCount(snapshot.onlineCount);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load board.");
    }
  }, [apiFetch, loadCurrentUser]);

  const loadVisibleTiles = useCallback(async (options?: { forceReload?: boolean }) => {
    try {
      if (!canvasSize.width || !canvasSize.height) {
        return;
      }

      const visibleWidth = canvasSize.width / zoom;
      const visibleHeight = canvasSize.height / zoom;
      const startTileX = clamp(Math.floor(offsetX / TILE_SIZE), 0, MAX_TILE_COORDINATE);
      const endTileX = clamp(
        Math.floor((offsetX + visibleWidth) / TILE_SIZE),
        0,
        MAX_TILE_COORDINATE
      );
      const startTileY = clamp(Math.floor(offsetY / TILE_SIZE), 0, MAX_TILE_COORDINATE);
      const endTileY = clamp(
        Math.floor((offsetY + visibleHeight) / TILE_SIZE),
        0,
        MAX_TILE_COORDINATE
      );

      const neededTiles: Array<{ tileX: number; tileY: number }> = [];

      for (let tileX = startTileX; tileX <= endTileX; tileX += 1) {
        for (let tileY = startTileY; tileY <= endTileY; tileY += 1) {
          if (options?.forceReload || !tileMap[tileKey(tileX, tileY)]) {
            neededTiles.push({ tileX, tileY });
          }
        }
      }

      if (neededTiles.length === 0) {
        return;
      }

      const tiles = await Promise.all(
        neededTiles.map(async ({ tileX, tileY }) => {
          const response = await apiFetch(
            `/api/board/tiles?tileX=${tileX}&tileY=${tileY}`
          );
          return (await response.json()) as TileResponse;
        })
      );

      setTileMap((current) => {
        const next = { ...current };
        for (const tile of tiles) {
          next[tileKey(tile.tileX, tile.tileY)] = tile;
        }
        return next;
      });
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load tiles.");
    }
  }, [apiFetch, canvasSize.height, canvasSize.width, offsetX, offsetY, tileMap, zoom]);

  useEffect(() => {
    void loadBootstrapData();
  }, [loadBootstrapData]);

  useEffect(() => {
    void loadVisibleTiles();
  }, [loadVisibleTiles]);

  useEffect(() => {
    const supabase = getBrowserSupabase();
    const pixelChannel = supabase.channel("board-current-pixels");
    const placementsChannel = supabase.channel("board-placements");
    const userChannel = supabase.channel(`board-user-${user.id}`);
    const presenceChannel = supabase.channel("board-presence", {
      config: {
        presence: {
          key: user.id
        }
      }
    });
    let disposed = false;

    function handlePresenceSync() {
      const state = presenceChannel.presenceState<Record<string, string>[]>();
      const total = Object.values(state).reduce((count, entries) => count + entries.length, 0);
      setOnlineCount(total);
    }

    async function recoverCooldownState() {
      if (cooldownResyncPendingRef.current) {
        return;
      }

      cooldownResyncPendingRef.current = true;

      try {
        const nextUser = await loadCurrentUser();

        if (!disposed) {
          setUser(nextUser);
        }
      } catch (syncError) {
        if (!disposed) {
          setError(syncError instanceof Error ? syncError.message : "Failed to sync cooldown.");
        }
      } finally {
        cooldownResyncPendingRef.current = false;
      }
    }

    presenceChannel.on("presence", { event: "sync" }, handlePresenceSync);

    void supabase.realtime.setAuth();

    pixelChannel
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "current_pixels"
        },
        (payload) => {
          if (payload.eventType === "DELETE") {
            const removed = payload.old as {
              x: number;
              y: number;
            };

            if (removed && typeof removed.x === "number" && typeof removed.y === "number") {
              removeTilePixel(removed.x, removed.y);
            }

            return;
          }

          const next = payload.new as {
            x: number;
            y: number;
            color: number;
            updated_at: string;
          };

          if (next && typeof next.x === "number" && typeof next.y === "number") {
            updateTilePixel({
              x: next.x,
              y: next.y,
              color: next.color,
              updatedAt: next.updated_at
            });
          }
        }
      )
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR") {
          setError("Realtime board subscription failed.");
        }
      });

    placementsChannel
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "placements"
        },
        (payload) => {
          const placement = payload.new as {
            x: number;
            y: number;
            color: number;
            user_id: string;
            placed_at: string;
          };

          if (placement) {
            pushRecentPlacement({
              x: placement.x,
              y: placement.y,
              color: placement.color,
              userId: placement.user_id,
              updatedAt: placement.placed_at
            });
          }
        }
      )
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR") {
          setError((current) => current ?? "Live activity feed updates are unavailable.");
        }
      });

    userChannel
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "app_users",
          filter: `id=eq.${user.id}`
        },
        (payload) => {
          const next = payload.new as {
            id: string;
            next_place_at: string | null;
          };

          if (next && next.id === user.id) {
            setUser((current) => ({
              ...current,
              nextPlaceAt: next.next_place_at
            }));
          }
        }
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          cooldownResyncPendingRef.current = false;
          return;
        }

        if (status === "CHANNEL_ERROR" || status === "CLOSED" || status === "TIMED_OUT") {
          void recoverCooldownState();
        }
      });

    presenceChannel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await presenceChannel.track({
          online_at: new Date().toISOString(),
          user_id: user.id
        });
      }
    });

    return () => {
      disposed = true;
      cooldownResyncPendingRef.current = false;
      void supabase.removeChannel(pixelChannel);
      void supabase.removeChannel(placementsChannel);
      void supabase.removeChannel(userChannel);
      void supabase.removeChannel(presenceChannel);
    };
  }, [loadCurrentUser, pushRecentPlacement, removeTilePixel, updateTilePixel, user.id]);

  useEffect(() => {
    function updateDevicePixelRatio() {
      setDevicePixelRatio(window.devicePixelRatio || 1);
    }

    updateDevicePixelRatio();
    window.addEventListener("resize", updateDevicePixelRatio);

    return () => {
      window.removeEventListener("resize", updateDevicePixelRatio);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextEntry = entries[0];
      if (!nextEntry) {
        return;
      }

      const nextWidth = Math.max(1, Math.floor(nextEntry.contentRect.width));
      const nextHeight = Math.max(1, Math.floor(nextEntry.contentRect.height));

      // #region agent log
      fetch("http://127.0.0.1:7643/ingest/d7f28a3e-3ec9-49dd-bf3f-157e7e358fad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "6a14f0"
        },
        body: JSON.stringify({
          sessionId: "6a14f0",
          runId: "initial-debug",
          hypothesisId: "H2",
          location: "BoardClient.tsx:604",
          message: "ResizeObserver measured viewport",
          data: {
            nextWidth,
            nextHeight,
            viewportClientWidth: viewport.clientWidth,
            viewportClientHeight: viewport.clientHeight
          },
          timestamp: Date.now()
        })
      }).catch(() => {});
      // #endregion

      setCanvasSize((current) => {
        if (current.width === nextWidth && current.height === nextHeight) {
          return current;
        }

        return {
          width: nextWidth,
          height: nextHeight
        };
      });
    });

    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!canvasSize.width || !canvasSize.height) {
      return;
    }

    if (!hasInitializedViewRef.current) {
      const initialZoom = minimumZoom;
      const nextOffsetX = getCenteredOffset(BOARD_SIZE, canvasSize.width, initialZoom);
      const nextOffsetY = getCenteredOffset(BOARD_SIZE, canvasSize.height, initialZoom);

      // #region agent log
      fetch("http://127.0.0.1:7643/ingest/d7f28a3e-3ec9-49dd-bf3f-157e7e358fad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "6a14f0"
        },
        body: JSON.stringify({
          sessionId: "6a14f0",
          runId: "initial-debug",
          hypothesisId: "H3",
          location: "BoardClient.tsx:633",
          message: "Initializing board view",
          data: {
            canvasWidth: canvasSize.width,
            canvasHeight: canvasSize.height,
            initialZoom,
            nextOffsetX,
            nextOffsetY,
            boardSize: BOARD_SIZE
          },
          timestamp: Date.now()
        })
      }).catch(() => {});
      // #endregion

      setZoom(initialZoom);
      setOffsetX(nextOffsetX);
      setOffsetY(nextOffsetY);
      hasInitializedViewRef.current = true;
      return;
    }

    if (zoom < minimumZoom) {
      setZoom(minimumZoom);
      setOffsetX((current) => clampOffset(current, BOARD_SIZE, canvasSize.width, minimumZoom));
      setOffsetY((current) => clampOffset(current, BOARD_SIZE, canvasSize.height, minimumZoom));
      return;
    }

    if (zoom > maximumZoom) {
      setZoom(maximumZoom);
      setOffsetX((current) => clampOffset(current, BOARD_SIZE, canvasSize.width, maximumZoom));
      setOffsetY((current) => clampOffset(current, BOARD_SIZE, canvasSize.height, maximumZoom));
      return;
    }

    setOffsetX((current) => clampOffset(current, BOARD_SIZE, canvasSize.width, zoom));
    setOffsetY((current) => clampOffset(current, BOARD_SIZE, canvasSize.height, zoom));
  }, [canvasSize.height, canvasSize.width, maximumZoom, minimumZoom, zoom]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvasSize.width || !canvasSize.height) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    context.imageSmoothingEnabled = false;
    context.fillStyle = "#8c1515";
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    const boardHorizontalSpan = getScreenSpan(0, BOARD_SIZE, offsetX, zoom, snapToPixelGrid);
    const boardVerticalSpan = getScreenSpan(0, BOARD_SIZE, offsetY, zoom, snapToPixelGrid);
    const boardLeft = boardHorizontalSpan.start;
    const boardTop = boardVerticalSpan.start;
    const boardWidth = boardHorizontalSpan.size;
    const boardHeight = boardVerticalSpan.size;

    // #region agent log
    fetch("http://127.0.0.1:7643/ingest/d7f28a3e-3ec9-49dd-bf3f-157e7e358fad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "6a14f0"
      },
      body: JSON.stringify({
        sessionId: "6a14f0",
        runId: "initial-debug",
        hypothesisId: "H1",
        location: "BoardClient.tsx:680",
        message: "Canvas render effect entered",
        data: {
          canvasWidth,
          canvasHeight,
          devicePixelRatio,
          zoom,
          offsetX,
          offsetY,
          boardLeft,
          boardTop,
          boardWidth,
          boardHeight
        },
        timestamp: Date.now()
      })
    }).catch(() => {});
    // #endregion

    context.fillStyle = "#ffffff";
    context.fillRect(boardLeft, boardTop, boardWidth, boardHeight);
    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    context.strokeRect(boardLeft, boardTop, boardWidth, boardHeight);

    for (const tile of Object.values(tileMap)) {
      for (const pixel of tile.pixels) {
        const horizontalSpan = getScreenSpan(
          pixel.x,
          pixel.x + 1,
          offsetX,
          zoom,
          snapToPixelGrid
        );
        const verticalSpan = getScreenSpan(
          pixel.y,
          pixel.y + 1,
          offsetY,
          zoom,
          snapToPixelGrid
        );
        const screenX = horizontalSpan.start;
        const screenY = verticalSpan.start;
        const drawWidth = horizontalSpan.size;
        const drawHeight = verticalSpan.size;

        if (
          screenX + drawWidth < 0 ||
          screenY + drawHeight < 0 ||
          screenX > canvasWidth ||
          screenY > canvasHeight
        ) {
          continue;
        }

        context.fillStyle = PALETTE[pixel.color] ?? "#000000";
        context.fillRect(screenX, screenY, drawWidth, drawHeight);
      }
    }

    if (zoomFactor >= 8) {
      context.strokeStyle = "rgba(15, 23, 42, 0.12)";
      context.lineWidth = 1;

      const startX = Math.max(0, Math.floor(offsetX));
      const startY = Math.max(0, Math.floor(offsetY));
      const visibleWidth = canvasWidth / zoom;
      const visibleHeight = canvasHeight / zoom;
      const endX = Math.min(BOARD_SIZE, Math.ceil(offsetX + visibleWidth));
      const endY = Math.min(BOARD_SIZE, Math.ceil(offsetY + visibleHeight));

      for (let x = startX; x <= endX; x += 1) {
        const screenX = (x - offsetX) * zoom;
        context.beginPath();
        context.moveTo(screenX, 0);
        context.lineTo(screenX, canvasHeight);
        context.stroke();
      }

      for (let y = startY; y <= endY; y += 1) {
        const screenY = (y - offsetY) * zoom;
        context.beginPath();
        context.moveTo(0, screenY);
        context.lineTo(canvasWidth, screenY);
        context.stroke();
      }
    }

    if (hover) {
      context.fillStyle = `${PALETTE[selectedColor] ?? "#000000"}b3`;
      const hoverHorizontalSpan = getScreenSpan(
        hover.x,
        hover.x + 1,
        offsetX,
        zoom,
        snapToPixelGrid
      );
      const hoverVerticalSpan = getScreenSpan(
        hover.y,
        hover.y + 1,
        offsetY,
        zoom,
        snapToPixelGrid
      );
      const drawX = hoverHorizontalSpan.start;
      const drawY = hoverVerticalSpan.start;
      const drawWidth = hoverHorizontalSpan.size;
      const drawHeight = hoverVerticalSpan.size;
      context.fillRect(drawX, drawY, drawWidth, drawHeight);
      context.strokeStyle = "#0f172a";
      context.lineWidth = 2;
      context.strokeRect(drawX, drawY, drawWidth, drawHeight);
    }

    const centerPixel = context.getImageData(
      Math.max(0, Math.floor(canvasWidth / 2)),
      Math.max(0, Math.floor(canvasHeight / 2)),
      1,
      1
    ).data;

    // #region agent log
    fetch("http://127.0.0.1:7643/ingest/d7f28a3e-3ec9-49dd-bf3f-157e7e358fad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "6a14f0"
      },
      body: JSON.stringify({
        sessionId: "6a14f0",
        runId: "initial-debug",
        hypothesisId: "H4",
        location: "BoardClient.tsx:789",
        message: "Canvas center pixel after draw",
        data: {
          centerPixel: Array.from(centerPixel),
          canvasClientWidth: canvas.clientWidth,
          canvasClientHeight: canvas.clientHeight
        },
        timestamp: Date.now()
      })
    }).catch(() => {});
    // #endregion
  }, [
    backingCanvasHeight,
    backingCanvasWidth,
    canvasHeight,
    canvasSize.height,
    canvasSize.width,
    canvasWidth,
    devicePixelRatio,
    hover,
    offsetX,
    offsetY,
    selectedColor,
    snapToPixelGrid,
    tileMap,
    zoomFactor,
    zoom
  ]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_LAYOUT_QUERY);

    function syncViewportMode() {
      setIsMobileViewport(mediaQuery.matches);
    }

    syncViewportMode();
    mediaQuery.addEventListener("change", syncViewportMode);

    return () => {
      mediaQuery.removeEventListener("change", syncViewportMode);
    };
  }, []);

  useEffect(() => {
    setNow(Date.now());

    if (!user.nextPlaceAt) {
      return;
    }

    const nextPlaceAtMs = new Date(user.nextPlaceAt).getTime();

    if (Number.isNaN(nextPlaceAtMs) || nextPlaceAtMs <= Date.now()) {
      return;
    }

    const timer = window.setInterval(() => {
      const currentNow = Date.now();
      setNow(currentNow);

      if (currentNow >= nextPlaceAtMs) {
        window.clearInterval(timer);
      }
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [user.nextPlaceAt]);

  useEffect(() => {
    if (!usesCompactControls) {
      setPaletteMenuOpen(false);
      setFeedMenuOpen(false);
      setHelpMenuOpen(false);
    }
  }, [usesCompactControls]);

  useEffect(() => {
    if (!isMobileViewport) {
      setFeedMenuOpen(false);
      setHelpMenuOpen(false);
    }
  }, [isMobileViewport]);

  useEffect(() => {
    if (!paletteMenuOpen && !feedMenuOpen && !helpMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (compactControlsRef.current?.contains(event.target as Node)) {
        return;
      }

      setPaletteMenuOpen(false);
      setFeedMenuOpen(false);
      setHelpMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPaletteMenuOpen(false);
        setFeedMenuOpen(false);
        setHelpMenuOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [feedMenuOpen, helpMenuOpen, paletteMenuOpen]);

  const boardPositionFromClient = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return null;
      }

      const rect = canvas.getBoundingClientRect();
      const canvasX = clientX - rect.left;
      const canvasY = clientY - rect.top;
      const boardX = offsetX + canvasX / zoom;
      const boardY = offsetY + canvasY / zoom;

      if (boardX < 0 || boardX >= BOARD_SIZE || boardY < 0 || boardY >= BOARD_SIZE) {
        return null;
      }

      return {
        boardX,
        boardY,
        canvasX,
        canvasY
      };
    },
    [offsetX, offsetY, zoom]
  );

  const boardCoordinateFromClient = useCallback(
    (clientX: number, clientY: number) => {
      const position = boardPositionFromClient(clientX, clientY);
      if (!position) {
        return null;
      }

      return {
        x: Math.floor(position.boardX),
        y: Math.floor(position.boardY)
      };
    },
    [boardPositionFromClient]
  );

  const placePixel = useCallback(
    async (x: number, y: number) => {
      if (cooldownRemaining > 0 || placing) {
        return;
      }

      setPlacing(true);
      setError(null);

      try {
        const response = await apiFetch("/api/board/place", {
          method: "POST",
          body: JSON.stringify({
            x,
            y,
            color: selectedColor
          })
        });
        const payload = (await response.json()) as {
          pixel: PixelRecord & { userId: string };
          nextPlaceAt: string;
        };

        updateTilePixel(payload.pixel);
        pushRecentPlacement(payload.pixel);
        setUser((current) => ({
          ...current,
          nextPlaceAt: payload.nextPlaceAt
        }));
      } catch (placeError) {
        setError(placeError instanceof Error ? placeError.message : "Placement failed.");
        void loadBootstrapData();
      } finally {
        setPlacing(false);
      }
    },
    [
      apiFetch,
      cooldownRemaining,
      loadBootstrapData,
      placing,
      pushRecentPlacement,
      selectedColor,
      updateTilePixel
    ]
  );

  const handleWheel = useCallback((event: React.WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    if (!canvasSize.width || !canvasSize.height) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const boardX = offsetX + pointerX / zoom;
    const boardY = offsetY + pointerY / zoom;
    const nextZoom = clamp(
      zoom * (event.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP),
      minimumZoom,
      maximumZoom
    );

    if (nextZoom === zoom) {
      return;
    }

    setZoom(nextZoom);
    setOffsetX(clampOffset(boardX - pointerX / nextZoom, BOARD_SIZE, canvasSize.width, nextZoom));
    setOffsetY(clampOffset(boardY - pointerY / nextZoom, BOARD_SIZE, canvasSize.height, nextZoom));
  }, [canvasSize.height, canvasSize.width, maximumZoom, minimumZoom, offsetX, offsetY, zoom]);

  const beginPinchGesture = useCallback(() => {
    const pointers = Array.from(activePointersRef.current.values());
    if (pointers.length < 2) {
      pinchRef.current.active = false;
      return;
    }

    const [first, second] = pointers;
    const midpoint = getPointerMidpoint(first, second);
    const focalPoint = boardPositionFromClient(midpoint.clientX, midpoint.clientY);
    const initialDistance = getPointerDistance(first, second);

    if (!focalPoint || initialDistance <= 0) {
      return;
    }

    pinchRef.current = {
      active: true,
      initialDistance,
      initialZoom: zoom,
      focalBoardX: focalPoint.boardX,
      focalBoardY: focalPoint.boardY
    };
    dragRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      moved: true
    };
    setHover(null);
  }, [boardPositionFromClient, zoom]);

  const updatePinchGesture = useCallback(() => {
    const pointers = Array.from(activePointersRef.current.values());
    if (pointers.length < 2 || !canvasSize.width || !canvasSize.height || !pinchRef.current.active) {
      return;
    }

    const [first, second] = pointers;
    const midpoint = getPointerMidpoint(first, second);
    const distance = getPointerDistance(first, second);
    const canvas = canvasRef.current;
    if (!canvas || distance <= 0) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const pointerX = midpoint.clientX - rect.left;
    const pointerY = midpoint.clientY - rect.top;
    const nextZoom = clamp(
      pinchRef.current.initialZoom * (distance / pinchRef.current.initialDistance),
      minimumZoom,
      maximumZoom
    );

    setZoom(nextZoom);
    setOffsetX(
      clampOffset(
        pinchRef.current.focalBoardX - pointerX / nextZoom,
        BOARD_SIZE,
        canvasSize.width,
        nextZoom
      )
    );
    setOffsetY(
      clampOffset(
        pinchRef.current.focalBoardY - pointerY / nextZoom,
        BOARD_SIZE,
        canvasSize.height,
        nextZoom
      )
    );
  }, [canvasSize.height, canvasSize.width, maximumZoom, minimumZoom]);

  const resetPointerGesture = useCallback(() => {
    dragRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      moved: false
    };
    activePointersRef.current.clear();
    pinchRef.current.active = false;
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      activePointersRef.current.set(event.pointerId, {
        clientX: event.clientX,
        clientY: event.clientY
      });

      if (activePointersRef.current.size >= 2) {
        beginPinchGesture();
        return;
      }

      dragRef.current = {
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        x: event.clientX,
        y: event.clientY,
        moved: false
      };

      if (event.pointerType === "mouse") {
        setHover(boardCoordinateFromClient(event.clientX, event.clientY));
      } else {
        setHover(null);
      }
    },
    [beginPinchGesture, boardCoordinateFromClient]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      if (activePointersRef.current.has(event.pointerId)) {
        activePointersRef.current.set(event.pointerId, {
          clientX: event.clientX,
          clientY: event.clientY
        });
      }

      if (event.pointerType === "mouse") {
        setHover(boardCoordinateFromClient(event.clientX, event.clientY));
      }

      if (activePointersRef.current.size >= 2) {
        if (!pinchRef.current.active) {
          beginPinchGesture();
        }
        updatePinchGesture();
        return;
      }

      if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) {
        return;
      }

      const deltaX = (event.clientX - dragRef.current.x) / zoom;
      const deltaY = (event.clientY - dragRef.current.y) / zoom;
      const moved =
        dragRef.current.moved ||
        Math.abs(event.clientX - dragRef.current.startX) > TAP_DRAG_THRESHOLD_PX ||
        Math.abs(event.clientY - dragRef.current.startY) > TAP_DRAG_THRESHOLD_PX;

      dragRef.current = {
        ...dragRef.current,
        x: event.clientX,
        y: event.clientY,
        moved
      };

      if (!moved) {
        return;
      }

      setOffsetX((current) => clampOffset(current - deltaX, BOARD_SIZE, canvasSize.width, zoom));
      setOffsetY((current) => clampOffset(current - deltaY, BOARD_SIZE, canvasSize.height, zoom));
    },
    [beginPinchGesture, boardCoordinateFromClient, canvasSize.height, canvasSize.width, updatePinchGesture, zoom]
  );

  const handlePointerUp = useCallback(
    async (event: React.PointerEvent<HTMLCanvasElement>) => {
      event.preventDefault();

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      const shouldPlace =
        dragRef.current.active &&
        dragRef.current.pointerId === event.pointerId &&
        !dragRef.current.moved &&
        !pinchRef.current.active &&
        activePointersRef.current.size === 1;

      activePointersRef.current.delete(event.pointerId);

      if (activePointersRef.current.size < 2) {
        pinchRef.current.active = false;
      }

      dragRef.current = {
        active: false,
        pointerId: null,
        startX: 0,
        startY: 0,
        x: 0,
        y: 0,
        moved: false
      };

      if (shouldPlace) {
        const coords = boardCoordinateFromClient(event.clientX, event.clientY);
        if (coords) {
          await placePixel(coords.x, coords.y);
        }
      }

      if (event.pointerType !== "mouse") {
        setHover(null);
      }
    },
    [boardCoordinateFromClient, placePixel]
  );

  const handlePointerCancel = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      activePointersRef.current.delete(event.pointerId);

      if (activePointersRef.current.size < 2) {
        pinchRef.current.active = false;
      }

      if (
        dragRef.current.pointerId === event.pointerId ||
        event.pointerType !== "mouse" ||
        activePointersRef.current.size === 0
      ) {
        resetPointerGesture();
      }

      if (event.pointerType !== "mouse") {
        setHover(null);
      }
    },
    [resetPointerGesture]
  );

  const handlePointerLeave = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    if (event.pointerType === "mouse" && !dragRef.current.active) {
      setHover(null);
    }
  }, []);

  const palettePanel = (
    <div className="panel panel-compact board-palette-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-eyebrow">Palette</p>
          <h2>Pick a color</h2>
        </div>
        <div
          className="selected-color-chip"
          style={{ backgroundColor: PALETTE[selectedColor] }}
          aria-hidden="true"
        />
      </div>
      <div className="palette-grid">
        {PALETTE.map((color, index) => (
          <button
            key={color}
            type="button"
            aria-label={`Select color ${index}`}
            className={selectedColor === index ? "palette-swatch active" : "palette-swatch"}
            style={{ backgroundColor: color }}
            onClick={() => {
              setSelectedColor(index);
              if (usesCompactControls) {
                setPaletteMenuOpen(false);
              }
            }}
          />
        ))}
      </div>
      <p className="panel-caption">Selected color index: {selectedColor}</p>
    </div>
  );

  const activityPanel = (
    <div className="panel panel-compact activity-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-eyebrow">Feed</p>
          <h2>Recent activity</h2>
        </div>
      </div>
      <ul className="activity-list">
        {recentPlacements.map((placement, index) => (
          <li key={`${placement.userId}-${placement.x}-${placement.y}-${index}`}>
            <div className="activity-entry-main">
              <span
                className="activity-color"
                style={{ backgroundColor: PALETTE[placement.color] ?? "#000000" }}
                aria-hidden="true"
              />
              <span>
                ({placement.x}, {placement.y})
              </span>
            </div>
            <span>color {placement.color}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const helpPanel = (
    <div className="panel panel-compact board-mobile-help-panel">
      <div>
        <p className="panel-eyebrow">How it works</p>
        <h2>One pixel at a time</h2>
      </div>
      <ul className="board-rules-list">
        <li>Click any cell to place your selected color.</li>
        <li>Drag to pan and scroll to zoom around the board.</li>
        <li>Each placement triggers a 5-second cooldown before your next move.</li>
      </ul>
      <div>
        <p className="panel-eyebrow">Ground rules</p>
        <ul className="board-rules-list board-rules-list-compact">
          <li>Coordinate with others to build larger designs.</li>
          <li>Expect your pixel to be remixed by the community.</li>
          <li>Be a good person.</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="page-shell">
      <section className="board-stage">
        {!usesCompactControls ? (
          <div className="board-left-rail">
            <div className="panel board-brand-panel">
              <h1 className="board-title">
                <span>Stanford</span>
                <span>Place</span>
              </h1>
              <p className="board-brand-summary">
                A shared, Stanford-wide pixel board.
              </p>
              <div className="board-brand-stats" aria-label="Board summary">
                <div className="board-brand-stat">
                  <span className="board-brand-stat-value">
                    {BOARD_SIZE} x {BOARD_SIZE}
                  </span>
                  <span className="board-brand-stat-label">board</span>
                </div>
                <div className="board-brand-stat">
                  <span className="board-brand-stat-value">5 sec</span>
                  <span className="board-brand-stat-label">cooldown</span>
                </div>
              </div>
            </div>

            <div className="panel board-info-panel">
              <div>
                <p className="panel-eyebrow">How it works</p>
                <h2>One pixel at a time</h2>
              </div>
              <ul className="board-rules-list">
                <li>Click any cell to place your selected color.</li>
                <li>Drag to pan and scroll to zoom around the board.</li>
                <li>Each placement triggers a 5-second cooldown before your next move.</li>
              </ul>
              <div>
                <p className="panel-eyebrow">Ground rules</p>
                <ul className="board-rules-list board-rules-list-compact">
                  <li>Coordinate with others to build larger designs.</li>
                  <li>Expect your pixel to be remixed by the community.</li>
                  <li>Be a good person.</li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {isMobileViewport ? (
          <div className="board-mobile-info">
            <div className="board-mobile-badge" aria-label="Board summary">
              <p className="board-mobile-badge-title">Stanford Place</p>
              <p className="board-mobile-badge-meta">{BOARD_SIZE} x {BOARD_SIZE} board</p>
            </div>
          </div>
        ) : null}

        {usesCompactControls ? (
          <div
            className={
              isMobileViewport
                ? "board-compact-controls board-compact-controls-mobile"
                : "board-compact-controls"
            }
            ref={compactControlsRef}
          >
            <div className="board-compact-status">
              <span className="board-compact-status-label">Cooldown</span>
              <span className="board-compact-status-chip board-compact-status-chip-cooldown">
                {placing ? "Placing" : formatMs(cooldownRemaining)}
              </span>
            </div>
            {error ? (
              <p className="error-text board-compact-error" role="alert">
                {error}
              </p>
            ) : null}
            {isMobileViewport ? (
              <>
                <button
                  type="button"
                  className="board-compact-palette-button board-compact-palette-button-mobile"
                  aria-expanded={paletteMenuOpen}
                  onClick={() =>
                    setPaletteMenuOpen((current) => {
                      const nextValue = !current;
                      if (nextValue) {
                        setFeedMenuOpen(false);
                        setHelpMenuOpen(false);
                      }
                      return nextValue;
                    })
                  }
                >
                  <span className="board-compact-palette-label">Color</span>
                  <span
                    className="selected-color-chip board-compact-selected-color"
                    style={{ backgroundColor: PALETTE[selectedColor] }}
                    aria-hidden="true"
                  />
                </button>
                {paletteMenuOpen ? <div className="board-compact-palette-menu">{palettePanel}</div> : null}
                <button
                  type="button"
                  className="board-compact-palette-button board-compact-feed-button board-compact-palette-button-mobile"
                  aria-expanded={feedMenuOpen}
                  onClick={() =>
                    setFeedMenuOpen((current) => {
                      const nextValue = !current;
                      if (nextValue) {
                        setPaletteMenuOpen(false);
                        setHelpMenuOpen(false);
                      }
                      return nextValue;
                    })
                  }
                >
                  <span className="board-compact-palette-label">Feed</span>
                  <span className="board-compact-status-chip">FEED</span>
                </button>
                {feedMenuOpen ? (
                  <div className="board-compact-feed-menu">
                    {activityPanel}
                  </div>
                ) : null}
                <button
                  type="button"
                  className="board-compact-palette-button board-compact-palette-button-mobile"
                  aria-expanded={helpMenuOpen}
                  onClick={() =>
                    setHelpMenuOpen((current) => {
                      const nextValue = !current;
                      if (nextValue) {
                        setPaletteMenuOpen(false);
                        setFeedMenuOpen(false);
                      }
                      return nextValue;
                    })
                  }
                >
                  <span className="board-compact-palette-label">Help</span>
                  <span className="board-compact-status-chip">?</span>
                </button>
                {helpMenuOpen ? <div className="board-compact-help-menu">{helpPanel}</div> : null}
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="board-compact-palette-button"
                  aria-expanded={paletteMenuOpen}
                  onClick={() =>
                    setPaletteMenuOpen((current) => {
                      const nextValue = !current;
                      if (nextValue) {
                        setFeedMenuOpen(false);
                      }
                      return nextValue;
                    })
                  }
                >
                  <span className="board-compact-palette-label">Palette</span>
                  <span
                    className="selected-color-chip board-compact-selected-color"
                    style={{ backgroundColor: PALETTE[selectedColor] }}
                    aria-hidden="true"
                  />
                </button>
                {paletteMenuOpen ? <div className="board-compact-palette-menu">{palettePanel}</div> : null}
              </>
            )}
          </div>
        ) : (
          <>
            <aside className="board-right-rail">
              <div className="panel panel-compact board-status-panel">
                <div className="panel-heading">
                  <div>
                    <p className="panel-eyebrow">Cooldown</p>
                  </div>
                  <span className="panel-chip panel-chip-cooldown">
                    {placing ? "Placing" : formatMs(cooldownRemaining)}
                  </span>
                </div>
                {error ? (
                  <p className="error-text" role="alert">
                    {error}
                  </p>
                ) : null}
              </div>

              {palettePanel}

              {activityPanel}
            </aside>
          </>
        )}

        <div className="board-viewport" ref={viewportRef}>
          <canvas
            ref={canvasRef}
            width={backingCanvasWidth}
            height={backingCanvasHeight}
            className="board-canvas"
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={(event) => void handlePointerUp(event)}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerLeave}
          />
        </div>

      </section>
    </div>
  );
}
