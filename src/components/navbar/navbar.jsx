import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css';

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    return navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>
        <a onClick={showNavbar} href="#About">About</a>
        <a onClick={showNavbar} href="/">Events</a>
        <a onClick={showNavbar} href="#Domains">Domains</a>
        <a onClick={showNavbar} href="/Team">Team</a>
        <a onClick={showNavbar} href="#Contact">Contact Us</a>
        <button class="regbtn">Register</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
