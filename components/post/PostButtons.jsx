import {
  HandThumbUpIcon,
  ShareIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

import { HandThumbUpIcon as HandIconFilled } from "@heroicons/react/24/solid";

import { useState, useEffect } from "react";
import { handlerSetLike } from "../../firebase/sendData";
import { useSession } from "next-auth/react";

const PostButtons = ({ item }) => {
  const { data: session } = useSession();
  const [hasliked, setHasLiked] = useState(false);

  useEffect(() => {
    if (item?.likes?.includes(session?.user?.id)) {
      setHasLiked(true);
    } else {
      setHasLiked(false);
    }
  }, [item]);

  const setLikes = async (e) => {
    handlerSetLike(e, item?.id, hasliked, setHasLiked, session?.user?.id);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-2 text-gray-500 border-b pb-2 border-[#ccc]">
        <div className="postButtons" onClick={setLikes}>
          {hasliked ? (
            <HandIconFilled className="h-5 w-5 text-[#1877F2]" />
          ) : (
            <HandThumbUpIcon className="h-5 w-5" />
          )}
          {hasliked ? (
            <p className="text-xs sm:text-base text-[#1877F2]">Like</p>
          ) : (
            <p className="text-xs sm:text-base">Like</p>
          )}
        </div>
        <div className="postButtons">
          <ChatBubbleLeftIcon className="h-5 w-5 " />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="postButtons">
          <ShareIcon className="h-5 w-5" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </>
  );
};

export default PostButtons;
