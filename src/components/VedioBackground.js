import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer'

const VedioBackground = ({ movieID }) => {
 
  const movie=useMovieTrailer(movieID)

  return (
    <div className='w-screen'>
      {movie &&
        <iframe 
         className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/"+movie.key+"?&autoplay=1&mute=1"} //
          title="YouTube video player" 
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          
          allowFullScreen>
        </iframe>}
    </div>
  );
};

export default VedioBackground;
