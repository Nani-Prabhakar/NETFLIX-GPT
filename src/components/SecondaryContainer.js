import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingmovies'
const SecondaryComponent = () => {
  const movies=useSelector(store=>store.movies)
  usePopularMovies()
  useUpcomingMovies()
  useTrendingMovies()
  return (
  
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing "} movies={movies.newPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
      
      
    </div>
  )
}

export default SecondaryComponent