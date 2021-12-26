import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) return <Login></Login>;

  return (
    <div>
      <Head>
        <title>FaceBook</title>
      </Head>

      <Header></Header>

      <main>
        <Sidebar></Sidebar>
        {/* Feed */}
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
