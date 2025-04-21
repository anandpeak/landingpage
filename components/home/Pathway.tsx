"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Step {
  id: number;
  title: string;
  emoji: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Screening by AI-Recruiter",
    emoji: "🤖🧠",
    description:
      "AI-Recruiter will conduct first screening via messaging platforms",
  },
  {
    id: 2,
    title: "Game-Based Assessments",
    emoji: "🎮📍",
    description:
      "Use Game-Based assessments identifies high-potential candidates",
  },
  {
    id: 3,
    title: "Onboarding Journey",
    emoji: "🏆👨‍💼",
    description:
      "Gamified onboarding journeys are making the first months Great!",
  },
  {
    id: 4,
    title: "Simplified Surveys",
    emoji: "❤️💡",
    description:
      "Use simplified built-in survey-games to stay connected with employees",
  },
  {
    id: 5,
    title: "Feedbacks & Recognition",
    emoji: "👏📩",
    description:
      "Facilitate idea sharing, peer recognition, and constructive feedback with our tools.",
  },
  {
    id: 6,
    title: "People Analytics",
    emoji: "📊📈",
    description:
      "AI-Enhanced analytics will show you detailed insights to improve & grow",
  },
];

export default function Pathway() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative flex flex-wrap items-center md:justify-between justify-center md:ps-36 md:pe-44 md:h-screen h-auto mb-20 "
    >
      <div className="absolute ms-32 md:flex sm:hidden hidden justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="993"
          height="564"
          fill="none"
        >
          <motion.path
            d="M 2.144 2.271 C 176.463 2.271 198.952 101.72 395.759 101.72 C 592.567 101.72 636.96 9.993 789.375 2.271 C 936.678 16.226 990.727 126.809 990.727 263.836 C 990.727 400.862 938.117 501.447 789.375 550.377 C 640.633 599.307 567.961 459.556 395.759 459.556 C 198.952 459.556 196.883 603.21 2.144 550.377"
            fill="transparent"
            strokeWidth="3.63"
            stroke="rgb(238, 136, 136)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </div>
      {steps.map((step, index) => {
        const adjustedIndex = index < 3 ? index : steps.length - (index - 2);

        return (
          <div className="" key={steps[adjustedIndex].id}>
            <div
              className={`relative flex justify-center items-center sm:my-8 my-8 md:mx-10 ${
                adjustedIndex > 2 && "mt-20"
              }`}
            >
              <motion.div
                ref={ref}
                key={steps[adjustedIndex].id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.8, delay: adjustedIndex * 0.4 }}
                className="relative flex justify-center items-center my-2"
              >
                <div className="flex flex-col justify-center items-center">
                  {adjustedIndex % 2 === 1 && (
                    <p className="w-[280px] mb-6 text-center hidden sm:block">
                      {steps[adjustedIndex].description}
                    </p>
                  )}

                  <div className="relative flex flex-col items-center justify-center w-[180px] h-[180px] rounded-full text-center bg-[#e6e6e6] p-4">
                    <span className="text-2xl">
                      {steps[adjustedIndex].emoji}
                    </span>
                    <p className="text-[18px]">{steps[adjustedIndex].title}</p>
                  </div>

                  {(adjustedIndex % 2 === 0 || true) && (
                    <p className="w-[280px] mt-6 text-center block sm:hidden">
                      {steps[adjustedIndex].description}
                    </p>
                  )}
                  {adjustedIndex % 2 === 0 && (
                    <p className="w-[280px] mt-6 text-center hidden sm:block">
                      {steps[adjustedIndex].description}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
