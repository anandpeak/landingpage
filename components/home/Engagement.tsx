import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "pulse-surveys",
    name: "Pulse Surveys",
    img: "/img/home/engagement/survey.png",
    desc: "Gamified pulse survey pushes participation rate to the 90% and above",
  },
  {
    id: "feedback",
    name: "Feedback",
    img: "/img/home/engagement/feedback.png",
    desc: "People love giving and receiving feedback that is constructive and truthful. Our system is designed for that!",
  },
  {
    id: "ona",
    name: "ONA",
    img: "/img/home/engagement/Ona.png",
    desc: "Organizational Network Analysis let leaders get to know the relationship amongst the Team and make critical changes to retain top talents",
  },
  {
    id: "burnout-assessment",
    name: "Burnout Assessment",
    img: "/img/home/engagement/burnout.png",
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
    <div className="mx-[6vw] md:mx-[12vw] mb-20">
      <p className="text-[28px] md:text-[34px] mb-10">
        Employee Engagement Module
      </p>

      {/* Mobile Tabs */}
      <div className="flex flex-wrap gap-4 mb-10 md:hidden">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-full text-sm ${
              activeSection === section.id
                ? "bg-[#ff8888] text-white"
                : "bg-[#f0f0f0] text-black"
            }`}
            onClick={() => handleClick(section.id)}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-8">
        {/* Sidebar */}
        <nav className="hidden md:block md:w-1/4">
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
              className="w-[8px] rounded-2xl border-2 border-[#F8F8F8] bg-[#E6E6E6] relative mt-5"
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

        {/* Content */}
        <div className="w-full md:w-3/4 h-auto md:h-[40vh]">
          <AnimatePresence mode="wait">
            {sections.map(
              (section) =>
                activeSection === section.id && (
                  <motion.section
                    key={section.id}
                    className="h-auto md:h-full flex flex-col md:flex-row items-center justify-between gap-10 border border-[#e6e6e6] rounded-4xl p-6 md:p-8 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full md:w-[50%] h-[120px] md:h-full object-cover rounded-xl">
                      <img
                        className="w-full h-full object-contain rounded-xl"
                        src={section.img}
                        alt={section.name}
                      />
                    </div>
                    <div className="w-full md:w-[50%] h-auto md:h-full flex flex-col gap-4">
                      <p className="text-[28px] md:text-[34px] text-[#333] font-semibold">
                        {section.name}
                      </p>
                      <p className="text-[#888] text-[18px] md:text-[24px]">
                        {section.desc}
                      </p>
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
