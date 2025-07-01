import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <>
          <h1>Welcome to Cnergy Learning!</h1>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </>
      ) : (
        <>
          <h1>Welcome, {session.user.name}!</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
