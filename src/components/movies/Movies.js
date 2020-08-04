import React from "react";
import { MovieDisplay } from "./MovieDisplay";

const Movies = ({ movies }) => {
  return (
    <ul className="list-group mb-4">
      <div className="container">
        <div className="row">
          {movies.map((item, index) => {
            return <MovieDisplay key={index} item={item} />;
          })}
        </div>
      </div>
    </ul>
  );
};

export default Movies;
