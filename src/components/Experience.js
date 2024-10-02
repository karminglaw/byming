import React from "react";
import { GoPlus } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion";
import SwiperComponent from "../functions/swiper";

const Experience = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.8], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  return (
    <section id="experience">
      <div className="slider">
        <motion.div className="breadcrumb-project" style={{ y, opacity }}>
          <GoPlus className="plus-icon" />
          <h6>Projects</h6>
        </motion.div>
        <SwiperComponent />
      </div>
    </section>
  );
};

export default Experience;
