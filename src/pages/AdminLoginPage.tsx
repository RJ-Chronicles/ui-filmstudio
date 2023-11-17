import { User } from "../store/type";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../store/AppContext";
import { useSession } from "../session";

import loginBGImage from "../assets/img/login1.jpg";

const AdminLogin = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { login } = useSession();
  const { user } = useSession();

  const [userResponse, setUserResponse] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const handleUserResponse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "TOGGLE_SNACKBAR",
      payload: {
        isOpen: true,
        message: "Login successful",
        severity: "success",
      },
    });
    dispatch({ type: "SET_LOADING", payload: true });
    login(userResponse.username, "ljdlfkasj", 1700406296000, true);
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
      navigate("/admin-dashboard");
    }, 5000);
  };

  useEffect(() => {
    if (user) {
      dispatch({
        type: "TOGGLE_SNACKBAR",
        payload: {
          isOpen: true,
          message: "You have been logged in with active session",
          severity: "success",
        },
      });
      dispatch({ type: "SET_LOADING", payload: true });
      setTimeout(() => {
        navigate("/admin-dashboard");
        dispatch({ type: "SET_LOADING", payload: false });
      });
    }
  }, [user]);
  return (
    <>
      <div
        className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 font-helvetica-neue bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${loginBGImage})` }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center">
                  Owner Login
                </h1>
              </div>
              <form
                className="divide-y divide-gray-200 min-w-[320px] md:min-w-[400px]"
                onSubmit={handleLoginSubmit}
              >
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={handleUserResponse}
                      required={true}
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleUserResponse}
                      required={true}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
