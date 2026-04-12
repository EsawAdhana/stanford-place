import { BoardClient } from "../components/BoardClient";
import { auth, signIn } from "../auth";
import { headers } from "next/headers";

async function signInWithGoogle() {
  "use server";

  const requestHeaders = await headers();

  // #region agent log
  fetch("http://127.0.0.1:7643/ingest/d7f28a3e-3ec9-49dd-bf3f-157e7e358fad", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "6a14f0"
    },
    body: JSON.stringify({
      sessionId: "6a14f0",
      runId: "auth-host-debug",
      hypothesisId: "H5",
      location: "app/page.tsx:8",
      message: "Sign-in server action host inputs",
      data: {
        host: requestHeaders.get("host"),
        origin: requestHeaders.get("origin"),
        referer: requestHeaders.get("referer"),
        xForwardedHost: requestHeaders.get("x-forwarded-host"),
        xForwardedProto: requestHeaders.get("x-forwarded-proto"),
        authUrl: process.env.AUTH_URL ?? null,
        nextAuthUrl: process.env.NEXTAUTH_URL ?? null
      },
      timestamp: Date.now()
    })
  }).catch(() => {});
  // #endregion

  await signIn("google", { redirectTo: "/" });
}

export default async function HomePage() {
  const session = await auth();

  if (!session?.appUser) {
    return (
      <main className="landing-shell">
        <section className="landing-card">
          <h1>
            Help build Stanford&apos;s
            <br />
            own r/place.
          </h1>
          <p>
            Sign in with your Stanford email to place a pixel every minute on a
            shared 250x250 board.
          </p>
          <form action={signInWithGoogle}>
            <button type="submit" className="primary-button">
              Continue with Stanford
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <BoardClient initialUser={session.appUser} initialNow={Date.now()} />
    </main>
  );
}
