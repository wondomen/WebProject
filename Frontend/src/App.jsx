//import { useState } from 'react'
import './Styles/App.css'
import NavBar from'./Components/NavBar.jsx'
import React, { useState } from 'react';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';

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
      <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>

    
    </>
  )   
      
    
  
}

export default App
