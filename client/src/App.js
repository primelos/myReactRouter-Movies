import React, { useState } from 'react';
import { Route, NavLink } from "react-router-dom";
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import Actors from './Movies/Actors'
const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

      <SavedList list={savedList} />
      
      <Route  exact path='/' render={props => <MovieList {...props} addToSavedList={addToSavedList}/> } />


      <Route  path='/movie/:id' render={props => <Movie {...props} movie={Movie} addToSavedList={addToSavedList}/> } />



     
      <Route path='/actor' component={Actors} />
    </div>
  );
};

export default App;
