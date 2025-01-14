import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

// MainContainer.jsx
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      <VideoBackground movieId={id} />
      <div className="absolute top-1/4 left-0 h-[39%] w-screen px-10 space-y-4 max-w-lg bg-gradient-to-r from-black to-transparent">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
