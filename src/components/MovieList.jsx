import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 md:px-12">
      {/* Section Title */}
      <h1 className="text-lg md:text-3xl py-4 text-white font-bold">{title}</h1>

      {/* Carousel */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {/* <scrollbar-hide></scrollbar-hide> */}
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="px-6 ">
  //     <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
  //     <div className="flex overflow-x-scroll">
  //       <div className="flex">
  //         {movies?.map((movie) => (
  //           <MovieCard key={movie.id} posterPath={movie.poster_path} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default MovieList;
