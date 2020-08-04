export interface Item {
  vote_count: number;
  popularity: number;
  id: number;
  video: boolean;
  media_type: string;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
}

export interface Movie {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: Item[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: string;
}
