import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='header-section'>
      <div className='header-container'>
        <div className='header-menu-left'>
          <a href='#'><h3>Home</h3></a>
          <a href='#'><h3>Projects</h3></a>
          <a href='#'><h3>Experience</h3></a>
        </div>
        <div className='header-menu-right'>
          <a href='https://github.com/karminglaw' target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href='https://www.linkedin.com/in/kar-ming-law-2120952aa/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;