import { Counter, Gauge, Histogram, Registry, collectDefaultMetrics } from "prom-client";

export const metricsRegistry = new Registry();

collectDefaultMetrics({ register: metricsRegistry });

export const placementAttempts = new Counter({
  name: "stanfordplace_placement_attempts_total",
  help: "Placement attempts grouped by outcome",
  labelNames: ["outcome"],
  registers: [metricsRegistry]
});

export const placementLatencyMs = new Histogram({
  name: "stanfordplace_placement_duration_ms",
  help: "Placement transaction duration in milliseconds",
  buckets: [5, 10, 25, 50, 100, 250, 500, 1000],
  registers: [metricsRegistry]
});

export const websocketConnections = new Gauge({
  name: "stanfordplace_websocket_connections",
  help: "Active websocket connections on this node",
  registers: [metricsRegistry]
});
