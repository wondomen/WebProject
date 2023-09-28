// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import TaskApp from './Components/TaskApp.jsx'
import Home from './Components/Home.jsx'


function App() {
  
  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/TaskApp" element={<TaskApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )   
}

export default App;