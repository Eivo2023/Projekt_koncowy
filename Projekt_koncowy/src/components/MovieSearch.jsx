import React from 'react'
import search from '/src/assets/search.svg'

const MovieSearch = (props) => {
    return (
        <div className='search_bar'>
            <input value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder='Type to search Your movie...'></input>
            <span><img src={search} alt='search' className='search_icon'/></span>
        </div>
    )
}

export default MovieSearch;