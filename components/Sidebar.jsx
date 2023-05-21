import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import {
  UsersIcon,
  CreditCardIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  TicketIcon,
  ClockIcon,
  TvIcon,
  BookmarkIcon,
  DocumentTextIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const leftSidebar = [
  {
    id: 1,
    title: "Friends",
    icons: UsersIcon,
  },
  {
    id: 2,
    title: "Most Recent",
    icons: CreditCardIcon,
  },
  {
    id: 3,
    title: "Groups",
    icons: UserGroupIcon,
  },
  {
    id: 4,
    title: "Marketplace",
    icons: BuildingStorefrontIcon,
  },
  {
    id: 5,
    title: "Watch",
    icons: TvIcon,
  },
  {
    id: 6,
    title: "Memories",
    icons: ClockIcon,
  },
  {
    id: 7,
    title: "Saved",
    icons: BookmarkIcon,
  },
  {
    id: 8,
    title: "Pages",
    icons: DocumentTextIcon,
  },
  {
    id: 9,
    title: "Events",
    icons: TicketIcon,
  },
  {
    id: 10,
    title: "Favorites",
    icons: StarIcon,
  },
];

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="p-2 mt-5 w-full max-w-[360px] hidden sm:inline-block">
        <SidebarRow src={session.user.image} title={session.user.name} />
        {leftSidebar.map((item) => (
          <SidebarRow key={item.id} title={item.title} Icon={item.icons} />
        ))}
        <SidebarRow title="See more" LastIcon={ChevronDownIcon} />

        <div className="pl-2">
          <p className="text-gray-500 text-xs font-medium">
            <a href="" className="hover:underline">
              Privacy
            </a>
            <span className="text-sm font-medium"> · </span>
            <a href="" className="hover:underline">
              Term
            </a>
            <span className="text-sm font-medium"> · </span>
            <a href="" className="hover:underline">
              Advertising
            </a>
            <span className="text-sm font-medium"> · </span>
            <a href="" className="hover:underline">
              Ad Choises
            </a>
            <span className="text-sm font-medium"> · </span>
            <a href="" className="hover:underline">
              Cookies
            </a>
            <span className="text-sm font-medium"> · </span>
          </p>
          <p className="text-gray-500 text-xs font-medium">More · Meta 2023</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
