import React from "react";

// VideoTitle.jsx
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-left space-y-4">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="text-lg text-gray-300 line-clamp-3">{overview}</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-300 transition">
          Play
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-600 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
