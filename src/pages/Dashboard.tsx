import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import InstaPostUpload from "../components/InstaPostUpload";

import { useSession } from "../session";
const Dashboard = () => {
  const { logout } = useSession();
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(true);
  const [showPost, setShowPost] = useState(false);

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
      className="relative min-h-screen flex flex-col justify-center bg-gray-50 pb-12 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover items-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>

      <div className="flex w-full  h-12 bg-yellow-800 z-10 text-white px-10 mb-12 rounded-md shadow-md">
        <div className="flex justify-items-start space-x-6 w-full">
          <button type="button" className="" onClick={handleShowImage}>
            IMAGE
          </button>
          <button type="button" className="" onClick={handleShowPost}>
            POST
          </button>
        </div>
        <div className="flex justify-end w-full">
          <button type="button" className="" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {showImage && <FileUpload />}
      {showPost && <InstaPostUpload />}
    </div>
  );
};

export default Dashboard;
