import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import MovieList from './components/MovieList';
import MovieTitle from './components/MovieTitle';
import MovieSearch from './components/MovieSearch';
import AddToWatchList from './components/AddToWatchList';
import MovieListTitle from './components/MovieListTitle';
import RemoveMovie from './components/RemoveMovie';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
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

  const addFavouriteMovie = (movie) => {
    const updatedMovies = movies.map((m) =>
      m.imdbID === movie.imdbID ? { ...m, isFavourite: true } : m
    );
    setMovies(updatedMovies);
  
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);

    localStorage.setItem('favourites', JSON.stringify(newFavouriteList));
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite)=> favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);

    localStorage.setItem('favourites', JSON.stringify(newFavouriteList));
  }


  return (
    <>
      <div className='main_container'>
        <div className='header_container'>
        <MovieTitle title='Find Your Movie'/>
        <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='list_container'>
        <MovieListTitle title='My Watch List'/>
        </div>
        <div className='watchlist_container'>
        <div className='movie_container'>
        <MovieList movies={favourites} handleFavouriteClick={removeFavouriteMovie} favouriteComponent={RemoveMovie} />
        </div>
        </div>
        <div className='movie_container'>   
        <MovieList movies={movies} handleFavouriteClick={addFavouriteMovie} favouriteComponent={AddToWatchList} />
        </div> 
      </div>
    </>
  )
}

export default App
