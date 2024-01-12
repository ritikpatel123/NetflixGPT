import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
 //  name ,keyword, genere_id, lang_eng
const useMovies = (name,keyword,genere,lang) => {
  // console.log(name,keyword,genere,lang,"fvsda")
 
    const dispatch=useDispatch();
    let API=null;

    if(keyword&& keyword === "trending") API ="https://api.themoviedb.org/3/trending/movie/week?language=en-US";
    else if(keyword && keyword==="now_playing") API = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    else if(keyword && keyword==="top_rated") API = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
    else if(keyword && keyword==="popular") API = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    else if(genere)
    {  
      API=`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genere}`; }
    else  API=`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=${lang}`
    
  const nowPlayingMovie = async () => {
  
    const data = await fetch(
      API,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies({type:name,movieData:json.results}));
  };

  useEffect(() => {
    nowPlayingMovie();
  }, []);
  
}

export default useMovies