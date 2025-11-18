import React from 'react'
import {assets} from "../assets/assets"

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>Contact <span className='text-gray-800 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
        <img src={assets.contact_image} alt="" className='w-full max-w-[360px]'/>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-600'>87623 Jacky Station <br />Suite 890, Los Angeles, USA</p>
          <p className='text-gray-600'><b>Phone:</b> +1873-2833-33</p>
          <p className=''><b>Email:</b> aarogysetu@contact.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at Aarogyasetu</p>
          <button onClick={() => {}} className='text-center items-center border px-4 py-2 cursor-pointer rounded-full bg-primary text-white mt-2 hover:bg-transparent hover:text-black'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact