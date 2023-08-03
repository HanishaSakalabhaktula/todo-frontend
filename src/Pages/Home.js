import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#FFD495]'>
      <Link to='/login' className='p-2 font-semibold text-xl mx-1 bg-[#FAAB78] text-white rounded shadow'>Login</Link>
      <Link to='/signup' className='p-2 font-semibold text-xl mx-1 bg-[#FAAB78] text-white rounded shadow'>SignUp</Link>
    </div>
  )
}

export default Home
