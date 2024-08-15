import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryComponent = () => {
  const movies=useSelector(store=>store.movies)
  return (
  
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing "} movies={movies.newPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.newPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.newPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.newPlayingMovies}/>
      </div>
      
      
    </div>
  )
}

export default SecondaryComponent