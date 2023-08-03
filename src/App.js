import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';
import AddTodos from './Pages/AddTodos'
import AllTodos from './Pages/AllTodos'
import EditTodos from './Pages/EditTodos'
import axios from 'axios';

axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div className='m-0 p-0'>
     <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/dashboard' exact element={<DashBoard/>} />
        <Route path='/AllTodos' element={<AllTodos />} />
        <Route path='/AddTodos' element={<AddTodos />} />
        <Route path='/EditTodos' element={<EditTodos />} />
     </Routes>
    </div>
  )
}

export default App
