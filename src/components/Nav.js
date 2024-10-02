import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from '../functions/anim';
import Index from '../functions/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Curve from '../functions/Curve';  // Import the Curve component

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/project",
  },
  {
    title: "Experiences",
    href: "/experience",
  },
  {
    title: "Qualifications",
    href: "/qualification",
  },
]

export default function Nav() {
  const [pathname, setPathname] = useState("/");
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="menu"
    >
       <div className="body">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav">
                <div className="header">
                    <p>Ming's Directory</p>
                </div>
                {
                  navItems.map((data, index) => {
                    return <Index 
                      key={index} 
                      data={{...data, index}} 
                      isActive={selectedIndicator === data.href} 
                      setSelectedIndicator={setSelectedIndicator}
                    />
                  })
                }
            </div>
            <div className="footer">
                <a href="https://github.com/karminglaw"><FaGithub className="icon" /></a>
                <a href="https://www.linkedin.com/in/kar-ming-law-2120952aa/"><FaLinkedin /></a>
            </div>
        </div>
        <Curve />  
    </motion.div>
  )
}