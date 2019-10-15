import React, { useState } from 'react';
import { Route } from "react-router-dom";
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

      <SavedList list={savedList} />
      
      <Route  path='/' render={props => <MovieList {...props} addToSavedList={addToSavedList}/> } />


      <Route path='/movie/:id' render={props => <Movie {...props} movie={Movie} addToSavedList={addToSavedList}/> } />


    </div>
  );
};

export default App;
