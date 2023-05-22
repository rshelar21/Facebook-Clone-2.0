import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {} from "firebase/firestore";
import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";

const PostHeader = ({ item }) => {
  const { data: session } = useSession();
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      {deleteModal && (
        <DeleteModal setDeleteModal={setDeleteModal} postId={item?.id} />
      )}
      <div className="">
        <div className="px-5 py-3 bg-white ">
          <div className="flex items-center justify-between">
            <div className="flex items-start space-x-2">
              <Image
                src={item?.userImg}
                alt="user-img"
                className="rounded-full w-10 h-10"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium text-[#050505] text-sm">
                  {item.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {new Date(item?.createdAt?.seconds * 1000).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="cursor-pointer relative group">
              <EllipsisHorizontalIcon className="w-8 h-8 text-gray-800" />

              <div
                className="bg-red opacity-0 absolute rounded shadow-md right-1 p-2 w-max group-hover:opacity-100"
                onClick={() => setDeleteModal(true)}
              >
                Delete Post
              </div>
            </div>
          </div>

          <p className="pt-3">{item.msg}</p>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
