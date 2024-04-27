import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute w-screen  h-[100vh] aspect-video pt-[40%]  px-6 md:px-24  text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold '>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-[50vw]'>{overview}</p>
        <div className=''>
            <button className='bg-white  text-black py-1 md:py-4 text-xl  px-2 sm:px-10  rounded-lg hover:bg-opacity-80'>▷Play</button>
            <button className='hidden md:inline:block mx-3 bg-gray-500  text-white p-1 sm:p-4 text-xl  px-3 bg-opacity-50 rounded-lg'>ⓘMore Info</button>
        </div>
    </div>
  )
}

export default VideoTitle