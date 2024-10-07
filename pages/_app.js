import Navbar from "@/app/components/Navbar";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
