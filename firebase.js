import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgxKCV-cl3lb4LML1Xw0v7TOHamgNDwKY",
  authDomain: "facebook-nextjs-a3c01.firebaseapp.com",
  projectId: "facebook-nextjs-a3c01",
  storageBucket: "facebook-nextjs-a3c01.appspot.com",
  messagingSenderId: "351479333803",
  appId: "1:351479333803:web:bfa6bbcf3b51e8b09b48ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {storage};
export default db;