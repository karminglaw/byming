import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, stagger } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Who from "./Who";

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, 
        delayChildren: delay + 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div className="section section1" style={{ scale, rotate }}>
      <AnimatedText className="home-text1" text="Ming's Portfolio" delay={0.3} />
      <div className="flex-container">
        <AnimatedText text="React" delay={0.6} />
        <div className="image-container">
          <img src="/images/Ming.png" alt="img" />
        </div>
        <AnimatedText text="Developer" delay={0.9} />
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div className="section section2" style={{ scale, rotate }}>
      {/* <img src="/images/test.jpg" alt="img" /> */}
      <Who/>
    </motion.div>
  );
};

const ScrollSections = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup function to stop Lenis when component unmounts
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="scroll-sections">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default ScrollSections;