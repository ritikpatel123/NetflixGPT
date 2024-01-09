import React from 'react'
import { IMAGE_PATH } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 p-2'>
        <img 
        src={IMAGE_PATH+posterpath} 
        alt="" />
    </div>
  )
}

export default MovieCard