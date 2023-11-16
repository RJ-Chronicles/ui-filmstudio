import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AdminLogin from "../pages/AdminLoginPage";
import Dashboard from "../pages/Dashboard";
import Landingpage from "../pages/LandingPage";

import AppContext from "../store/AppContext";
import { User } from "../store/type";

const AppRout = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isLoggedIn } = state.user;
  const { user } = state;

  useEffect(() => {
    if (user && !isLoggedIn) {
      const savedUser: User = {
        username: user.username,
        password: "password",
        token: user.token,
        isLoggedIn: true,
      };
      dispatch({ type: "OWNER_LOGIN", payload: savedUser });
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />}></Route>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/admin-dashboard"
        element={isLoggedIn ? <Dashboard /> : <Landingpage />}
      ></Route>
    </Routes>
  );
};

export default AppRout;
