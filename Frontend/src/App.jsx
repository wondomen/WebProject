// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './Styles/App.css'
import TaskAppDemo from './Components/TaskAppDemo.jsx'
import Home from './Components/Home.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'

import { useAuthContext } from './hooks/useContext.jsx'


const App = () => {
  const { user, token, isAuth } = useAuthContext();
  const auth = new Boolean(isAuth);

  return (
    <>
      <BrowserRouter basename='/'>   
        <Routes>
          <Route path="/" element={ !(user && token && auth) ? <Home /> : <TaskAppDemo /> } />
          <Route path="/login" element={ !(user && token && auth) ? <Login /> : <Navigate to="/" /> } />
          <Route path="/register" element={ !(user && token && auth) ? <Register /> : <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
    </>
  )   
}

export default App;