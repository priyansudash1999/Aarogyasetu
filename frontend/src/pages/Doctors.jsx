import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from "react-router-dom"

const Doctors = () => {

  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoctors, setFilterDoctors] = useState([])
  const navigate = useNavigate()

  const applyFilter = () => {
    if (speciality) {
      setFilterDoctors(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()))
    } else {
      setFilterDoctors(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors by speciality</p>

      <div className='flex flex-col sm:flex-row items-start gap-6 mt-5'>

        {/* Sidebar */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>

          <p 
            onClick={() => speciality === 'general physician' ? navigate('/doctors') : navigate('/doctors/general physician')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === "general physician" ? "bg-indigo-100 text-black" : ""}`}>
            General Physician
          </p>

          <p 
            onClick={() => speciality === 'gynecologist' ? navigate('/doctors') : navigate('/doctors/gynecologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === "gynecologist" ? "bg-indigo-100 text-black" : ""}`}>
            Gynecologist
          </p>

          <p 
            onClick={() => speciality === 'dermatologist' ? navigate('/doctors') : navigate('/doctors/dermatologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === "dermatologist" ? "bg-indigo-100 text-black" : ""}`}>
            Dermatologist
          </p>

          <p 
            onClick={() => speciality === 'pediatricians' ? navigate('/doctors') : navigate('/doctors/pediatricians')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === "pediatricians" ? "bg-indigo-100 text-black" : ""}`}>
            Pediatricians
          </p>

          <p 
            onClick={() => speciality === 'neurologist' ? navigate('/doctors') : navigate('/doctors/neurologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === "neurologist" ? "bg-indigo-100 text-black" : ""}`}>
            Neurologist
          </p>

          <p 
            onClick={() => speciality === 'gastroenterologist' ? navigate('/doctors') : navigate('/doctors/gastroenterologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === "gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>
            Gastroenterologist
          </p>

        </div>

        {/* Doctors Grid */}
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-5 gap-y-6 px-3 sm:px-0 gap-2 -mt-3.5'>
          {filterDoctors.map((doctor, ind) => (
            <div 
              onClick={() => navigate(`/appointment/${doctor._id}`)} 
              key={ind} 
              className='border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-2.5 transition-all duration-500'
            >
              <img src={doctor.image} alt="" className='bg-blue-50' />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-800 text-lg font-medium'>{doctor.name}</p>
                <p className='text-gray-500 text-sm'>{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Doctors
