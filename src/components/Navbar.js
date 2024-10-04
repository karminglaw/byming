import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav'; 

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className='header-section'>
        <div className='header-container'>
          <div className='header-menu-left'>
            <h3>By Ming</h3>
          </div>
        </div>
        <div 
          onClick={() => setIsActive(!isActive)} 
          className={`button ${isActive ? 'active' : ''}`}
        >
          <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;