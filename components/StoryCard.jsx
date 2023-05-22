import Image from "next/image";
const StoryCard = ({ src, profile, name }) => {
  return (
    <>
      <div className="relative h-14 w-14 md:h-20 md:w-20
      lg:h-56 lg:w-32  cursor-pointer overflow-x 
      p-3 transition duration-200 transform ease-in hover:scale-105
      hover:animate-pulse">
        <Image
          className="absolute opacity-0 lg:opacity-100 rounded-full z-50
            top-10 object-cover"
          src={profile}
          width={40}
          height={40}
          alt="story"
        />
        <img
         src={src}
          alt=""
          className="object-cover filter brightness-75 rounded-full
            lg:rounded-3xl h-full w-full"
        />
      </div>
    </>
  );
};

export default StoryCard;
