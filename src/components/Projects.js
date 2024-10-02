import React from "react";
import { GoPlus } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion";
import FlippingCard from "./FlippingCard"; // Make sure this path is correct

const Projects = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.8], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const projectCards = [
    {
      frontImageUrl: "/api/placeholder/400/300",
      title: "MonkeysCanopy",
      items: [
        "Designed the new header",
        "Helped maintained the inner pages",
        "Designed the mega menu",
      ],
    },
    {
      frontImageUrl: "/api/placeholder/400/300",
      title: "Tradivolution",
      items: [
        "Designed Our Studio Page",
        "Designed Our Team Page",
        "Designed Our Services Page",
      ],
    },
    {
      frontImageUrl: "/api/placeholder/400/300",
      title: "Babysteps",
      items: [
        "Designed the Coming Soon Page",
        "Designed the Careers Page",
      ],
    }
  ];

  return (
    <section id="projects">
      <div className="project-wrapper">
        <motion.div className="breadcrumb-project dark" style={{ y, opacity }}>
          <GoPlus className="plus-icon" />
          <h6>Projects</h6>
        </motion.div>
      </div>
      <div className="flipping-card-wrapper">
        <div className="flipping-card-col dark">
          <FlippingCard
            frontImageUrl={projectCards[0].frontImageUrl}
            title={projectCards[0].title}
            items={projectCards[0].items}
          />
          <h2>MonkeysCanopy</h2>
        </div>

        <div className="flipping-card-col dark">
          <FlippingCard
            frontImageUrl={projectCards[1].frontImageUrl}
            title={projectCards[1].title}
            items={projectCards[1].items}
          />
          <h2>Tradivolution</h2>
        </div>

        <div className="flipping-card-col dark">
          <FlippingCard
            frontImageUrl={projectCards[2].frontImageUrl}
            title={projectCards[2].title}
            items={projectCards[2].items}
          />
          <h2>Babysteps</h2>
        </div>

        {/* Add more FlippingCard components and headings as needed */}
      </div>
    </section>
  );
};

export default Projects;
