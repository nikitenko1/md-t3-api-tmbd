export interface IGameResp {
  results: IGame[];
}

export interface IGame {
  added: number;
  price: number;
  added_by_status: {
    beaten: number;
    dropped: number;
    owned: number;
    toplay: number;
    yet: number;
  };
  background_image: string;
  dominant_color: string;
  esrb_rating: IESRB_RATING;
  genres: IGenre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: IParentPlatform[];
  platforms: IPlatform[];
  playtime: number;
  rating: Float32Array;
  rating_top: number;
  ratings: IRating[];
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  slug: string;
  tba: boolean;
  updated: string;
  tags: ITag[];
  stores: IStore[];
}

export interface IStore {
  id: number;
  store: {
    domain: string;
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
  };
}

export interface ITag {
  games_count: number;
  id: number;
  name: string;
  slug: string;
  language: string;
  image_background: string;
}

export interface IRating {
  count: number;
  id: number;
  percent: Float32Array;
  title: string;
}

export interface IPlatform {
  platform: {
    games_count: number;
    id: number;
    image_background: string;
    slug: string;
    name: string;
  };
}

export interface IParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface IGenre {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface IESRB_RATING {
  id: number;
  name: string;
  slug: string;
}

export interface IGameDetails {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  released: Date;
  tba: boolean;
  updated: Date;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: any;
  reactions: any;
  added: number;
  added_by_status: any;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: EsrbRating;
  platforms: Platform[];
}

export interface Screenshot {
  image: string;
  hidden: boolean;
}

export interface GameScreenshots {
  results: Screenshot[];
}

export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface MetacriticPlatform {
  metascore: number;
  url: string;
}

export interface Platform {
  platform: EsrbRating;
  released_at: string;
  requirements: Requirements;
}

export interface Requirements {
  minimum: string;
  recommended: string;
}

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: {
    added: number;
    id: number;
    name: string;
    slug: string;
  }[];
}

export interface GenreResp {
  results: IGenre[];
}

export interface PlatformResp {
  results: IPlatformData[];
}

export interface IPlatformData extends IGenre {
  year_start?: number;
  year_end?: number;
}

export interface IWishlist {
  id: string;
  name: string;
  price: number;
  gameId: number;
  image: string;
}
