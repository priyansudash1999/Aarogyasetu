import React from 'react'
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-20 my-20 md:mx-10 overflow-hidden">
      {/* Left side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 text-center md:text-left">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          <p>Book Your Appointment</p>
          <p className="mt-3 hidden md:block">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="mt-8 sm:mt-10 text-sm sm:text-base hover:scale-105 transition-all text-black bg-white px-5 py-2 rounded-full cursor-pointer active:bg-black active:text-white"
        >
          Create Account
        </button>
      </div>

      {/* Right side */}
      <div className="shrink-0 w-[40%] sm:w-[35%] md:w-[30%] lg:w-[370px] flex justify-center md:justify-end">
        <img
          src={assets.appointment_img}
          alt="Appointment illustration"
          className="w-full h-auto max-w-[370px]"
        />
      </div>
    </div>
  )
}

export default Banner
