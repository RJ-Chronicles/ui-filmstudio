import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXY1NO3twLhfTxfcmdcCNKjdrKcK4H-Og",
  authDomain: "film-auth-e51c8.firebaseapp.com",
  projectId: "film-auth-e51c8",
  storageBucket: "film-auth-e51c8.appspot.com",
  messagingSenderId: "1080512135885",
  appId: "1:1080512135885:web:293d4d20139d0615859f84",
  measurementId: "G-02QJQEF24V",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};
export { auth, logInWithEmailAndPassword, logout };
