import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import MovieList from './components/MovieList';
import MovieTitle from './components/MovieTitle';
import MovieSearch from './components/MovieSearch';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const showMovie = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4ab53b88`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    showMovie(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className='main_container'>
        <div className='header_container'>
        <MovieTitle title='Find Your movie'/>
        <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='movie_container'>
        <MovieList movies={movies} />
        </div>
      </div>
    </>
  )
}

export default App
