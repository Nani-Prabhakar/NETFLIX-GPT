import React from 'react'
import VedioBackground from './VedioBackground'; 
import VedioTitle from './VedioTitle';
import { useSelector } from 'react-redux';
const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.newPlayingMovies)
  if(!movies)return;
  const movie=movies[0];
  //console.log(movie)
  const {original_title,overview,id}=movie;
  return (
    <div>
      
      <VedioTitle title={original_title} overview={overview}/>
      <VedioBackground movieID={id}/>
    </div>
  )
}

export default MainContainer