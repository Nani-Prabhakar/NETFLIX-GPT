import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieID)=>{
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS);
        const json = await response.json();
        const trailers = json.results.filter(video => video.type === "Trailer" && video.name === "Official Trailer");
        if (trailers.length > 0) {
          dispatch(addMovieTrailer(trailers[0]));
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };
  
    useEffect(() => {
      if (movieID) {
        getMovieVideos();
      }
    }, [movieID]);
  
    const movie = useSelector((store) => store.movies?.movieTrailer);
    return movie;
}
export default useMovieTrailer;