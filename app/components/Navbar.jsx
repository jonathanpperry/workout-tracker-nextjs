// components/Navbar.jsx or components/Navbar.tsx
import React from "react";
import styles from "./Navbar.module.css";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar = ({}) => {
  const { data: session } = useSession();

  return (
    <nav className={styles.container}>
      <ul style={{ flex: 1, flexDirection: "row" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>
        {session ? (
          <div className={styles.userProfile}>
            <img
              src={session.user.image}
              alt="Profile Picture"
              width={50}
              height={50}
            />
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => signIn("facebook")}>
            Sign in with Facebook
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
