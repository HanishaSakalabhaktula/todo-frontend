import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    //making request to the backend
    try {
      const loginData = { email, password };
      const rest = await axios.post('http://localhost:8080/login', loginData);
      console.log(rest)
      navigate('/dashboard');
    } catch (e) {
      setError("Something went wrong")
      console.log(e);
      
    }
  }
  return (
    <div className='bg-[#FAAB78] w-screen h-screen p-4 flex justify-center items-center'>
      <form className='rounded-lg shadow-lg w-3/4 md:w-1/3 p-4 bg-[#FFF6BF] flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <h1 className="text-xl md:text-2xl text-center text-[#FAAB78] mb-4 font-bold">Login</h1>
        <div className="w-full p-2 md:text-xl justify-center items-center">
            <div className="text-[#FAAB78] font-bold mr-2">Email: </div>
            <input type='email' placeholder=' ' onChange={(e) => setEmail(e.target.value)} className="font-semibold border w-full rounded p-1 border-[#FAAB78] focus:border-[#FAAB78] focus:outline-none text-[#FAAB78] focus:text-[#FAAB78] placeholder-[#FAAB78] focus:placeholder-[#FAAB78] bg-[#FFF6BF]"/>
        </div>
        <div className="w-full p-2 md:text-xl justify-center items-center">
            <div className="text-[#FAAB78] font-bold mr-2">Password: </div>
            <input type='password' placeholder=' ' onChange={(e) => setPassword(e.target.value)} className="font-semibold border w-full rounded p-1 border-[#FAAB78] focus:border-[#FAAB78] focus:outline-none text-[#FAAB78] focus:text-[#FAAB78] placeholder-[#FAAB78] focus:placeholder-[#FAAB78] bg-[#FFF6BF]"/>
        </div>
        <div className='p-2 mt-2 flex justify-center items-center'>
            <button className='rounded-full bg-[#FAAB78] text-[#FFF6BF] px-4 py-2 text-xl font-semibold shadow hover:scale-105 ease-in-out duration-300'>Login</button>
        </div>

        {error ? 
        <div className='p-2 mt-2 w-full bg-red-200 border border-red-400 rounded text-red-400 font-bold text-center'>
          {error}
        </div> : 
        <></>}
      </form>
    </div>
  )
}

export default Login
