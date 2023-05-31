import { Favourite } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";
import { trpc } from "../utils/trpc";
import Image from "next/legacy/image";
import { AiFillStar } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

const Saved = ({ movie }: { movie: Favourite }) => {
  const router = useRouter();
  const utils = trpc.useContext();

  const { mutate: deleteFavourite } =
    trpc.favourite.deleteFavourite.useMutation({
      onSettled: () => {
        // Always refetch after error or success:
        utils.favourite.getUserFavourites.invalidate();
      },
    });

  const { mutate: deleteBookmark } = trpc.bookmark.deleteBookmark.useMutation({
    onSettled: () => {
      // Always refetch after error or success:
      utils.bookmark.getUserBookmarks.invalidate();
    },
  });

  return (
    <section
      onClick={() =>
        router.push(
          `/${movie.type === "tv" ? "tv-series" : "movie"}/${movie.movieId}`
        )
      }
      className="relative cursor-pointer"
    >
      {/* https://developer.themoviedb.org/docs/image-basics */}
      {/* https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg "poster_path" */}
      <div className="z-10">
        <Image
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={200}
          height={250}
          objectFit="cover"
          className="z-[100] w-full cursor-pointer rounded-xl"
        />
      </div>
      <div
        className="absolute left-4 top-4 z-[100] flex items-center gap-1.5 rounded-full bg-black px-2
       opacity-75"
      >
        <AiFillStar color="yellow" />
        <p className="text-white">{movie.vote_average.toFixed(1)}</p>
      </div>
      <div className="absolute bottom-4 left-4 z-[500] flex w-[95%] flex-col justify-between">
        <div className={`w-3/4 text-white`}>
          <p className={`truncate text-base font-bold text-white `}>
            {movie.title}
          </p>
          <p>{movie?.release_date?.slice(0, 4)}</p>
        </div>
        <div className="mt-2 flex items-center justify-evenly gap-2 p-1 text-white">
          <button
            className="bg-primary whitespace-nowrap rounded-full px-4 py-2 font-bold 
          opacity-75 hover:bg-red-700"
          >
            Watch now
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.pathname === "/favourites"
                ? deleteFavourite({ favouriteId: movie.id })
                : deleteBookmark({ bookmarkId: movie.id });
            }}
          >
            <BiTrash className="text-xl text-red-400 hover:text-red-500" />
          </button>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 z-[100] bg-gradient-to-b
       from-transparent via-[#000000cb] to-black"
      ></div>
    </section>
  );
};

export default Saved;
