import React, { useState } from 'react';
// import axios from 'axios';
import { Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  
  // useEffect(() => {
  //   const getMovies = () => {
  //     axios
  //       .get('http://localhost:5000/api/movies')
  //       .then(response => {
  //         setMovieList(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   }
  //   getMovies();
  // }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      {/* {console.log(movieList)} */}
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/" component = {MovieList} />
        <Route path= "/movies/:id" component = {Movie} />
      </Switch>
    </div>
  );
}

export default App;
