import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import db from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "../firebase";
import { errorMessage, successMessage } from "./common/Toastify";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Loader from "./common/Loader";

const InputBox = () => {
  const { data: session } = useSession();

  const [inputText, setInput] = useState("");
  const [imageToPost, setImageToPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const extensionType = ["png", "jpg", "jpeg"];

  const sendPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!inputText && !imageToPost) {
      setLoading(false);
      return errorMessage("Please fill all the fields");
    }
    let docRef;
    try {
      const collectionRef = collection(db, "posts");
      docRef = await addDoc(collectionRef, {
        name: session.user.name,
        email: session.user.email,
        userImg: session.user.image,
        createdAt: serverTimestamp(),
        msg: inputText,
        likes: [],
        comments: [],
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      errorMessage("Something went wrong");
    }

    if (imageToPost && docRef) {
      const storrageRef = ref(storage, `posts/${docRef.id}`);
      const uploadTask = await uploadString(
        storrageRef,
        imageToPost,
        "data_url"
      ).then(async (snapshot) => {
        const downloadURL = await getDownloadURL(storrageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          postImg: downloadURL,
        });
      });
    }
    setInput("");
    setImageToPost(null);
    setLoading(false);
    successMessage("Post created successfully");
  };

  const handlerImage = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      const fileExtension = e.target.files[0].name
        .split(".")
        .splice(1)
        .join("");
      const validExtension = extensionType.includes(fileExtension);
      if (validExtension) {
        reader.readAsDataURL(e.target.files[0]);
      } else {
        alert("Invalid File Type");
      }
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = (e) => {
    e.preventDefault();
    setImageToPost(null);
  };

  return (
    <>
      {loading && <Loader />}
      <div
        className="bg-white rounded-2xl shadow-md
      text-gray-500 font-medium mt-6"
      >
        <div className="flex space-x-4 p-3 items-center">
          <Image
            src={session.user.image}
            width={40}
            height={40}
            className="rounded-full"
            alt="user-img"
          />
          <form className="flex flex-grow" onSubmit={sendPost}>
            <input
              type="text"
              placeholder={`What's on your mind, ${session.user.name} ?`}
              className="rounded-full h-10 flex-grow px-5 focus:outline-none bg-[#F0F2F5] hover:bg-gray-200 placeholder:text-gray-500 transition duration-150"
              name="message"
              value={inputText}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">
              <PaperAirplaneIcon className="text-gray-400 h-6 w-6" />
            </button>
          </form>

          {imageToPost && (
            <div
              className="flex flex-col cursor-pointer transition duration-150 transform filter
            hover:scale-105 hover:brightness-110"
              onClick={removeImage}
            >
              <Image
                width={80}
                height={80}
                src={imageToPost}
                alt="img"
                className="h-10 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex justify-evenly border-t p-3">
          <div className="InputIcons">
            <Image src="/fb-video.png" alt="icon" width={24} height={24} />
            <p className="text-xs sm:text-sm xl:text-[16] font-medium text-gray-800">
              Live Video
            </p>
          </div>
          <div className="InputIcons">
            <label htmlFor="file" className="flex items-center cursor-pointer">
              <Image src="/fb-img.png" alt="icon" width={24} height={24} />
              <p className="text-xs sm:text-sm xl:text-[16] font-medium text-gray-800 ml-2">
                Photo/Video
              </p>
            </label>
            <input
              type="file"
              accept="image/jpeg, image/png"
              hidden
              id="file"
              onChange={handlerImage}
            />
          </div>
          <div className="InputIcons">
            <Image src="/fb-actions.png" alt="icon" width={24} height={24} />
            <p className="text-xs sm:text-sm xl:text-[16] font-medium text-gray-800">
              Feeling/Activity
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
