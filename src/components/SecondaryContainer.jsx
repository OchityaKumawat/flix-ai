import React from "react";
import { useSelector } from "react-redux";

// SecondaryContainer.jsx
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  return (
    <div className="bg-black text-white px-8 py-6">
      {["Trending Now", "Top Picks for You", "New Releases"].map(
        (category, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
              {movies.slice(0, 10).map((movie) => (
                <div
                  key={movie.id}
                  className="min-w-[200px] h-[300px] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${movie.poster_path})` }}
                ></div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SecondaryContainer;
