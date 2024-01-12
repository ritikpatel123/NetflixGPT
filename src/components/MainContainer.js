import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = ({movie}) => {
    const movies=useSelector((store)=>store.movies[movie]);
    if (!movies) return;
    const mainMovie=movies[1];
    const {original_title,overview,id}=mainMovie
   
  return (
    <div>
          <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid={id}/>   
    </div>
  )
}

export default MainContainer