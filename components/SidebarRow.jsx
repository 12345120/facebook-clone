import Image from "next/image"

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="hover:scale-[105%] duration-[300ms] flex justify-start space-x-4 p-4 w-[250px] cursor-pointer hover:bg-[#A3A6F4] rounded-lg">
      {src && (
        <Image className="rounded-full"
        src={src}
        width={30}
        height={30}
        layout="fixed"/>
      )}
      {Icon && (
        <Icon className="h-8 w-8 text-blue-500"></Icon>
      )}
      
      <p className="hidden sm:inline-block">{title}</p>
    </div>
  )
}

export default SidebarRow
