import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
    </div>
  );
};

export default SignIn;
