import { useState } from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Forgotpassword from './Components/Forgotpassword'
import { ToastContainer } from 'react-toastify'
import Homepage from './Components/Homepage'
import ResetPassword from './Components/ResetPassword'



function App() {
 
  return (
    <>
    <div>
      <ToastContainer />
    </div>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgotpassword' element={<Forgotpassword />} />
      <Route path='/reset-password/:id/:otp' element={<ResetPassword />} />
      
      <Route path='/home' element={<Homepage />} />
    </Routes>
    </BrowserRouter>
   
  
    </>
  )
}

export default App
