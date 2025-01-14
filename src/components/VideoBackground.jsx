import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-full bg-black">
      {trailerVideo && trailerVideo.key ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full brightness-100"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`}
          title={trailerVideo.name || "Trailer"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="flex items-center justify-center h-full text-white text-lg">
          Loading trailer...
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
