import { useRouter } from "next/router";
import { Movie } from "../../interface";
import { AiFillStar } from "react-icons/ai";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import useBookmarks from "../../hooks/useBookmarks";
import Image from "next/legacy/image";

interface IMovie {
  movie: Movie;
  size: "normal" | "big";
  type: string;
  internal?: boolean;
}

const Poster = ({ movie, size, type, internal }: IMovie) => {
  const router = useRouter();
  console.log(movie);
  const {
    addedToBookmarks,
    handleDeleteBookmark,
    handleAddBookmark,
    bookmarked,
  } = useBookmarks(movie);

  // adult: false;
  // backdrop_path: "/7ncWbkqn7nTZHGooP1QRhgWCEBS.jpg";
  // genre_ids: (3)[(28, 18, 10752)];
  // id: 1098110;
  // media_type: "movie";
  // original_language: "de";
  // original_title: "Blood & Gold";
  // overview: "At the end of World War II, a German soldier is looking for his daughter while an SS troop is looking for a Jewish treasure.";
  // popularity: 31.636;
  // poster_path: "/ubsnl8tEVI4C7dZQansuRp4z8bJ.jpg";
  // release_date: "2023-04-21";
  // title: "Blood & Gold";
  // video: false;
  // vote_average: 6.521;
  // vote_count: 48;
  return (
    <section
      className="relative cursor-pointer"
      onClick={() =>
        router.push(
          internal ? `/${type}/${movie?.movie_id}` : `/${type}/${movie.id}`
        )
      }
    >
      <div className="z-10">
        <Image
          alt={movie.name || movie.title}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={`${size === "big" ? "500" : "200"}`}
          height={`${size === "big" ? "300" : "250"}`}
          objectFit="cover"
          className="z-[100] w-full cursor-pointer rounded-xl"
        />
      </div>
      {size === "normal" && (
        <div
          className="absolute left-4 top-4 z-[100] flex items-center gap-1.5 rounded-full bg-black
         px-2 opacity-75"
        >
          <AiFillStar color="yellow" />
          <p className="text-white">{movie.vote_average.toFixed(1)}</p>
        </div>
      )}
      <div
        className={`flex ${
          size === "big" ? "items-center" : ""
        } absolute bottom-4 left-4 z-[500] w-[95%] justify-between ${
          size === "normal" ? "flex-col" : ""
        }`}
      >
        <div className={`text-white  ${size === "big" ? "w-1/2" : "w-3/4"}`}>
          <p
            className={`${
              size === "big" ? "text-lg" : "text-base"
            } truncate font-bold text-white `}
          >
            {movie.title || movie.name}
          </p>
          <p>{movie?.release_date?.slice(0, 4)}</p>
          {size === "big" && (
            <div className="flex items-center">
              {Array(Math.round(movie.vote_average / 2))
                .fill("")
                .map((_, i) => (
                  <AiFillStar color="yellow" size={18} key={i} />
                ))}
              {movie.vote_average.toFixed(1)}
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between gap-2 p-1 text-white">
          <button
            className="hover:bg-primary whitespace-nowrap rounded-full bg-slate-600 px-4 py-2 font-bold
           opacity-75"
          >
            Watch now
          </button>
          {addedToBookmarks || bookmarked ? (
            <BsBookmarkStarFill
              size={24}
              color="#EC1C24"
              className="cursor-pointer"
              onClick={() => handleDeleteBookmark()}
            />
          ) : (
            <BsBookmarkStar
              size={24}
              className="cursor-pointer"
              onClick={() =>
                handleAddBookmark(
                  movie.vote_average,
                  movie.title || (movie.name as string),
                  movie.poster_path as string,
                  movie.id as number,
                  movie.release_date || (movie.first_air_date as string)
                )
              }
            />
          )}
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 z-[100] 
      bg-gradient-to-b from-transparent via-[#000000cb] to-black"
      ></div>
    </section>
  );
};

export default Poster;
