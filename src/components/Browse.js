import React from 'react'
import Header from './Header';
import useNowPlayinMovies from '../hooks/useNowPlayinMovies';
import MainContainer from './MainContainer'
import SecondarContainer from './SecondaryContainer'
const Browse = () => {
  useNowPlayinMovies()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondarContainer/>
    </div>
  )
}

export default Browse;