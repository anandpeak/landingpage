"use client";
import comments from "../../json/comments.json";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Comments() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAuto, setIsAuto] = useState(true);
  const total = comments.length;

  const autoInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto advance
  useEffect(() => {
    if (isAuto) {
      autoInterval.current = setInterval(() => {
        setDirection("next");
        setCurrent((prev) => (prev + 1) % total);
      }, 5000);
    }

    return () => {
      if (autoInterval.current) clearInterval(autoInterval.current);
    };
  }, [isAuto, total]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      setDirection("next");
      setCurrent((prev) => (prev + 1) % total);
      setIsAuto(false); // stop auto on manual swipe
    } else if (info.offset.x > 50) {
      setDirection("prev");
      setCurrent((prev) => (prev - 1 + total) % total);
      setIsAuto(false); // stop auto on manual swipe
    }
  };

  const variants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="md:mx-[12vw] mx-[4vw] mb-20">
      <p className="text-[clamp(18px, 2.5vw, 24px)] font-semibold mb-20">
        Хүндэт харилцагчдын сэтгэгдэл
      </p>

      {/* Mobile carousel */}
      <div className="md:hidden relative h-[410px] w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            drag="x"
            onDragEnd={handleDragEnd}
            className="absolute top-0 left-0 w-full cursor-grab active:cursor-grabbing"
          >
            <div className="w-full h-[410px] rounded-xl p-8 border border-[#f8f8f8] shadow-md my-4 bg-white">
              <div className="mb-6 text-center h-[219px] overflow-hidden flex items-center justify-center">
                <p
                  className={`text-[#2F353A] text-wrap ${
                    current === 0
                      ? "text-[10.5px]"
                      : current === 1
                      ? "text-[14px]"
                      : "text-base"
                  }`}
                >
                  {comments[current].comments}
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#1E2228] text-[clamp(14px, 1.5vw, 18px)]">
                  {comments[current].name}
                </p>
                <p className="text-sm text-[#1E2228] w-[160px] my-3 text-[clamp(12px, 1.2vw, 16px)]">
                  {comments[current].prof}
                </p>
                <p className="text-sm text-[#1E2228] font-semibold text-[clamp(12px, 1.2vw, 16px)]">
                  {comments[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop flex layout */}
      <div className="hidden md:flex items-center justify-between overflow-visible md:flex-wrap gap-6 scrollbar-hide">
        {comments.map((item, index) => (
          <div
            key={index}
            className="w-[280px] md:w-[340px] h-[410px] rounded-xl p-8 border border-[#f8f8f8] flex-shrink-0 shadow-[20px_20px_40px_10px_rgba(0,0,0,0.07)] my-4"
          >
            <div className="mb-6 text-center h-[219px] overflow-hidden flex items-center justify-center">
              <p
                className={`text-[#2F353A] text-wrap ${
                  index === 0
                    ? "md:text-[11.2px] sm:text-[10.5px] text-[10.5px]"
                    : index === 1
                    ? "text-[14px]"
                    : "text-base"
                }`}
              >
                {item.comments}
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1E2228] text-[clamp(14px, 1.5vw, 18px)]">
                {item.name}
              </p>
              <p className="text-sm text-[#1E2228] w-[160px] my-3 text-[clamp(12px, 1.2vw, 16px)]">
                {item.prof}
              </p>
              <p className="text-sm text-[#1E2228] font-semibold text-[clamp(12px, 1.2vw, 16px)]">
                {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
