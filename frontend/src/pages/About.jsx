import React from 'react'
import {assets} from "../assets/assets"

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className=''>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='flex flex-col sm:flex-row my-10 gap-12'>
        <img src={assets.about_image} alt="" className='w-full md:max-w-[360px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm'>
          <p>Welcome to Aarogyasetu, Your trusted partner in managing your healthcare needs coveniently and efficiently. At Aarogyasetu, we understand the challenges indivisuals face when it comes to schedulling Doctor appointments and managing their health records.</p>
          <p>Aarogyasetu is committed to Excellence in Healthcare Technology, We continuously strive to Enhance our platform, Integrating the latest advancements to improve User Experience and deliver superior service. Wheather you are booking you first appointments or managing ongoing care.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at <a href="">Aarogyasetu</a> to create a seamless healthcare experience for every user. We aim to vridge the gap between patients and healthcare providers. Making it easier for you to access the care you need. When you need it.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span> ?</p>
      </div>
      <div className='flex flex-col md:flex-row mb-20 gap-2'>
        <div className='border px-10 py-8 md:px-16 lg:px-20 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your Busy Lifestyle.</p>
        </div >
        <div className='border px-10 py-8 md:px-16 lg:px-20 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600' >
          <b>Covinience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 py-8 md:px-16 lg:px-20 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600'>
          <b>Personalization:</b>
          <p>Tailored Recommendations and Reminders To Help You Stay On Top Of Your Health.</p>
        </div>
      </div>
    </div>
  )
}

export default About