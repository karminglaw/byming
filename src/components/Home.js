import React from "react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FlippingCard from "./FlippingCard";
import { GoPlus } from "react-icons/go";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { scrollY } = useScroll();

  // Create a transform for the y position of the text
  const y = useTransform(scrollY, [0, 400], [0, -250]);
  const imageY = useTransform(scrollY, [0, 1000], [1000, 0]);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-col-left">
          <div className="breadcrumb">
            <GoPlus className="plus-icon" />
            <h6>Home</h6>
          </div>
          <motion.div
            className="col-left-content"
            style={{ y }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              bounce: 0.6,
              delay: 0.8,
              duration: 0.7,
            }}
          >
            <h5>01</h5>
            <p>
              A Software Engineering Graduate specialising in front-end
              development
            </p>
            <img src="" alt=""></img>
          </motion.div>
        </div>
        <div className="home-col-middle">
          <motion.div
            className="middle-text"
            style={{ y }} // Apply the scroll-based y transform
          >
            <motion.div
              className="text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeOut",
                delay: 0.8,
                duration: 1.6,
              }}
            >
              <h1>More than</h1>
            </motion.div>
            <motion.div
              className="text-right"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeOut",
                delay: 0.9,
                duration: 1.6,
              }}
            >
              <h1>
                <span className="cursive">Infinite.</span>
              </h1>
            </motion.div>
          </motion.div>
          <motion.img
            style={{ imageY }}
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.65 }}
            src=""
            alt=""
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default Home;
