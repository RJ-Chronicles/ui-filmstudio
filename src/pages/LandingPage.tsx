import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col space-y-4">
        <h1 className="font-bold font-sans text-3xl text-center">
          Landing page
        </h1>
        <button
          type="button"
          onClick={(e) => navigate("/login")}
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Landingpage;
