import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 snap-start flex-shrink-0">
      <div className="relative transition-transform duration-300 hover:scale-110 hover:z-10">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );

  // return (
  //   <div className="w-36 md:w-48 pr-4">
  //     <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
  //   </div>
  // );
};

export default MovieCard;
