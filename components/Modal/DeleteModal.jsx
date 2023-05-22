import { useState, useEffect } from "react";
import db from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { successMessage, errorMessage } from "../common/Toastify";

const DeleteModal = ({ setDeleteModal, postId }) => {
  const handlerDeletePost = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      successMessage("Post deleted successfully");
      setDeleteModal(false);
    } catch (error) {
      errorMessage("Something went wrong");
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full fixed inset-0 z-40 backdrop-blur-sm bg-gray-100 bg-opacity-40 flex justify-center items-center">
        <div className="bg-white p-3 rounded-md w-full max-w-[400px] shadow-lg">
          <h2 className="text-center font-medium text-lg">
            Are you sure you want to delete this post?
          </h2>

          <div className="flex items-center space-x-2 pt-3">
            <button
              className="blueButton p-3"
              onClick={(e) => handlerDeletePost(postId)}
            >
              Yes
            </button>

            <button
              className="p-3 whiteButton"
              onClick={() => setDeleteModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
