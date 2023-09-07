import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/logo-white1.svg'
import './navbar.css';

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    return navRef.current.classList.toggle("responsive_nav");
  }

  // function handleRegister() {
  //   alert('More events coming soon!');
  // }

  return (
    <header>
      <nav ref={navRef}>

        <span className="logo" ><img src={logoWhite} alt="logo" /><span className="logo-name">BDCOE</span></span>

        <span className="links">
          <a onClick={showNavbar} href="/#about"><span>About</span></a>
          <Link onClick={showNavbar} to="/event"><span>Events</span></Link>
          <a onClick={showNavbar} href="/#domains"><span>Domains</span></a>
          <Link onClick={showNavbar} to="/team"><span>Team</span></Link>
          <a onClick={showNavbar} href="/#contact"><span>Contact Us</span></a>
        </span>


        <a href="https://register.bdcoe.co.in/"><button className="regbtn" >Register</button>
</a>
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
