import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "pulse-surveys", name: "Pulse Surveys" },
  { id: "feedback", name: "Feedback" },
  { id: "ona", name: "ONA" },
  { id: "burnout-assessment", name: "Burnout Assessment" },
];

export default function Engagement() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = sections.findIndex(
    (section) => section.id === activeSection
  );

  return (
    <div className="mx-[12vw] mb-20">
      <p className="text-[34px] mb-10">Employee Engagement Module</p>
      <div className="flex mb-20">
        {/* Sidebar */}
        <nav className="w-1/4">
          <div className="me-2 flex items-start gap-20">
            <div>
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`block text-left w-[140px] text-[18px] transition-colors duration-200 text-black my-6 ${
                    activeSection === section.id ? "font-bold" : ""
                  }`}
                  onClick={() => handleClick(section.id)}
                >
                  {section.name}
                </button>
              ))}
            </div>
            <div
              className="w-[8px] rounded-2xl border-2  border-[#F8F8F8] bg-[#E6E6E6] relative mt-5"
              style={{ height: `${sections.length * 50}px` }}
            >
              <motion.div
                className="absolute h-[50px] bg-[#ff8888] w-[4px] rounded-xl"
                animate={{ top: activeIndex * 50 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
          </div>
        </nav>

        <div className="w-3/4 h-[60vh]">
          <AnimatePresence mode="wait">
            {sections.map(
              (section) =>
                activeSection === section.id && (
                  <motion.section
                    key={section.id}
                    className="h-full flex items-center justify-center border border-[#e6e6e6] rounded-4xl p-10 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-semibold">
                      {section.name} Content
                    </h2>
                  </motion.section>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
