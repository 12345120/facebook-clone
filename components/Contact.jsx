import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="mt-4 flex space-x-2 items-center p-3 hover:bg-gray-300 rounded-lg cursor-pointer
    hover:translate-x-[-20px] duration-[400ms] relative">
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
