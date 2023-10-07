// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import TaskAppDemo from './Components/TaskAppdemo.jsx'
import Home from './Components/Home.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'


function App() {
  
  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/TaskApp" element={<TaskAppDemo />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )   
}

export default App;