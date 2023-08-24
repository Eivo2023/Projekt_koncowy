import React from 'react'

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
            <div className='poster_container'>
                <img src={movie.Poster} alt='Movie poster'></img>
                <div onClick={()=> props.handleFavouriteClick(movie)} className='poster_overlay'>
                    <FavouriteComponent />
                </div>
            </div>
            ))}
        </>
    )
}

export default MovieList