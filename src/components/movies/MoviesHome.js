import React from "react";
import "./MoviesHome.scss";
import { MovieDisplay } from "./MovieDisplay";
import movieData from "../../movie.json";

export default function MoviesHome() {
  return (
    <div className="main">
      <div className="title mb-4">{movieData.name}</div>
      <div className="container">
        <div className="row">
          {movieData.items.map((item, index) => {
            return <MovieDisplay key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
