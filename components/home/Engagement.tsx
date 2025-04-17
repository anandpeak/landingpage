import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "pulse-surveys",
    name: "Pulse Surveys",
    desc: "Gamified pulse survey pushes participation rate to the 90% and above",
  },
  {
    id: "feedback",
    name: "Feedback",
    desc: "People love giving and receiving feedback that is constructive and truthful.Our system is designed for that!",
  },
  {
    id: "ona",
    name: "ONA",
    desc: "Organizational Network Analysis let leaders get to know the relationship amongst the Team and make critical changes to retain top talents",
  },
  {
    id: "burnout-assessment",
    name: "Burnout Assessment",
    desc: "We measure physical, emotional and cognitive fatiques and with AI generate recommendations",
  },
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
                    className="h-full flex items-center justify-between gap-10 border border-[#e6e6e6] rounded-4xl p-10 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-[50%] h-full">
                      <div className="w-full h-full bg-[#cfcfcf] rounded-xl"></div>
                    </div>
                    <div className="w-[50%] h-full flex flex-col justify-between">
                      <p className="text-[40px] text-[#333] font-semibold">
                        {section.name}
                      </p>
                      <p className="text-[#888] text-[24px]">{section.desc}</p>

                      <div className="flex items-center gap-4">
                        <button className="text-[#fff] text-sm font-semibold bg-[#EE8888] px-4 py-3 rounded-xl cursor-pointer">
                          Get Started
                        </button>
                        <button className="text-[#333] text-sm font-semibold bg-[#ebebeb] px-4 py-3 rounded-xl cursor-pointer">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </motion.section>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
