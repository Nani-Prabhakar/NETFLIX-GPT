import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestions from '../components/GptMovieSuggestions'
import { BG_URL } from './constants'

const GptSearch = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>
        <img
          src={BG_URL}
          alt='background'
        />
        </div>
        
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch