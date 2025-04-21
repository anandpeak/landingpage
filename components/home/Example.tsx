"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Example() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ backgroundColor: "#fff", opacity: 0 }}
      animate={isInView ? { backgroundColor: "#000", opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="w-full h-screen m-auto md:pb-20 md:pt-[120px] mb-20 sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center sm:gap-12 gap-12"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-[#fff] font-semibold md:text-[24px] sm:text-base text-base md:mb-[60px] sm:px-10 px-10"
      >
        Watch a great example of how gamification helps to improve new employee
        onboarding.
      </motion.p>
      <div className="flex items-center justify-center md:w-[60%] sm:w-[80%] w-[80%] h-[60vh]">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="rounded-3xl w-full h-full"
          src="https://www.youtube.com/embed/s_Wt3hoVqHs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></motion.iframe>
      </div>
    </motion.div>
  );
}
