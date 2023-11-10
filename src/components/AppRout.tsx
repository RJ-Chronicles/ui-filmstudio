import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/AdminLoginPage";
import Dashboard from "../pages/Dashboard";
import Landingpage from "../pages/LandingPage";

import AppContext from "../store/AppContext";

const AppRout = () => {
  const { state } = useContext(AppContext);
  const { isLoggedIn } = state.user;
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
