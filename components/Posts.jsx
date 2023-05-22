import Image from "next/image";
import { useState, useEffect } from "react";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import db from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [postData, setPostsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const queryRef = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const getData = async () => {
    const docRef = await onSnapshot(queryRef, (querySnapshot) => {
      setPostsData(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  };

  return (
    <>
      {postData.map((item, index) => {
        return <Post key={item.id} item={item} />;
      })}
    </>
  );
};

export default Posts;
