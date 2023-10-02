// import React from 'react'
import Navbar from './NavBar'
import MainHome from './MainHome';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
// import TaskDisplay from './TaskDisplay'
import TaskDisplay from './TaskDisplay'
import '../Styles/App.css'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TaskDisplay /> */}

      <MainHome />
      <AboutUs />
      <ContactUs />  
      <Footer />
      

      <AboutUs />  
    
      <div className="container">
        <div>
          <h2>Welcome!</h2>
          <p>Get things done with Task Manager.</p>
        </div>
    
        <div>
          <img src="../public/pic1.jpg" alt="Image holder" />
        </div>
      </div>


    </>
    
  )
}

export default Home;