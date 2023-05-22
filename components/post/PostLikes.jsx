import Image from "next/image";

const PostLikes = ({ item }) => {
  return (
    <>
      <div className="flex items-center space-x-1 border-b pb-2 border-[#ccc]">
        <Image src="/like-icon.svg" alt="like-icon" width={18} height={18} />
        <p className="text-sm">
          {item?.likes.length > 0 ? item?.likes?.length : 0} Likes
        </p>
      </div>
    </>
  );
};

export default PostLikes;
