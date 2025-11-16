import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {

  const {doctors} = useContext(AppContext)
  const [relatedDoctors, setRelatedDoctors] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    if(doctors.length > 0 && speciality){
      const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
      setRelatedDoctors(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-black md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Browse our list of experienced and trusted doctors ready to provide quality care.</p>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-5 gap-y-6 px-3 sm:px-0 gap-2'>
        {
          relatedDoctors.slice(0,5).map((doctor, ind) => (
            <div  onClick={() => navigate(`/appointments/${doctor._id}`)} key={ind} className='border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-2.5 transition-all duration-500'>
              <img src={doctor.image} alt="" className='bg-blue-50'/>
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-800 text-lg font-medium'>{doctor.name}</p>
                <p className='text-gray-500 text-sm'>{doctor.speciality}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RelatedDoctors