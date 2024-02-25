import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChIcMkBiWaNlp-y9kRsPlgkrRzEufPaB4",
  authDomain: "react-blogs-app-2074d.firebaseapp.com",
  projectId: "react-blogs-app-2074d",
  storageBucket: "react-blogs-app-2074d.appspot.com",
  messagingSenderId: "930900753701",
  appId: "1:930900753701:web:44b3f35f077fbc800eeecc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
