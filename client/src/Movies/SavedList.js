import React from 'react';
import {Link} from 'react-router-dom'

const SavedList = props => (
// console.log(`save`, props)

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    
    {props.list.map(movie => (
      <Link to={`/movie/${movie.id}`}  key={props.id}>
      <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
   

    <Link to='/'>
    <div className="home-button">Home</div>
    </Link>

  </div>
);

export default SavedList;
