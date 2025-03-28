"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const logos: string[] = [
  "/img/home/companies/mcs.svg",
  "/img/home/companies/teso.svg",
  "/img/home/companies/apu.svg",
  "/img/home/companies/invescore.svg",
  "/img/home/companies/burger.svg",
  "/img/home/companies/orchlon.svg",
  "/img/home/companies/qazaq.svg",
  "/img/home/companies/gazarshim.svg",
  "/img/home/companies/it.svg",
];

const InfiniteCarousel: React.FC = () => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.scrollWidth;
      console.log("Carousel width:", width);
      setCarouselWidth(width);
    }
  }, [carouselRef.current]);

  return (
    <div className="overflow-hidden relative w-full bg-white py-6 mt-40 mb-20">
      <motion.div
        ref={carouselRef}
        className="flex space-x-16 w-max"
        animate={{
          x: ["0%", `-${carouselWidth / 2 + 40}px`], // animate to the full width of the carousel
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust scroll speed based on width
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="logo" className="h-16" />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
