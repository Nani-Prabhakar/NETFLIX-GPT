import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div className='w-48 pr-4'>
        <img alt='poster' src={TMDB_IMG_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard