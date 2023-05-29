export const API_ENDPOINT = "https://api.themoviedb.org/3/";
export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const getTrendingMovies = async () => {
  const res = await fetch(
    // Get the trending movies on TMDB.
    // https://api.themoviedb.org/3/trending/movie/{time_window}
    `${API_ENDPOINT}trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results;
};

// Get a list of TV shows airing today.
// https://api.themoviedb.org/3/tv/airing_today
export const getTrendingTvShows = async () => {
  const res = await fetch(`${API_ENDPOINT}tv/airing_today?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

// Get a list of TV shows that air in the next 7 days.
// https://api.themoviedb.org/3/tv/on_the_air
export const getOnTheAirTvShows = async () => {
  const res = await fetch(`${API_ENDPOINT}tv/on_the_air?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

// Get the trending TV shows on TMDB.
// https://api.themoviedb.org/3/trending/tv/{time_window}
export const getAiringTodayTvShows = async () => {
  const res = await fetch(`${API_ENDPOINT}trending/tv/week?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

// Get a list of movies that are currently in theatres.
// https://api.themoviedb.org/3/movie/now_playing
export const getNowPlaying = async () => {
  const res = await fetch(
    `${API_ENDPOINT}movie/now_playing?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results;
};

// Get a list of movies ordered by rating.
// https://api.themoviedb.org/3/movie/top_rated
export const getTopRated = async () => {
  const res = await fetch(`${API_ENDPOINT}movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

// Get a list of movies ordered by popularity.
// https://api.themoviedb.org/3/movie/popular
export const getPopular = async () => {
  const res = await fetch(`${API_ENDPOINT}movie/popular?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

// Query the top level details of a movie by ID.
// https://api.themoviedb.org/3/movie/{movie_id}
export const getMovieDetails = async (id: string) => {
  const res = await fetch(`${API_ENDPOINT}movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();

  return data;
};

// Recommendations
// https://api.themoviedb.org/3/movie/{movie_id}/recommendations
export const getRecommendations = async (id: string) => {
  const res = await fetch(
    `${API_ENDPOINT}movie/${id}/recommendations?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results;
};

// Credits
// https://api.themoviedb.org/3/movie/{movie_id}/credits
export const getCredits = async (id: string) => {
  const res = await fetch(
    `${API_ENDPOINT}movie/${id}/credits?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.cast;
};

// Get the latest season credits of a TV show.
// https://api.themoviedb.org/3/tv/{series_id}/credits
export const getTVCasts = async (id: string) => {
  try {
    const res = await fetch(
      `${API_ENDPOINT}tv/${id}/credits?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

// Similar
// https://api.themoviedb.org/3/movie/{movie_id}/similar
export const getSimilar = async (id: string) => {
  const res = await fetch(
    `${API_ENDPOINT}movie/${id}/similar?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results;
};

// Reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
export const getReviews = async (id: string, type: string) => {
  const res = await fetch(
    `${API_ENDPOINT}${type}/${id}/reviews?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results;
};

// Get the details of a TV show.
// https://api.themoviedb.org/3/tv/{series_id}
export const getTVDetails = async (id: string) => {
  const res = await fetch(`${API_ENDPOINT}tv/${id}?api_key=${API_KEY}`);
  const data = await res.json();

  return data;
};

// Get the similar TV shows.
// https://api.themoviedb.org/3/tv/{series_id}/similar
export const getSimilarTVShows = async (id: string) => {
  const res = await fetch(`${API_ENDPOINT}tv/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

// Query the details of a TV season.
// https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}
export const getSeasonDetails = async (tvId: string, seasonId: string) => {
  const res = await fetch(
    `${API_ENDPOINT}tv/${tvId}/season/${seasonId}?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data;
};

// Get a list of TV shows ordered by rating.
// 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US
// &page=1&sort_by=vote_average.desc&vote_count.gte=200' \

export const getDiscoveryMovies = async () => {
  const res = await fetch(
    `${API_ENDPOINT}discover/movie?api_key=${API_KEY}&vote_average.gte=9`
  );
  const data = await res.json();

  return data.results;
};

export const getDiscoveryTVs = async () => {
  const res = await fetch(
    `${API_ENDPOINT}discover/tv?api_key=${API_KEY}&vote_average.gte=9`
  );
  const data = await res.json();

  return data.results;
};
// MOVIE
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37

export const getMovieAnimation = async () => {
  const res = await fetch(
    `${API_ENDPOINT}discover/movie?api_key=${API_KEY}&with_genres=16` // Animation       16
  );
  const data = await res.json();

  return data.results;
};

export const getMovieThriller = async () => {
  const res = await fetch(
    `${API_ENDPOINT}discover/movie?api_key=${API_KEY}&with_genres=53` // Thriller        53
  );
  const data = await res.json();

  return data.results;
};

// TV SHOW
// Action & Adventure  10759
// Animation           16
// Comedy              35
// Crime               80
// Documentary         99
// Drama               18
// Family              10751
// Kids                10762
// Mystery             9648
// News                10763
// Reality             10764
// Sci-Fi & Fantasy    10765
// Soap                10766
// Talk                10767
// War & Politics      10768
// Western             37
export const getTvAnimation = async () => {
  const res = await fetch(
    `${API_ENDPOINT}discover/tv?api_key=${API_KEY}&with_genres=16` // Animation       16
  );
  const data = await res.json();

  return data.results;
};

// Get a list of movies that are being released soon.
// https://api.themoviedb.org/3/movie/upcoming
export const getUpcoming = async () => {
  const res = await fetch(`${API_ENDPOINT}movie/upcoming?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};
