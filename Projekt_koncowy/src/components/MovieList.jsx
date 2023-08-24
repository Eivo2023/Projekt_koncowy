import React from 'react'

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
            <div className='poster_container' key={movie.imdbID}>
                <img src={movie.Poster} alt='Movie poster'></img>
                <div
                  onClick={() => {
                    if (!movie.isFavourite) {
                      props.handleFavouriteClick(movie);
                    }
                  }}
                  className={`poster_overlay ${movie.isFavourite ? 'disabled' : ''}`}
                >
                    <FavouriteComponent />
                </div>
            </div>
            ))}
        </>
    )
}

export default MovieList