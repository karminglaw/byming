import React from "react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FlippingCard from "./FlippingCard";

const Home = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const { scrollY } = useScroll();

	// Create a transform for the y position of the text
	const y = useTransform(scrollY, [0, 400], [0, -250]);

	function handleFlip() {
		if (!isAnimating) {
			setIsFlipped(!isFlipped);
			setIsAnimating(true);
		}
	}

	return (
		<section className="home-section">
			<div className="home-container">
				<motion.div
					className="home-col-left"
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
				<div className="home-col-middle">
					<motion.div
						className="middle-text"
						style={{ y }} // Apply the scroll-based y transform
					>
						<motion.div
							className="text-left"
							// initial={{ x: -100, opacity: 0 }}
                            initial={{  opacity: 0 }}
							animate={{  opacity: 1 }}
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
                            initial={{  opacity: 0 }}
							animate={{  opacity: 1 }}
							transition={{
								ease: "easeOut",
								delay: 0.9,
								duration: 1.6,
							}}
						>
							<h1>Infinite.</h1>
						</motion.div>
					</motion.div>
					<motion.img
						initial={{ y: 1000, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: "easeOut", duration: 0.65 }}
						src=""
						alt=""
					></motion.img>
				</div>
				<motion.div
					className="home-col-right"
					style={{ y }}
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						type: "spring",
						damping: 10,
						bounce: 0.6,
						delay: 1.1,
						duration: 0.7,
					}}
				>
					<div className="col-right-content">
						<h5>02</h5>
						<FlippingCard frontImageUrl="/path/to/your/image.jpg" />
						<h4>Portfolio Overview</h4>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Home;
