import React from 'react'
import {assets} from "../assets/assets"
import {useNavigate} from "react-router-dom"

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 ms:px-14 lg:px-20 my-20 md:mx-10 '>
      {/* Left side */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
          <p className='text-center md:text-left text-2xl md:text-4xl'>Book Your Appointment</p>
          <p className='mt-4 hidden md:block text-2xl md:text-4xl'>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={() => navigate('/login')} className='mt-10 ml-2 sm:text-base hover:scale-105 transition-all text-black bg-white px-2 py-1 rounded-full cursor-pointer active:bg-black active:text-white items-center md:ml-[3%]'>Create Account</button>
      </div>

      {/* Right side  */}
      <div className='md:w-1/2 lg:w-[370px]'>
        <img src={assets.appointment_img} alt="" className='w-2/3 ml-20 md:w-full  border-0 right-0' />
      </div>
    </div>
  )
}

export default Banner