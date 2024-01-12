import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstats';
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants';
import { addGptMovies } from '../utils/gptSlice';

const  GptSearchBar= () => {
   const searchtext=useRef(null);
   const dispatch =useDispatch();
    const value = useSelector((store) => store.config.lang);

    const searchMovieTMDB= async (movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+
      movie+
      '&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const json= await data.json();
      return json.results;
    }
    const handleGptSearchClick= async ()=>{

      const GptQuery="Act as a movie recommendation system and suggest some movies for the query:"
      +searchtext.current.value +
      ". Only give me names of 5 movies, comma seperated like the expmple result given ahead. Example Gadar, Sholey, Don, Golmaal, Koi mil gaya"; 

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: GptQuery }],
        model: 'gpt-3.5-turbo',
      });

     const  result=chatCompletion.choices?.[0].message?.content.split(', ');
     const data=result.map(movie=>searchMovieTMDB(movie))
     const allResult= await Promise.all(data);
     dispatch(addGptMovies({movieNames:result,movieResults:allResult}));
     

    }
    
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2  grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchtext}
        type='text'
        className='p-4 m-4 col-span-9'
        placeholder={lang[value].gptPlaceHolder}
        />
        <button
        className='py-2 px-4 m-4  col-span-3 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}
         >{lang[value].search}</button>
         </form>
    </div>
  )
}

export default GptSearchBar