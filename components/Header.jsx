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
        <Image
        // src={session.user.image}
        src={'/icons/person2.svg'}
        onClick={() => signOut()}
        className="cursor-pointer rounded-full"
        width={40}
        height={40}
        layout="fixed"></Image>
        
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
