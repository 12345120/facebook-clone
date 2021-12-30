import { useSession } from "next-auth/react";
import Image from "next/image";
import { CakeIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { addDoc, collection, setDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import { firestore, storage } from "../firebase";
import {
  getDownloadURL,
  ref,
  StringFormat,
  uploadString,
} from "firebase/storage";

function InputBox() {
  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imgToPost, setImgToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    console.log("before");

    if (!inputRef.current.value) return;

    console.log("after");

    const postsCollection = collection(firestore, "posts");
    addDoc(postsCollection, {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(), 
    })
      .catch((error) => {
        console.log("rejected: ", error);
      })
      .then((document) => {
        if (imgToPost) {
          const storageRef = ref(storage, `posts/${document.id}`);
          uploadString(storageRef, imgToPost, StringFormat.DATA_URL)
            .catch((error) => console.log(error))
            .then((result) => {
              getDownloadURL(result.ref).then((url) => {
                setDoc(
                  document,
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
            })
            .catch((error) => console.log(error));

          removeImageToPost();
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImgToPost(readerEvent.target.result);
    };
  };

  const removeImageToPost = () => {
    setImgToPost(null);
    filePickerRef.current.value = "";
  };

  return (
    <div className="shadow-md bg-white mt-10 p-4 rounded-xl">
      <div className="flex items-center space-x-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form action="" method="get" className="w-full flex space-x-2">
          <input
            className="outline-none bg-gray-200 w-full rounded-full text-gray-500 p-4"
            type="text"
            ref={inputRef}
            placeholder={`Want to share something, ${session.user.name}?`}
          />
          <input hidden type="submit" className="" onClick={sendPost} />
        </form>

        {imgToPost && (
          <div
            className="ml-2 hover:scale-[110%] duration-300 cursor-pointer flex flex-col hover:brightness-125"
            onClick={removeImageToPost}
          >
            <img src={imgToPost} className="h-10 object-contain"></img>
            <p className="text-red-600 text-sm">Remove</p>
          </div>
        )}
      </div>

      <hr className="mt-4" />
      <div className="flex justify-evenly items-center mt-3">
        <div className="post-icon">
          <VideoCameraIcon className="h-7 text-purple-500" />
          <p>Video</p>
        </div>
        <div
          className="post-icon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-red-500" />
          <p>Photo/Video</p>
          <input
            hidden
            type="file"
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>
        <div className="post-icon">
          <CakeIcon className="h-7 text-green-300" />
          <p>Celebrate</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
