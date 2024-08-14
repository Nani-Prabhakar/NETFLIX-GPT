import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-1/2 text-lg'>{overview}</p>
      <div className=''>
        <button className=' bg-gray-500 p-4 m-4 mx-2 px-12 text-white text-lg rounded-md bg-opacity-50' >
        ▷ Play
        </button>
        <button className='bg-gray-500 p-4 m-4 px-12 text-white text-lg rounded-md bg-opacity-50'>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VedioTitle