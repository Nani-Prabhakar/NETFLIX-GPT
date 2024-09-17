import React from 'react'
import Header from './Header';
import useNowPlayinMovies from '../hooks/useNowPlayinMovies';
import MainContainer from './MainContainer'
import SecondarContainer from './SecondaryContainer'
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
  useNowPlayinMovies()
  const search=useSelector(store=>store.gpt.showGptSearch)
  return (
    
    <div>
      <Header/>
      {search ?<GptSearch/>:
        <>
          <MainContainer/>
          <SecondarContainer/>
        </>
      }
    </div>
  )
}

export default Browse;