import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Todo from '../components/Todo';
import axios from 'axios';
import { useTodosContext } from '../hooks/useTodosContext';


const AllTodos = () => {
    const {todos, dispatch} = useTodosContext();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos_ = await axios.get('http://localhost:8080/todos/');
                dispatch({ type: 'SET_TODOS', payload: todos_.data});
            } catch (e) {
                console.log(e);
            }
        };

        fetchTodos();
    }, []);
  return (
    <div className='bg-[#FFF6BF] w-full h-screen flex flex-col justify-start items-center m-0'>
    <div className='w-screen'>
    <NavBar />
    </div>
    <div className='w-3/4 p-4'>
        <div className='flex justify-center items-center flex-wrap'>
        {todos && todos.map((t) => {
            return (
                <Todo key = {t._id} id = {t._id} title = {t.title} description = {t.description} />
            );
        })}
        </div>
    </div>
    </div>
  )
}

export default AllTodos
