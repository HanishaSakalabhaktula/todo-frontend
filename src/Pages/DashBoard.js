import React from 'react'
import NavBar from '../components/NavBar'
const DashBoard = () => {
  //future scope
  //later on you can write some logic here to display user's details such as name, email etc
  //You can also add some additional features that keep track of user's completed tasks count and incomplete task count
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center bg-[#FFF6BF]'>
      <div className='w-screen'>
        <NavBar />
      </div>
      <div className='w-screen text-[#FAAB78] flex flex-col justify-center items-center p-4 mt-4 h-3/4'>
       <h1 className="text-4xl md:text-6xl font-bold">TASK MANAGER</h1>
       <h3 className='text-xl md:text-2xl font-bold mt-2'>Now List out your tasks and finish them to become more productive !! </h3>
      </div>
    </div>
  )
}

export default DashBoard
