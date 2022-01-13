import Image from "next/image";
import { ThumbUpIcon, ChatIcon, ShareIcon } from "@heroicons/react/outline";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col mt-5 p-4 bg-gradient-to-r from-[#B5D3F4] to-[#9581F4] rounded-lg shadow-md">
      <div className="flex space-x-4 items-center">
        <img src={image} className="rounded-full h-10"></img>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-2">{message}</div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white my-2">
          <Image src={postImage} objectFit="cover" layout="fill"></Image>
        </div>
      )}

      <hr className="mt-4" />

      <div className="flex justify-evenly items-center mt-3">
        <div className="post-icon brighten-blue cursor-pointer">
          <ThumbUpIcon className="h-7 text-white" />
          <p>Like</p>
        </div>
        <div className="post-icon brighten-blue cursor-pointer">
          <ChatIcon className="h-7 text-white" />
          <p>Comment</p>
        </div>
        <div className="post-icon brighten-blue cursor-pointer">
          <ShareIcon className="h-7 text-white" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
