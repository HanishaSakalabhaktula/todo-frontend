import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {

    try {
      await axios.get('http://localhost:8080/logout');
      navigate('/');
    } catch (e) {
      
    }
  }
  return (
    <div className='w-full p-4 m-0 flex justify-around items-center bg-[#FAAB78]'>
      <div className='text-3xl font-bold text-[#FFF6BF]'>
        <Link to='/dashboard'>Task Manager</Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link to='/AllTodos' className='mx-1 md:mx-2 md:text-xl text-[#FFF6BF] font-bold'>All Tasks</Link>
        <Link to='/AddTodos' className='mx-1 md:mx-2 md:text-xl text-[#FFF6BF] font-bold'>Add Task</Link>
      </div>
      <div>
      <button onClick={handleLogout} className='p-2 mx-1 rounded shadow bg-[#FFF6BF] text-lg text-[#FAAB78] font-semibold'>Log out</button>
      </div>
    </div>
  )
}

export default NavBar
