import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  const geminiAI=useSelector(store=>store.gpt)
  const {movieResults,movieNames}=geminiAI;
  if(!movieNames)return null;
  return (
    <div className='m-4 p-4 bg-black text-white bg-opacity-90 '> 
        <div>
          {movieNames.map((movieName,index)=>(
          <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)
          )}
    
        </div>
    </div>
  )
}

export default GptMovieSuggestions