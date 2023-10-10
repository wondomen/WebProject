// import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import'../Styles/App.css'
import {MdOutlineAddTask} from 'react-icons/md'



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  }
  const menuOpener = () => {
    setMenuOpen(!menuOpen);
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
                  <li className="nav-menu-items"><a className="menu-link" href="#AboutUs">About us</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="#ContactUs">Contact us</a></li>
              </ul>
          </div>
          <div className="nav__toggle_menu" onClick={menuToggle}>
            <div onClick={menuOpener} className={ toggle ? "menu-toggle-open" : "nav__toggle-menu-line" }>
            </div>
            {menuOpener && <ul className={menuOpen ? "nav-menu-parent menu-open" : "nav-menu-parent"}>
                  <li className="nav-menu-items home"><a className="menu-link" href="Home">Home</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="About-us">About us</a></li>
                  <li className="nav-menu-items"><a className="menu-link" href="Contact-us">Contact us</a></li>
                  <li className="nav-menu-items"><Link to="/login" className="menu-link link-style link">Log in</Link></li>
                  <li className="nav-menu-items"><Link to="/register" className="menu-link">Register</Link></li>
              </ul>}
          </div>
          <div className="btn-nav">

              <button className="btn btn-sign-in"><Link to="/Login" className="link-style">Log in</Link></button>

              {/* <button className="btn"><Link to="/TaskApp" className="link-style">Create Task</Link></button> */}

              <button className="btn "><Link to="/Register" className="link-style">Register</Link></button>

          </div>
      </div>
          {menuOpen && <div className= "cover cover-active"></div>}
    </div> 
  );
}

export default Navbar;