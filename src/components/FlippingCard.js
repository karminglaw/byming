import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlippingCard = ({ frontImageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container" onClick={handleFlip}>
      <motion.div
        className="flip-card"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flip-card-front">
          <img src={frontImageUrl} alt="Card front" className="flip-card-image" />
        </div>
        <div className="flip-card-back dark">
          <h2>Overview</h2>
          <ol>
            <li>A sandbox for me to experiment React</li>
            <li>A space to level up my frontend skills</li>
            <li>Recreating interesting CSS designs I learnt from mentors</li>
            <li>A portfolio showcasing my projects and experiences</li>
            <li>Tracking my progress as a web developer</li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default FlippingCard;