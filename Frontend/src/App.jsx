// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import NavBar from'./Components/NavBar.jsx'

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };


  return (
    <>
    
      <NavBar />

    
    </>
  )   
      
    
  
}

export default App;
