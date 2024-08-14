import { useDispatch } from "react-redux";
import { addNewPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useNowPlayinMovies = () => {
    const dispatch=useDispatch();
    const nowPlayingMovies=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json=await data.json()
      dispatch(addNewPlayingMovies(json.results))
      //console.log(json.results)
    }
    useEffect(()=>{
      nowPlayingMovies()
  
    },[])
   
}

export default useNowPlayinMovies