import Image from "next/image";

const PostImage = ({ item, imgWidth }) => {
  return (
    <>
      <div className="">
        <div className="relative w-full">
          <Image
            src={item.postImg}
            alt="img"
            // className="w-full h-full"
            width={imgWidth}
            height={300}
            // quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default PostImage;
