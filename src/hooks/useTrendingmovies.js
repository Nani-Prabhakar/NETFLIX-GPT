import { useDispatch } from "react-redux";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useTrendingMovies = () => {
    const dispatch=useDispatch();
    const trendingMovies=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
      const json=await data.json()
      dispatch(addTrendingMovies(json.results))
      //console.log(json.results)
    }
    useEffect(()=>{
      trendingMovies()
  
      
    },[])
   
}

export default useTrendingMovies