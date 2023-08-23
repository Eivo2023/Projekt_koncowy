import React from 'react'

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
            <div className='poster_container'>
                <img src={movie.Poster} alt='Movie poster'></img>
                <div className='poster_overlay'>
                    
                </div>
            </div>
            ))}
        </>
    )
}

export default MovieList