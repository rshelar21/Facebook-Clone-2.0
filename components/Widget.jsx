import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  EllipsisHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Contact from "./Contact";

const contacts = [
  {
    id: 1,
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
  },
  {
    id: 3,
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
  },
  {
    id: 4,
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
  },
];
// hidden lg:flex flex-col mt-5 p-2 w-60 flex-grow
const Widget = () => {
  return (
    <>
      <div className="mt-5 p-2 w-full max-w-[360px] hidden sm:inline-block">
        <h2 className="text-base font-medium text-gray-500 ">Birthdays</h2>
        <div className="text-gray-500 mb-5 hover:bg-gray-200">
          <p className="font-normal">
            {" "}
            <span className="text-black font-semibold">
              Elon Musk
            </span> and{" "}
            <span className="text-black font-semibold">2 Others </span> have
          </p>
          <p className="">birthdays today.</p>
        </div>

        <div className="border-t border-[#ccc] pt-2">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-medium text-gray-500 ">Contacts</h3>

            <div className="flex items-center space-x-2">
              <VideoCameraIcon className="h-6 w-6 text-gray-500" />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500" />
            </div>
          </div>
          {contacts.map((item, index) => {
            return <Contact item={item} key={index} />;
          })}
        </div>
      </div>
    </> 
  );
};

export default Widget;
