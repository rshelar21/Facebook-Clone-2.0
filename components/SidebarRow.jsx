import Image from "next/image";

const SidebarRow = ({ src, title, Icon, LastIcon }) => {
  return (
    <>
      <div className="hidden sm:flex items-center space-x-2 pt-3 pb-[10px] rounded-md cursor-pointer hover:bg-gray-200 ">
        {src && (
          <Image
            src={src}
            width={50}
            height={50}
            priority
            alt="user-Image"
            className="rounded-full w-10 h-10 cursor-pointer"
          />
        )}

        {Icon && <Icon className="h-7 text-blue-500 w-8" />}

        {LastIcon && (
          <div className="bg-gray-200 rounded-full p-1.5">
            <LastIcon className="h-5 w-5" />
          </div>
        )}
        <p className="hidden sm:inline-flex font-medium text-base">{title}</p>
      </div>
    </>
  );
};

export default SidebarRow;
