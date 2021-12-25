import Image from "next/image";
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import { SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="flex sticky top-0 z-50 bg-white items-center p-2 shadow-md">
      {/* Left  */}
      <div className="flex items-center">
        <Image
          className="cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          width={70}
          height={40}
          layout="fixed"
          objectFit="contain"
        />
        <div className="flex ml-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input className="hidden md:inline-block bg-transparent outline-none px-2 placeholder-gray-500 shrink" type="text" placeholder="Serach"></input>
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center grow space-x-6 md:space-x-3">
        <HeaderIcon active Icon={HomeIcon}></HeaderIcon>
        <HeaderIcon Icon={FlagIcon}></HeaderIcon>
        <HeaderIcon Icon={PlayIcon}></HeaderIcon>
        <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
        <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
      </div>

      {/* Right */}
      <div className="flex grow justify-end items-center whitespace-nowrap font-semibold space-x-6">
        <p>Heon Yim</p>
        <ViewGridAddIcon className="right-icon"></ViewGridAddIcon>
        <ChatIcon className="right-icon"></ChatIcon>
        <BellIcon className="right-icon"></BellIcon>
        <ChevronDownIcon className="right-icon"></ChevronDownIcon>
      </div>
      
    </div>
  );
}

export default Header;
