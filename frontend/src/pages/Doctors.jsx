import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p>Browse through the doctors speciality</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Nuerolosgist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Doctors