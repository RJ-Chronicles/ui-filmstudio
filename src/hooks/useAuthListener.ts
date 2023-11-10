import { useState, useEffect } from "react";

import firebase from "firebase/app";
import { User } from "@firebase/auth-types";

const useAuthListener = () => {
  const [user, setUser] = useState<User | null>(() =>
    JSON.parse(localStorage.getItem("authUser") || "{}")
  );

  // useEffect(() => {
  //   const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
  //     if (authUser) {
  //       localStorage.setItem("authUser", JSON.stringify(authUser));
  //       setUser(authUser);
  //     } else {
  //       localStorage.removeItem("authUser");
  //       setUser(null);
  //     }
  //   });

  //   return () => listener?.();
  // }, [firebase]);

  return { user };
};
export default useAuthListener;
