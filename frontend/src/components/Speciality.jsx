import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
      <h1 className='text-3xl font-medium '>Find By Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Find doctors by their area of expertise and book your appointment instantly.</p>

      <div className='grid grid-cols-3 sm:flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {
          specialityData.map((data, ind) => (
            <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer shrink-0 hover:translate-y-2.5 transition-all duration-500' key={ind} to={`/doctors/${data.speciality}`}>
              <img className='w-16 sm:w-24 mb-2' src={data.image} alt="" />
              <p>{data.speciality}</p>
            </Link>
          ))
        }
      </div>
    </div>

  )
}

export default Speciality