import React from "react";
import { Item } from "../../models/movie.model";

export function Poster(props: { item: Item }) {
  const item = props.item;
  return (
    // <div className="poster-card">
    <img
      alt={item.original_title + " Image"}
      src={"http://image.tmdb.org/t/p/w342/" + item.poster_path}
    />
    // </div>
  );
}
