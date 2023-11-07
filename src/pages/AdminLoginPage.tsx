import { User, ApplicationProps } from "../store/type";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizedSnackbar from "../components/Snackbar";

const AdminLogin: React.FC<ApplicationProps> = ({
  setLoggedInUser,
  loggedInUser,
  setLoadingSpinner,
}) => {
  const navigate = useNavigate();
  const [snackBar, toggleSnackBar] = useState(false);
  const [userResponse, setUserResponse] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const handleUserResponse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const savedUser: User = {
      username: userResponse.username,
      password: userResponse.password,
      token: "",
      isLoggedIn: true,
    };
    setLoggedInUser(savedUser);
    toggleSnackBar(true);
    setLoadingSpinner(true);
    setTimeout(() => {
      setLoadingSpinner(false);
      navigate("/admin-dashboard");
    }, 5000);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Product Owner Login Here Once
                </h1>
              </div>
              <form
                className="divide-y divide-gray-200"
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

      <CustomizedSnackbar
        snackbarClose={toggleSnackBar}
        open={snackBar}
        message={"user Logined successfully"}
        severty={"success"}
      />
    </>
  );
};

export default AdminLogin;
