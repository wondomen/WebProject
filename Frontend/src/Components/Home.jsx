// import React from 'react'
import Navbar from './NavBar'
import MainHome from './MainHome';
import AboutUs from './AboutUs';
// import TaskDisplay from './TaskDisplay'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TaskDisplay /> */}
      <MainHome />
      <AboutUs />  
      
    </>
  )
}

export default Home;