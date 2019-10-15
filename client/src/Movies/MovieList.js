import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom'
import Movie from './Movie'
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        
        <MovieCard key={movie.id} movie={movie} addToSavedList={props.addToSavedList}/>
        
      ))}
    </div>
  );
}

// function MovieDetails( props ) {
  // const { title, director, metascore, stars } = movie;
  // console.log(`movie`, movie)
  // return (

    // <MovieCard movie={props.movie} addToSavedList={props.addToSavedList}/>
    // <div className="movie-card">
    //   <h2>{title}</h2>
    //   <div className="movie-director">
    //     Director: <em>{director}</em>
    //   </div>
    //   <div className="movie-metascore">
    //     Metascore: <strong>{metascore}</strong>
    //   </div>
    //   <h3>Actors</h3>

    //   {stars.map(star => (
       
    //     <div key={star} className="movie-star">
    //       {star}
    //     </div>
       
    //   ))}
    // </div>
  

export default MovieList;
