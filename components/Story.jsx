import Image from "next/image";

function Story({ src, profile, name }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3 z-0
    transform hover:scale-110 filter hover:brightness-150 transition duration-150">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      ></Image>
      <Image
      className="object-cover filter brightness-75 rounded-full lg:rounded-3xl overflow-x-scroll"
      src={src}
      layout="fill"></Image>
      <p className="absolute bottom-4 w-5/6 opacity-0 lg:opacity-100 text-white text-sm font-bold truncate">{name}</p>
    </div>
  )
}

export default Story
