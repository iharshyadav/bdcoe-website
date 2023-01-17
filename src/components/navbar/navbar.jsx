import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
import logoWhite from '../../assets/logo-white1.svg'
import './navbar.css';

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    return navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>
        
        <span className="logo"><img src={logoWhite} alt="logo"/><span className="logo-name">BDCOE</span></span>
        
        <span className="links">
          <a onClick={showNavbar} href="#About">About</a>
          <Link onClick={showNavbar} to="/event">Events</Link>
          <a onClick={showNavbar} href="#Domains">Domains</a>
          <Link onClick={showNavbar} to="/team">Team</Link>
          <a onClick={showNavbar} href="#Contact">Contact Us</a>
        </span>

        
        <button className="regbtn">Register</button>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
          
        </button>
      </nav>
      <div className="resnav"><button className="nav-btn nav-open-btn" onClick={showNavbar}>
      <FaBars />
      </button>
      </div>
      
        
    </header>
  );
}

export default Navbar;
