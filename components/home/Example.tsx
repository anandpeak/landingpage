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
      className="w-full h-screen m-auto pb-20 pt-[140px] mb-20"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-[#fff] font-semibold text-[24px] mb-[120px]"
      >
        Watch a great example of how gamification helps to improve new employee
        onboarding.
      </motion.p>
      <div className="flex items-center justify-center">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-[60%] rounded-3xl h-[50vh]"
          src="https://www.youtube.com/embed/s_Wt3hoVqHs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></motion.iframe>
      </div>
    </motion.div>
  );
}
