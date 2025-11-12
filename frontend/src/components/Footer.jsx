import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* First Column or Left section */}
        <div>
          <img src={assets.logo} alt="" className='w-[100px] mb-5 '/>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Aarogyasetu is your trusted healthcare companion — connecting patients with certified doctors anytime, anywhere. From booking appointments to managing consultations.</p>
        </div>

        {/* Second Column or Center section */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Last Column or Right section */}
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91935623424</li>
            <li>aarogyasetu@contact.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Aarogyasetu - All right reserved</p>
      </div>
    </div>
  )
}

export default Footer