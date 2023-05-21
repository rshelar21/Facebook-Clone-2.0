import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
// Check user login state with the useSession() Hook
export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
} 
