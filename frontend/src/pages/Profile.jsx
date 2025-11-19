import React, { useState } from 'react'
import {assets} from "../assets/assets"

const Profile = () => {

  const [data, setData] = useState({
    name: "Jack Sparrow",
    image: assets.profile_pic,
    email: "jacksparrow01@gmail.com",
    phone: "+19876543210",
    address: {
      line1: "65th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '1996-10-11'
  })

  return (
    <div>
      <img src={data.image} alt="" />
    </div>
  )
}

export default Profile