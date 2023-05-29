export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  name?: string;
  movie_id?: number;
  first_air_date: string;
}

export interface MovieDetails {
  backdrop_path?: string;
  genres: Genre[];
  id: number;
  popularity: number;
  release_date: string;
  title: string;
  status: string;
  production_companies: Company[];
  overview: string;
  runtime?: number;
  vote_average: number;
  poster_path: string;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Company {
  id: number;
  name: string;
  logo_path?: string;
}

export interface TVDetails extends MovieDetails {
  name: string;
  episode_run_time: number[];
  first_air_date: string;
  last_air_date: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: Season[];
  type: string;
}

interface Season {
  id: number;
  name: string;
  poster_path: string;
  season_number: number;
}

interface Network {
  id: number;
  name: string;
  logo_path: string;
}

export interface ISaved {
  id: string;
  title: string;
  vote_average: string;
  movieId: number;
  release_date: string;
}
