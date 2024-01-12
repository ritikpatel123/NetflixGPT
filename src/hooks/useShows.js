import  { useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const useShows = (name,keyword,genere,lang) => {
    const dispatch=useDispatch();
    const nowPlayingMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=${lang}`,
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies({type:name,movieData:json.results}));
    };
  
    useEffect(() => {
      nowPlayingMovie();
    }, []);
}

export default useShows