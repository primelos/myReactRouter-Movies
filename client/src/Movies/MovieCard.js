import React from 'react';
import Movie from './Movie'
import{ NavLink } from 'react-router-dom'
const MovieCard = props => {

  const { title, director, metascore, stars } = props.movie;
  // console.log(`test`, props)

  return (
    <div className="save-wrapper" >
      
    <div className="movie-card" >

    <NavLink to={`/movie/${props.movie.id}`}  key={props.id}>
      <h2>{title}</h2>
      </NavLink>

       <div className="movie-director">
        Director: <em>{director}</em>
      </div>
     <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    <div className="save-button" onClick={()=> props.addToSavedList(props.movie) }>Save</div>
  </div>
  )
};

export default MovieCard;
