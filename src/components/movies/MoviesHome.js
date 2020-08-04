import React, { useState, useEffect } from "react";
import "./MoviesHome.scss";
import movieData from "../../movie.json";
import Movies from "./Movies";
import { Pagination } from "../general/Pagination";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function MoviesHome() {
  const classes = useStyles();
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);

  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem("sortedMovies"));
    console.log(`localMovies: ${localMovies}`);
    setMoviesData(localMovies || movieData.items);
  }, []);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMoviesData = moviesData.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const sortAscending = () => {
    const sortedMovies = [...moviesData].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    localStorage.setItem("sortedMovies", JSON.stringify(sortedMovies));
    setMoviesData(sortedMovies);
  };

  const sortDescending = () => {
    const sortedMovies = [...moviesData].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    localStorage.setItem("sortedMovies", JSON.stringify(sortedMovies));
    setMoviesData(sortedMovies);
  };

  const clearFilters = () => {
    localStorage.setItem("sortedMovies", JSON.stringify(movieData.items));
    setMoviesData(movieData.items);
  };

  return (
    <div className={"main"}>
      <div className={classes.root}>
        <Button onClick={sortAscending} variant="contained" color="primary">
          Titles Ascending
        </Button>
        <Button onClick={sortDescending} variant="contained" color="primary">
          Titles Descending
        </Button>
        <Button onClick={clearFilters} variant="contained" color="primary">
          Clear filters
        </Button>
      </div>
      <div className="title mb-4">{movieData.name}</div>
      <Movies movies={currentMoviesData} />
      <Pagination
        currentPage={currentPage}
        totalPosts={moviesData.length}
        postsPerPage={moviesPerPage}
        paginate={paginate}
      />
    </div>
  );
}
