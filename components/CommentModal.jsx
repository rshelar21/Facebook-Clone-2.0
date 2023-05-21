import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import PostHeader from "./post/PostHeader";
import PostImage from "./post/PostImage";
import PostButtons from "./post/PostButtons";
import PostLikes from "./post/PostLikes";

const CommentModal = ({ item, setOpenModal }) => {
  console.log(item);
  const handlerCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="w-full fixed inset-0 z-40 ">
        <div className="flex justify-center">
          <div className="w-full max-w-[800px] mt-20 h-[600px] overflow-y-scroll scrollbar-hide rounded-md text-black shadow-lg relative bg-white">
            <div className="p-4 border-b-2 border-[#ccc] flex items-center justify-center z-50 top-0 left-0 right-0 sticky bg-white">
              <h3 className="text-center ml-auto text-lg font-semibold tedxt-black">{`${item.name}'s Post`}</h3>
              <div className=" ml-auto" onClick={handlerCloseModal}>
                <XMarkIcon className="hover:bg-gray-300 icon" />
              </div>
            </div>
            <PostHeader item={item} />
            {item.postImg && <PostImage item={item} imgWidth={800}/>}
            <div className="p-3">
            <PostLikes item={item}/>
            <PostButtons item={item} />
            </div>
            <div className="px-4 pb-2">
              {item?.comments?.map((comment, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-md bg-gray-200 w-max py-2 px-3 mt-2"
                  >
                    <p className="text-sm text-gray-500">{comment?.userName}</p>
                    <p className="text-black text-sm font-normal">
                      {comment?.comment}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentModal;
