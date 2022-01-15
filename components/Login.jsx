import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-xl border-[2px] border-blue-300 w-fit m-auto mt-10 p-5 bg-white shadow-blue-300 shadow-xl">
        <Image
          src="/icons/facebook-logo.svg"
          height={400}
          width={400}
          objectFit="contain"
        />
        <h1
          onClick={() => signIn("facebook")}
          className="w-fit my-5 p-5 bg-blue-500 rounded-full text-white cursor-pointer"
        >
          Login With Facebook
        </h1>
      </div>
    </>
  );
}

export default Login;
