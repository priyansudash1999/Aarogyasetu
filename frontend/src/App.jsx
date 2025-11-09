import React from 'react'
import {Route, Routes} from "react-router-dom"
import { About, Appointments, Contact, Doctors, Home, Login, MyAppointment, Profile } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/my-profile' element={<Profile />}/>
        <Route path='/my-appointments' element={<MyAppointment />}/>
        <Route path='/appointments/:docId' element={<Appointments />}/>
      </Routes>
    </div>
  )
}

export default App