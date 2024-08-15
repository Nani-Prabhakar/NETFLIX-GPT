import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='py-4 font-bold text-6xl'>{title}</h1>
      <p className='py-4 w-1/4 text-lg'>{overview}</p>
      <div className=''>
        <button className=' bg-white p-4  mr-4 px-12 text-black text-lg rounded-md hover:bg-opacity-80' >
        ▷ Play
        </button>
        <button className='bg-gray-500 p-4  px-12 text-white text-lg rounded-md '>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VedioTitle