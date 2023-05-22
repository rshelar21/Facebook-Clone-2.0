import Head from "next/head";
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";

import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widget from "@/components/Widget";

export default function Home({}) {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <>
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>Facebook</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="flex justify-between">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </>
  );
}
