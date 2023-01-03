import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoBlue from '../../assets/logoBlue.svg'
import './navbar.css';

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    return navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>
        
        <span className="logo"><img src={logoBlue} alt="logo"/><span className="logo-name">BDCOE</span></span>
        
        <span className="links">
          <a onClick={showNavbar} href="#About">About</a>
          <a onClick={showNavbar} href="/">Events</a>
          <a onClick={showNavbar} href="#Domains">Domains</a>
          <a onClick={showNavbar} href="/team">Team</a>
          <a onClick={showNavbar} href="#Contact">Contact Us</a>
        </span>

        
        <button class="regbtn">Register</button>
        
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
