import React from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EditTodos = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const id = location.state.id;
    const [title, setTitle] = useState(location.state.title);
    const [description, setDescription] = useState(location.state.description);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const updatedData = {title, description};
          const ans = await axios.patch(`http://localhost:8080/todos/${id}`, updatedData);
          console.log(ans.data);

          navigate('/AllTodos');
        } catch (e) {
          console.log(e);
        }
    }
  return (
    <>
    <div className='bg-[#FFF6BF] w-full h-screen flex flex-col justify-start items-center m-0'>
        <div className='w-screen mb-4'>
        <NavBar />
        </div>
        <div className='h-1/6'></div>
      <form className='mt-4 rounded-lg shadow-lg w-3/4 md:w-1/3 p-4 bg-[#FAAB78] flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <h1 className="text-xl md:text-2xl text-center text-[#FFF6BF] mb-4 font-bold">Edit Task</h1>
        <div className="w-full p-2 md:text-xl justify-center items-center">
            <div className="text-[#FFF6BF] font-bold mr-2">Title: </div>
            <input type='text' value={title === null ? "_" : `${title}`} onChange={(e) => setTitle(e.target.value)} className="font-semibold border w-full rounded p-1 border-[#FFF6BF] focus:border-[#FFF6BF] focus:outline-none text-[#FAAB78] focus:text-[#FAAB78] placeholder-[#FFF6BF] focus:placeholder-[#FFF6BF] bg-[#FFF6BF]"/>
        </div>
        <div className="w-full p-2 md:text-xl justify-center items-center">
            <div className="text-[#FFF6BF] font-bold mr-2">Description: </div>
            <input type='text' value={description === null ? "_" :`${description}`} onChange={(e) => setDescription(e.target.value)} className="font-semibold border w-full rounded p-1 border-[#FFF6BF] focus:border-[#FFF6BF] focus:outline-none text-[#FAAB78] focus:text-[#FAAB78] placeholder-[#FFF6BF] focus:placeholder-[#FFF6BF] bg-[#FFF6BF]"/>
        </div>
        <div className='p-2 mt-2 flex justify-center items-center'>
            <button className='rounded-full bg-[#FFF6BF] text-[#FAAB78] px-4 py-2 text-xl font-bold shadow hover:scale-105 ease-in-out duration-300'>Update</button>
        </div>

        {/* {error ? 
        <div className='p-2 mt-2 w-full bg-red-200 border border-red-400'>
          error.message
        </div> : 
        
        <></>} */}
      </form>
    </div>
    </>
  )
}

export default EditTodos
