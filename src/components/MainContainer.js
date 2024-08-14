import React from 'react'
import VedioBackground from './VedioBackground'; 
import VedioTitle from './VedioTitle';
import { useSelector } from 'react-redux';
const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.newPlayingMovies)
  if(!movies)return;
  const movie=movies[0];
  //console.log(movie)
  const {original_title,overview}=movie;
  return (
    <div>
      <VedioBackground/>
      <VedioTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer