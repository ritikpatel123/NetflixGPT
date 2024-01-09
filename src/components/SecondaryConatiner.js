import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = ( ) => {
  const movies=useSelector((store)=>store.movies)

  return (
    <div className='bg-black'>
      <div className='-mt-52  pl-7 relative z-20'>
      <MovieList title={"Now palying "} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryConatiner