import React from 'react'
import { GiPlayButton } from "react-icons/gi";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='py-4 font-bold text-6xl'>{title}</h1>
      <p className='py-4 w-1/4 text-lg'>{overview}</p>
      <div className=''>
        <button className=' bg-white p-3  mr-4 px-12 text-black text-lg rounded-lg hover:bg-opacity-80' >
        <div className='flex'> <GiPlayButton />
        <h3 className=''>Play</h3>
        </div>
        </button>
        <button className='bg-gray-500 p-3  px-12 text-white text-lg rounded-lg '>
          <span className='flex'><IoIosInformationCircleOutline />More Info</span>
        </button>
      </div>
    </div>
  )
}

export default VedioTitle