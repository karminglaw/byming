import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import useMousePosition from './useMousePosition';

const Who = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <section className='who-section dark'>
      <motion.div 
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          I'm a Front-end Developer with expertise in advanced CSS techniques and a track record of crafting creative and responsive websites for MNC companies and global brands.
        </p>
      </motion.div>
      <div className="who-content">
        <p>I'm a <span>Front-end Developer</span> with expertise in advanced CSS techniques and a track record of crafting creative and responsive websites for MNC companies and global brands.</p>
      </div>
    </section>
  )
}

export default Who;