import db from "../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export const handlerSetLike = async (e, id, hasliked, setHasLiked, userId) => {
  e.preventDefault();
  if (hasliked) {
    try {
      const docRef = await doc(db, "posts", id);
      const docSnap = await updateDoc(docRef, {
        likes: arrayRemove(userId),
      });
      setHasLiked(false);
    } catch (error) {}
  } else {
    try {
      const docRef = await doc(db, "posts", id);
      const docSnap = await updateDoc(docRef, {
        likes: arrayUnion(userId),
      });
      setHasLiked(true);
    } catch (error) {}
  }
};
