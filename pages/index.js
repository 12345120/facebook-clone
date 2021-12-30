import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ session }) {
  if (!session) return <Login></Login>;

  return (
    <div className="">
      <div className="pb-[60px] h-fit bg-gray-100">
        <Head>
          <title>FaceBook</title>
        </Head>
        <Header></Header>
        <main className="flex mt-6 p-4 justify-between">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </main>
      </div>
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
