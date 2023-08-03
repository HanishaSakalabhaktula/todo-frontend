import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Fill, RiEditFill } from 'react-icons/ri'
import { useTodosContext } from '../hooks/useTodosContext'

const Todo = ({id, title, description}) => {
  const { dispatch } = useTodosContext();
  const navigate = useNavigate();
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:8080/todos/${id}`);
        dispatch({type: 'DELETE_TODO', payload: {_id: id}})
      } catch (e) {
        console.log(e);
      }
    }
    const handleEdit = () => {
     navigate('/EditTodos', {state: {id, title, description}}); 
    }
  return (
    <div className='w-3/4 md:w-1/3 rounded-lg flex flex-col justify-center items-center p-4 bg-[#FAAB78] m-2'>
      <div className='flex justify-between items-center w-full mb-2 py-2'>
      <h1 className='text-lg md:text-2xl font-bold text-[#FFF6BF]'>{title}</h1>
      <div className='flex justify-center items-center'>
        <button onClick={handleDelete} className='rounded p-1 font-semibold bg-[#FFF6bf] text-[#FAAB78] mx-1'><RiDeleteBin6Fill /></button>
        <button onClick={handleEdit} className='rounded p-1 font-semibold bg-[#FFF6bf] text-[#FAAB78] mx-1'><RiEditFill /></button>
      </div>
      </div>
      <p className='text-[#FFF6BF] text-lg font-semibold my-2'>{description}</p>
    </div>
  )
}

export default Todo
