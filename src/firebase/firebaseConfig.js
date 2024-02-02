
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiX4hv5FJGinbWQT5IUR32vtzsfXCHKq0",
  authDomain: "project-react-js-898fb.firebaseapp.com",
  projectId: "project-react-js-898fb",
  storageBucket: "project-react-js-898fb.appspot.com",
  messagingSenderId: "944562031991",
  appId: "1:944562031991:web:4b4a4774cb51003d1da572"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
