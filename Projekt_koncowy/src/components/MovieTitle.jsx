import React from 'react'
import movie from '/src/assets/movie.svg'

const MovieTitle = (props) => {
    return (
        <div className='title'>
            <span><img src={movie} alt='movie-logo' className='movie_icon'/></span>
            <h1>{props.title}</h1>
        </div>
    )
}

export default MovieTitle