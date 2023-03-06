// import * as firebase from "firebase/app";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZAyD2zRy5vuatzTRoISHBWvD1GB6Pb6o",
  authDomain: "nwitter-e33e5.firebaseapp.com",
  projectId: "nwitter-e33e5",
  storageBucket: "nwitter-e33e5.appspot.com",
  messagingSenderId: "441802188520",
  appId: "1:441802188520:web:780ba3464d82e231a18b5d",
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth();

export default app;
