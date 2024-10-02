import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlippingCard = ({ frontImageUrl, title, items }) => {
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
          <h2>{title}</h2>
          <ol>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default FlippingCard;