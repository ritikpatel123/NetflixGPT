import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchContainer from './GptSearchContainer'
import { NETFLIX_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
        <img
          src={NETFLIX_BG}
          alt="baground"
        />
        </div>
        <GptSearchBar/>
        <GptSearchContainer/>
    </div>
  )
}

export default GptSearch