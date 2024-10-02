import { motion } from 'framer-motion';
import { slide } from './anim';
import { scale } from './anim';

export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className="link" 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className="indicator">
        </motion.div>
        <a href={href}>{title}</a>
      </motion.div>
    )
}