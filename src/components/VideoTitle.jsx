import React from "react";

// VideoTitle.jsx

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video flex flex-col justify-center z-10 px-6 md:px-24 text-white bg-gradient-to-r from-black/70 via-gray-900/60 to-transparent">
      {/* Title */}
      <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
        {title}
      </h1>

      {/* Overview */}
      <p className="hidden md:block text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-[60%] drop-shadow-md">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        {/* Play Button */}
        <button
          className="flex items-center justify-center bg-red-600 text-white py-2 md:py-3 px-6 md:px-10 text-lg md:text-xl font-semibold rounded-md shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-red-700 transition-transform duration-300"
          aria-label="Play Video"
        >
          <span className="mr-2">▶</span>
          <span>Play</span>
        </button>

        {/* More Info Button */}
        <button
          className="flex items-center justify-center bg-gray-700/70 text-white py-2 md:py-3 px-6 md:px-10 text-lg md:text-xl font-medium rounded-md border border-gray-500 hover:bg-gray-600 hover:border-gray-400 hover:scale-105 transition-transform duration-300"
          aria-label="More Information"
        >
          <span className="mr-2">ℹ</span>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
//       <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
//       <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
//       <div className="my-4 md:m-0">
//         <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
//           ▶ Play
//         </button>
//         <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };

export default VideoTitle;
