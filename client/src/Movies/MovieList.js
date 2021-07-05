import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import MovieCard from "./MovieCard";
import Actors from './Actors';

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div>
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          addToSavedList={props.addToSavedList}
        />
      ))}
      
      <NavLink to="/actor">All Famous Actors</NavLink>
    </div>
    <div>
{movies.map(movie => (
  <Actors
    key={movie.id}
    movie={movie}
  />
))}
    </div>
    </div>
  );
};

export default MovieList;
