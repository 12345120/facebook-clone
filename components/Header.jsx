import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

function Header() {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openLogoutDropdown = () => {
    setDropdownOpen(dropdownOpen ? false: true);
  };

  return (
    <div className="flex sticky top-0 z-50 bg-[#6867AC] items-center p-2 shadow-md">
      {/* Left  */}
      <div className="flex items-center">
        <Image
          className="cursor-pointer"
          src={"/icons/facebook-logo.svg"}
          width={70}
          height={40}
          layout="fixed"
          objectFit="contain"
        />
        <div className="flex ml-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-block bg-transparent outline-none px-2 placeholder-gray-500 shrink"
            type="text"
            placeholder="Serach"
          ></input>
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
        <div className="relative">
          <img
            src={session.user.image}
            onClick={() => openLogoutDropdown()}
            className="cursor-pointer rounded-full h-[40px] w-[40px]"
            alt="Log Out"
          ></img>
          <div className={`w-[120px] h-[30px] ${dropdownOpen ? 'inline' : 'hidden'} bg-white text-red-500 text-center rounded-lg
          absolute top-[120%] left-[-100%] hover:bg-gray-300 cursor-pointer duration-300`}
          onClick={() => signOut()}>
            Log Out
          </div>
        </div>

        <p className="text-gray-300">{session.user.name}</p>
        <ViewGridAddIcon className="right-icon"></ViewGridAddIcon>
        <ChatIcon className="right-icon"></ChatIcon>
        <BellIcon className="right-icon"></BellIcon>
        <ChevronDownIcon className="right-icon"></ChevronDownIcon>
      </div>
    </div>
  );
}

export default Header;
