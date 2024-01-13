import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='w-screen aspect-video  pt-[20%] pl-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' md:text-6xl font-bold'>{ title}</h1>
        <p className='hidden md:block md:py-6 text-lg w-2/4'>{ overview}</p>
        <div className='flex'>
            <button className=' bg-white text-black p-4 px-12  text-xl  rounded-md'> ▶️ Play</button>
            <button className=' bg-gray-400 text-white p-4 px-12 ml-2 text-xl bg-opacity-50 rounded-md'>More Info.</button>
        </div>

    </div>
  )
}

export default VideoTitle;