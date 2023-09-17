// import React from 'react';
import { Link } from "react-router-dom";
import'../Styles/App.css'
import {MdOutlineAddTask} from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
          <div className="nav__logo">
            <a><MdOutlineAddTask color='#0abfad' size={60}/></a>
          </div>
          <div className="nav__menu">
              <ul className="nav-menu-parent">
                  <li className="nav-menu-items home"><a className="menu-link" href="#Home">Home</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#About-us">About us</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#contact-us">Contact us</a></li>
              </ul>
          </div>
          <div className="btn-nav">
              <button className="btn"><Link to="/TaskApp" className="link-style">Create Task</Link></button>
              <button className="btn ">Register</button>
          </div>
      </div>
    </div> 
  );
}

export default Navbar;