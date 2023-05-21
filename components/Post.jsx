import Image from "next/image";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

import { useState, useEffect } from "react";
import db from "../firebase";
import { useSession } from "next-auth/react";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

import CommentModal from "./CommentModal";
import PostHeader from "./post/PostHeader";
import PostImage from "./post/PostImage";
import PostButtons from "./post/PostButtons";
import PostLikes from "./post/PostLikes";

const Post = ({ item }) => {
  const { data: session } = useSession();
  const [hasliked, setHasLiked] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [likes, setLikes] = useState(false);

  // console.log(item)
  

  useEffect(() => {
    if(item.likes.includes(session?.user?.id)){
      setHasLiked(true)
    }
  }, [item])





  const handlerSetLike = async(e, id) => {
    e.preventDefault();
    if(hasliked){
      try {
        const docRef = await doc(db, "posts", id);
        const docSnap = await updateDoc(docRef, {
          likes : arrayRemove(session?.user?.id)
        })
        setHasLiked(false)
      } catch(error){
        console.log(error)
      }
    }
    else {
      try {
        const docRef = await doc(db, "posts", id);
        const docSnap = await updateDoc(docRef, {
          likes : arrayUnion(session?.user?.id)
        })
        setHasLiked(true)
      } catch(error){
        console.log(error)
      }
    }
  };

  const handlerAddComment = async (e, id) => {
    e.preventDefault();
    const finalComments = [
      { userName: session.user.name, comment: inputVal },
      ...item?.comments,
    ];
    try {
      const docRef = await doc(db, "posts", id);
      const docSnap = await updateDoc(docRef, {
        comments: finalComments,
      });
      setInputVal("");
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModal = () => {
    setOpenModal(true);
  };

  //modal activity and scroll
  // useEffect(() => {
  //   if(openModal){
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "unset"
  //   }
  //   document.body.addEventListener("click", (e) => {
  //     if(openModal){
  //       setOpenModal(false)
  //     }
  //   }
  //   )
  // }, [])

  return (
    <>
      {openModal && <CommentModal setOpenModal={setOpenModal} item={item} />}
      <div className="flex flex-col mt-5 rounded-2xl overflow-hidden">
        <PostHeader item={item} />

        {item.postImg && <PostImage item={item} imgWidth={600}/>}

        {/* footer */}
        <div className=" bg-white text-gray-400 px-3 rounded-b-2xl py-2 shadow-md ">
          <PostLikes item={item} />
          <PostButtons item={item} hasliked={hasliked} handlerSetLike={handlerSetLike}/>

          {/* comment */}
          <div className="py-2 pb-0">
            {item?.comments
              ?.map((comment, index) => {
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
              })
              .slice(0, 1)}
            {item?.comments?.length > 1 && (
              <p
                className="text-gray-500 font-medium text-sm hover:underline pt-1 cursor-pointer"
                onClick={handlerModal}
              >
                View More Comments
              </p>
            )}

            <div className="flex items-center w-full">
              <Image
                src={item.userImg}
                alt="user-img"
                className="rounded-full w-8 h-8"
                width={35}
                height={35}
              />

              <div className="flex items-center w-full bg-gray-100  rounded-full px-2 mt-1">
                <form onSubmit={(e) => handlerAddComment(e, item.id)} className="flex items-center w-full bg-gray-100  rounded-full px-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="flex ml-2 items-center bg-transparent h-9 p-3 outline-none placeholder-gray-500 w-full focus:border-none focus:outline-none"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />

                  <button type="submit">
                    <PaperAirplaneIcon className="text-gray-400 h-6 w-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
