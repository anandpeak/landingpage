"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    const updateWidth = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.scrollWidth;
        console.log("Carousel width:", width);
        setCarouselWidth(width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="overflow-hidden relative w-full  py-6 mt-40 mb-20">
      <motion.div
        ref={carouselRef}
        className="flex space-x-16 w-max"
        animate={{
          x: ["0%", `-${carouselWidth / 2 + 32}px`],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="logo"
            width={64}
            height={64}
            className="lg:h-16 w-auto sm:h-10 h-10"
            priority
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
