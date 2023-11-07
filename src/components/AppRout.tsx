import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/AdminLoginPage";
import Dashboard from "../pages/Dashboard";
import Landingpage from "../pages/LandingPage";
import { ApplicationProps } from "../store/type";
const AppRout: React.FC<ApplicationProps> = ({
  setLoggedInUser,
  loggedInUser,
  setLoadingSpinner,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />}></Route>
      <Route
        path="/login"
        element={
          <AdminLogin
            setLoggedInUser={setLoggedInUser}
            loggedInUser={loggedInUser}
            setLoadingSpinner={setLoadingSpinner}
          />
        }
      />
      <Route
        path="/admin-dashboard"
        element={loggedInUser?.isLoggedIn ? <Dashboard /> : <Landingpage />}
      ></Route>
    </Routes>
  );
};

export default AppRout;
