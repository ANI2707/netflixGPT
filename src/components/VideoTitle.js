import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute w-screen  h-[100vh] aspect-video pt-[20%]  px-24  text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-[50vw]'>{overview}</p>
        <div className=''>
            <button className='bg-white  text-black p-1 sm:p-4 text-xl  px-3 sm:px-10  rounded-lg hover:bg-opacity-80'>▷Play</button>
            <button className='mx-3   bg-gray-500  text-white p-1 sm:p-4 text-xl  px-3 bg-opacity-50 rounded-lg'>ⓘMore Info</button>
        </div>
    </div>
  )
}

export default VideoTitle