import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { firestore } from "../firebase";
import { simpleAwait } from "../util/util";

export default function Home({ session }) {
  useEffect(() => {
    const addNewUser = async () => {
      const usersCollection = collection(firestore, "users");
      const [snapshot, error1] = await simpleAwait(
        getDocs(
          query(usersCollection, where("email", "==", session.user.email))
        )
      );
      if (error1) {
        return;
      }

      if (snapshot.empty) {
        const [_, error2] = simpleAwait(
          addDoc(usersCollection, {
            email: session.user.email,
            addedTimestamp: serverTimestamp(),
          })
        );
        if (error2) {
          return;
        }
      }
    };

    if (session) {
      addNewUser();
    }
  }, []);

  const Wrapper = ({ children }) => {
    return (
      <>
        <Head>
          <title>Clone!</title>
          <meta
            name="google-site-verification"
            content="g5_A1UoCX80W1e85IM1AWfd31ISPyxq8cLj6MGLmCjg"
          />
        </Head>
        {children}
      </>
    );
  };

  if (!session)
    return (
      <Wrapper>
        <Login></Login>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className="pb-[60px] h-fit bg-gray-100 bg-gradient-to-r from-[#B5D5F4] to-[#B7AAF9] min-h-screen">
        <Header></Header>
        <main className="flex mt-6 p-4 justify-between">
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      </div>
    </Wrapper>
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
