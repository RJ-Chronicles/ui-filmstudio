import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import InstaPostUpload from "../components/InstaPostUpload";
import useScrollGBListener from "../hooks/useScrollBGListener";

import { useSession } from "../session";
const Dashboard = () => {
  const { logout } = useSession();
  const { scrollTop } = useScrollGBListener();
  console.log(scrollTop + " scroll");
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [showPost, setShowPost] = useState(true);

  const handleShowImage = () => {
    setShowImage((prev) => !prev);
    setShowPost((prev) => !prev);
  };

  const handleShowPost = () => {
    setShowImage(false);
    setShowPost(true);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col justify-center bg-gray-50 pb-12  bg-no-`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>

      <div
        className={`flex w-full  h-16  text-white px-10 z-20  fixed top-0 left-0 repeat bg-cover items-center ${
          scrollTop > 50
            ? "bg-blue-900 duration-500 rounded-md shadow-md"
            : " duration-500"
        }`}
      >
        <div className="flex justify-items-start space-x-6 w-full text-sm font-semibold font-sans">
          <button
            type="button"
            className={`${
              showImage ? "border-b-2 border-white" : "border-none"
            }`}
            onClick={handleShowImage}
          >
            IMAGE
          </button>
          <button
            type="button"
            className={`${
              showPost ? "border-b-2 border-white" : "border-none"
            }`}
            onClick={handleShowPost}
          >
            POST
          </button>
        </div>
        <div className="flex justify-end w-full">
          <button type="button" className="" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="mt-20 z-10 w-full flex justify-center items-center">
        <section className="min-h-screen flex items-stretch text-white w-full mx-8 ">
          <div
            className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center rounded-sm shadow-sm"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)`,
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide">
                Keep it special
              </h1>
              <p className="text-3xl my-4">
                Capture your personal memory in unique way, anywhere.
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
            style={{ backgroundColor: "#161616" }}
          >
            <div className="absolute lg:hidden z-10 inset-0 bg-slate-500 bg-no-repeat bg-cover items-center">
              <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            {showImage && <FileUpload />}
            {showPost && <InstaPostUpload />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
