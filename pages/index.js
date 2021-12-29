import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) return <Login></Login>;

  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>FaceBook</title>
      </Head>

      <Header></Header>

      <main className="flex mt-6 p-4">
        <Sidebar></Sidebar>
        <Feed/>
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  
  const session = await getSession(context);

  // console.log("session: ", session);

  return {
    props: {
      session,
    },
  };
}
