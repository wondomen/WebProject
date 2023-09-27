// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import TaskApp from './Components/TaskApp.jsx'
import Home from './Components/Home.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'

function App() {
  
  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Login />} />
          <Route path="/TaskApp" element={<TaskApp />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )   
}

export default App;