import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {AppContext} from "../context/AppContext"
import { assets } from '../assets/assets';
import {RelatedDoctors} from '../components/index.js';

const Appointments = () => {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [doctorInfo, setDoctorInfo] = useState(null)
  const [doctorSlot, setDoctorSlot] = useState([])
  const [slotInd, setSlotInd] = useState(0)
  const [slotTime, setSlotTime] = useState("")

  const fetchDoctors = async() => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDoctorInfo(docInfo)
    
  }

  const getAvailSlots = async() => {
    setDoctorSlot([]) //clear prev slots

    // get current Date
    let today = new Date()

    for(let i = 0; i < 7; i++){
      // Get date with index
      let currDate = new Date(today)
      currDate.setDate(today.getDate() + i)

      // Set end time of the date 
      let endTime = new Date()
      endTime.setDate(today.getDate()+ i)
      endTime.setHours(18, 0, 0, 0)

      // set Hours
      if(today.getDate() === currDate.getDate()){
        currDate.setHours(currDate.getHours() >= 10 ? currDate.getHours() + 1: 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      } 
      else{
        currDate.setHours(10)
        currDate.setMinutes(0)
      }

      let timeSlot = []

      while(currDate < endTime){
        let formattedTime = currDate.toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})
        
        // Add slots to array
        timeSlot.push({
          datetime: new Date(currDate),
          time: formattedTime
        })

        // every 30 minutes there is a new slot
        currDate.setMinutes(currDate.getMinutes() + 30)
      } 

      setDoctorSlot(prev => ([...prev, timeSlot]))
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [doctors, docId])

  useEffect(() => {
    getAvailSlots()
  }, [doctorInfo])

  useEffect(() => {
    console.log(doctorSlot);
    
  }, [doctorSlot])

  return doctorInfo && (
    <div>
      {/* Doctor details */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full md:max-w-72 rounded-lg' src={doctorInfo.image} alt="" />
        </div>
        <div className='flex-1 border-gray-400 border rounded-lg py-7 p-8 bg-white mx-2 md:mx-0 -mt-20 md:mt-0 '>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-700'>{doctorInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2 etxt-sm mt-1 text-gray-600'>
            <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
            <button className='py-0.5 px-1 border rounded-full text-xs'>{doctorInfo.experience}</button>
          </div>
          {/* About Doctor */}
          <div>
            <p className='flex items-center gap-2 font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-2'>{doctorInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-3'>Appointment Fees: <span className='text-gray-400'>${doctorInfo.fees}</span></p>
        </div>
      </div>

      {/* Slot Book */}
      <div className='md:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            doctorSlot.length && doctorSlot.map((item, index) => (
              <div onClick={() => setSlotInd(index)} className={`grid grid-rows- text-center py-6 min-w-16 rounded-full cursor-pointer ${slotInd === index ? "bg-primary text-white": "border border-gray"}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center text-center w-full gap-3 overflow-x-scroll mt-4'>
          {doctorSlot.length && doctorSlot[slotInd].map((item, ind) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light shrink-0 px-5 py-2 border rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "border border-gray"}`} key={ind}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button className='mt-4 bg-primary text-white font-light px-14 py-3 rounded-full'>Book an Appointment</button>
      </div>
      
      {/* Get all related doctors */}
      <RelatedDoctors  docId = {docId} speciality = {doctorInfo.speciality}/>
    </div>
  )
}

export default Appointments