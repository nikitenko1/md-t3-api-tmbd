import React from "react";
import { Movie } from "../../interface";
import Body from "./Body";
import Search from "./Search";
import Poster from "./Poster";

interface ITVShows {
  trendingTvShows: Movie[];
  airingToday: Movie[];
  onTheAir: Movie[];
}

const TVDashboard = ({ trendingTvShows, airingToday, onTheAir }: ITVShows) => {
  return (
    <Body>
      <div className="md:hidden">
        <Search />
      </div>
      <article className="space-y-2">
        <h1 className="text-2xl font-bold text-white">Trending this week</h1>
        <div
          className="row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none
        scrollbar-thumb-rounded-md rounded"
        >
          {trendingTvShows.map((show) => (
            <Poster key={show.id} movie={show} size="big" type="tv-series" />
          ))}
        </div>
      </article>
      <article className="space-y-2">
        <h1 className="text-2xl font-bold text-white">Airing today</h1>

        <div
          className="row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none 
        scrollbar-thumb-rounded-md rounded"
        >
          {airingToday.map((show) => (
            <Poster key={show.id} movie={show} size="normal" type="tv-series" />
          ))}
        </div>
      </article>
      <article className="space-y-2">
        <h1 className="text-2xl font-bold text-white">On the air</h1>

        <div
          className="row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none
        scrollbar-thumb-rounded-md rounded"
        >
          {onTheAir.map((show) => (
            <Poster key={show.id} movie={show} size="normal" type="tv-series" />
          ))}
        </div>
      </article>
    </Body>
  );
};

export default TVDashboard;
