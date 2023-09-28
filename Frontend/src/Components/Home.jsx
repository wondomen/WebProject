// import React from 'react'
import Navbar from './NavBar'
import MainHome from './MainHome';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
// import TaskDisplay from './TaskDisplay'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TaskDisplay /> */}
      <MainHome />
      <AboutUs />
      <ContactUs />  
      
    </>
  )
}

export default Home;