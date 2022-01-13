import { addDoc, collection, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { firestore } from "../firebase";

export default function Home({ session }) {
  if (!session) return <Login></Login>;

  useEffect(() => {
    if (session) {
      const usersCollection = collection(firestore, "users");
      const querySnapshot = getDocs(
        query(usersCollection, where("email", "==", session.user.email))
      ).then((snapshot) => {
        if (snapshot.empty) {
          console.log("new user: add");
          addDoc(usersCollection, {
            email: session.user.email,
            addedTimestamp: serverTimestamp(),
          });
        } else {
          console.log("existing user: no add");
        }
      }).catch((error) => {
        console.error(error); 
      });
    }
  }, []);

  return (
    <div className="">
      <div className="pb-[60px] h-fit bg-gray-100 bg-gradient-to-r from-[#B5D5F4] to-[#B7AAF9] min-h-screen">
        <Head>
          <title>FaceBook</title>
        </Head>
        <Header></Header>
        <main className="flex mt-6 p-4 justify-between">
          <Sidebar />
          <Feed />
          <Widgets />
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
