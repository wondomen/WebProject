// import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import'../Styles/App.css'
import {MdOutlineAddTask} from 'react-icons/md'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="container">
      <div className="nav">
          <div className="nav__logo">
            <a><MdOutlineAddTask className="logo-icon" size={60}/></a>
          </div>
          <div className="nav__menu">
              <ul className="nav-menu-parent">
                  <li className="nav-menu-items home"><a className="menu-link" href="#Home">Home</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#About-us">About us</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#contact-us">Contact us</a></li>
              </ul>
          </div>
          <div className="nav__toggle_menu" onClick={menuToggle}>
            <div className={ toggle ? "menu-toggle-open" : "nav__toggle-menu-line"}>
            </div>
            {toggle && <ul className="nav-menu-parent menu-open">
                  <li className="nav-menu-items home"><a className="menu-link" href="#Home">Home</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#About-us">About us</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#Contact-us">Contact us</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#Sign-in">Sign in</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#Register">Register</a></li>
              </ul>}
          </div>
          <div className="btn-nav">
              <button className="btn btn-sign-in"><Link to="/TaskApp" className="link-style">Sign in</Link></button>
              <button className="btn ">Register</button>
          </div>
      </div>
    </div>

    
  );
}

export default Navbar;
