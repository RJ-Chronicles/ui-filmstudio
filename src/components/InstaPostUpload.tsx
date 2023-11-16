const InstaPostUpload = () => {
  return (
    <form className="w-full z-10">
      <div className="w-full py-6 z-20">
        <div className="flex  mt-5  md:space-x-3 flex-col space-y-0">
          <label htmlFor="post" className="block text-left py-2 md:px-4">
            Insta Post Url
          </label>
          <input
            type="url"
            id="post"
            placeholder="Enter your insta post url"
            className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-sm  md:text-left placeholder:text-left focus:outline-none"
          />
        </div>

        <div className="flex  mt-5  md:space-x-3 flex-col space-y-0">
          <label htmlFor="description" className="block text-left py-2 md:px-4">
            Insta Post Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Enter your insta post description"
            className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-sm  md:text-left placeholder:text-left focus:outline-none"
          ></textarea>
        </div>

        <div className=" w-full pl-0 md:pl-3">
          <button className="w-full my-10   py-3 font-semibold text-base rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default InstaPostUpload;
