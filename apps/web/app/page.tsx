import { BoardClient } from "../components/BoardClient";
import { auth, signIn } from "../auth";

async function signInWithGoogle() {
  "use server";
  await signIn("google", { redirectTo: "/" });
}

export default async function HomePage() {
  const session = await auth();

  if (!session?.appUser) {
    return (
      <main className="landing-shell">
        <section className="landing-card">
          <p className="eyebrow">StanfordPlace</p>
          <h1>Build Stanford&apos;s own r/place.</h1>
          <p>
            Sign in with your Stanford Google Workspace account to place one
            pixel every minute on the shared 250 x 250 board.
          </p>
          <form action={signInWithGoogle}>
            <button type="submit" className="primary-button">
              Continue with Stanford Google
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <BoardClient initialUser={session.appUser} />
    </main>
  );
}
