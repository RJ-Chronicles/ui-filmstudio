const FileUpload = () => {
  return (
    <form className="w-full z-10 space-y-3">
      <div className="flex  mt-5  md:space-x-3 flex-col space-y-0">
        <label htmlFor="description" className="block text-left py-2 md:px-4">
          Image Post Description
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Write your thoughts here..."
          className="p-2 px-4 text-left text-white bg-zinc-800 border border-zinc-600 placeholder:text-sm  md:text-left placeholder:text-left focus:outline-none"
        ></textarea>
      </div>

      <div className="flex  mt-5  md:space-x-3 flex-col space-y-0 pl-0 md:pr-3">
        <label className="text-sm font-bold text-gray-100 tracking-wide text-left py-2 md:px-4">
          Attach Document
        </label>
        <div className="flex items-center justify-center w-full ">
          <label
            htmlFor="dropzone-file"
            className="p-2 px-4 text-center text-white bg-zinc-800 border-4 border-zinc-600 flex flex-col rounded-lg border-dashed w-full h-60  group "
          >
            <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400 group-hover:text-blue-600 z-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="flex flex-auto max-h-48 mx-auto -mt-10  bg-transparent">
                <img
                  className="has-mask h-36 object-center rounded-sm"
                  src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                  alt="freepik image"
                />
              </div>
              <p className="pointer-none text-gray-500 ">
                <span className="text-sm">Drag and drop</span> files here <br />{" "}
                or{" "}
                <span className="text-blue-600 hover:underline hover:cursor-pointer">
                  select a file
                </span>{" "}
                from your computer
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <p className="text-sm text-gray-300">
        <span>File type: doc,pdf,types of images</span>
      </p>
      <div className=" w-full pl-0 md:pl-3">
        <button className="w-full my-10   py-3 font-semibold text-base rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FileUpload;
