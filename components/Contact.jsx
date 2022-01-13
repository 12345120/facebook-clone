import Image from "next/image";
import { useState } from "react";

function Contact({ src, name, hovered, setHovered }) {
  const [selfHover, setSelfHover] = useState(false);

  return (
    <div
      className={`mt-4 flex space-x-2 items-center p-3 hover:bg-[#6867AC] rounded-lg cursor-pointer
    hover:translate-x-[-20px] duration-[400ms] relative ${(hovered && !selfHover) && 'opacity-50'}`}
      onMouseOver={(e) => {
        setHovered(true);
        setSelfHover(true);
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        setSelfHover(false);
      }}
    >
      <Image
        className="rounded-full"
        src={src}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
      />
      <p className="font-semibold">{name}</p>
      <div className="absolute bottom-3 left-8 w-3 h-3 bg-green-400 rounded-full"></div>
    </div>
  );
}

export default Contact;
