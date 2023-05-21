import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon,
  UserGroupIcon,
  BellIcon,
  HomeIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const NavList = [
  {
    id: 1,
    name: "Home",
    Icon: HomeIcon,
    link: "/",
  },
  {
    id: 2,
    name: "Message",
    Icon: FlagIcon,
    link: "/message",
  },
  {
    id: 3,
    name: "Video",
    Icon: PlayCircleIcon,
    link: "/video",
  },
  {
    id: 4,
    name: "Cart",
    Icon: ShoppingCartIcon,
    link: "/cart",
  },
  {
    id: 5,
    name: "Group",
    Icon: UserGroupIcon,
    link: "/group",
  },
];

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <>
      <div
        className="flex sticky top-0 z-50 bg-white shadow-md px-2 justify-between py-1
      "
      >
        {/* Left */}
        <div className="flex items-center">
          <Image
            height={60}
            width={60}
            src="/logo.png"
            priority
            alt="Facebook-logo"
          />
          <div className="flex items-center bg-gray-100 p-2 rounded-full ">
            <MagnifyingGlassIcon className="h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="hidden sm:flex items-center bg-transparent h-9 
            outline-none placeholder-gray-500 ml-2"
            />
          </div>
        </div>

        {/* center */}
        <div className="">
          <div className="hidden sm:flex justify-center mr-28">
            <div className="flex space-x-5 md:space-x-2 ">
              {NavList.map(({ link, id, Icon }) => {
                return (
                  <div
                    key={id}
                    className={`flex items-center justify-center cursor-pointer  
                  h-14 px-10 ${
                    pathname === link && "border-b-4 border-[#1877F2]"
                  }`}
                  >
                    {
                      <Icon
                        className={`h-6 ${
                          pathname === link ? "text-[#1877F2]" : "text-gray-500"
                        }`}
                      />
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* right */}

        <div className="flex items-center justify-end space-x-1 sm:space-x-3">
          <SquaresPlusIcon className="icon" title="Menu" />
          <ChatBubbleLeftEllipsisIcon className="icon" title="Message" />
          <BellIcon className="icon" title="Notifications" />
          <div className="relative group">
            <Image
              src={session.user?.image}
              width={40}
              height={40}
              className="rounded-full cursor-pointer "
              alt="profile"
            />

            <div
              className="opacity-0 absolute w-20 text-center p-1 top-10 right-3 rounded-md  bg-white shadow-md group-hover:opacity-100 cursor-pointer"
              onClick={signOut}
            >
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
