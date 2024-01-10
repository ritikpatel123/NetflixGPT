import React from 'react'
import { useSelector } from 'react-redux'

const GptSearchContainer = () => {
  const {movieNames,movieResults}=useSelector(store=>store.gpt);
  return (
    <div className='p-4 m-4 bg-black text-white'>
      {movieNames} 
    </div>
  )
}

export default GptSearchContainer