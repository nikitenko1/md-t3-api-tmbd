import React from "react";
import { Movie } from "../../interface";
import { useSession } from "next-auth/react";
import Body from "./Body";
import Poster from "./Poster";
import Search from "./Search";

interface IMovie {
  trendingMovies: Movie[];
  nowPlayingMovies: Movie[];
  topRatedMovies: Movie[];
  popularMovies: Movie[];
}

const Dashboard = ({
  trendingMovies,
  nowPlayingMovies,
  topRatedMovies,
  popularMovies,
}: IMovie) => {
  const { data: session } = useSession();

  return (
    <Body>
      <div>
        <div className="md:hidden">
          <Search />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-white">Trending movies</h1>
        <div
          className="row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none 
        scrollbar-thumb-rounded-md rounded"
        >
          {trendingMovies?.map((movie) => (
            <Poster key={movie.id} movie={movie} size="big" type="movie" />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-2 text-2xl font-bold text-white">Now playing</h1>
        <div
          className="row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 
        scrollbar-thumb-rounded-md"
        >
          {nowPlayingMovies?.map((movie) => (
            <Poster key={movie.id} movie={movie} size="normal" type="movie" />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-2 text-2xl font-bold text-white">Top Rated</h1>
        <div
          className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 
        scrollbar-thumb-rounded-md"
        >
          {topRatedMovies?.map((movie) => (
            <Poster key={movie.id} movie={movie} size="normal" type="movie" />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-2 text-2xl font-bold text-white">Popular</h1>
        <div
          className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 
        scrollbar-thumb-rounded-md"
        >
          {popularMovies?.map((movie) => (
            <Poster key={movie.id} movie={movie} size="normal" type="movie" />
          ))}
        </div>
      </div>
    </Body>
  );
};

export default Dashboard;
