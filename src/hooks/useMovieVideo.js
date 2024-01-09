import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const useMovieVideo = (movieid) => {
  const dispatch=useDispatch();
   
    
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const videos = json.results.filter((video) => video.type === "Trailer");
    const trailer = videos.length ? videos[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(() => {
    getMovieVideo();
  }, []);

}

export default useMovieVideo