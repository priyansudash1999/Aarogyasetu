import React, { useState } from 'react'

const Login = () => {

  const [userState, setUserState] = useState('Sign Up')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async(e) => {
    e.preventDefault()

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col gap-3 min-w-[340px] sm:min-w-96 rounded-xl border-0 p-4 text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl text-center font-semibold '>
          {
            userState === 'Sign Up' ? "Create Account" : "Login"
          }
        </p>
        <p>
          Please {
            userState === 'Sign Up' ? "create an account" : "sign In"
          } to book Appointment
        </p>
        {
          userState === 'Sign Up' ? <div className='w-full'>
          <p>Full Name</p>
          <input type="text" className='border border-zinc-200 w-full p-2 mt-1' required placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} value={name}/>
        </div>:""
        }
        <div className='w-full'>
          <p>Email</p>
          <input type="email" className='border border-zinc-200 w-full p-2 mt-1' required placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className='w-full'>
          <p>Full Name</p>
          <input type="password" className='border border-zinc-200 w-full p-2 mt-1' required placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>
        <button className='bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-500 text-base'>
          {
            userState === 'Sign Up' ? "Register" : "Login"
          }
        </button>
        <p>
          {
            userState === 'Sign Up'?
              <p>Already have an account? <span onClick={() => setUserState("Login")} className='underline cursor-pointer text-primary'>Login here</span>
              </p>
              :
              <p>Did not registered yet ! <span onClick={() => setUserState("Sign Up")} className='underline cursor-pointer text-primary'>Create account</span></p>
          }
        </p>
      </div>
    </form>
  )
}

export default Login