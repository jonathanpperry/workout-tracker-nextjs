// pages/index.js or pages/page.jsx
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

export default function Home({ session }) {
  return (
    <div>
      {session ? (
        <p>Welcome, {session.user?.name}</p>
      ) : (
        <button onClick={() => signIn("facebook")}>
          Sign in with Facebook
        </button>
      )}
    </div>
  );
}
