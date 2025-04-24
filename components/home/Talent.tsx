import React from "react";
import { motion } from "framer-motion";

interface TalentProps {
  chosen: number;
  setChosen: React.Dispatch<React.SetStateAction<number>>;
}

const Talent: React.FC<TalentProps> = ({ chosen, setChosen }) => {
  const getSvgPosition = () => {
    if (chosen === 1) return "left-0 md:-left-[68px]";
    if (chosen === 2) return "left-[0] md:left-[214px]";
    if (chosen === 3) return "left-[0] md:left-[496px]";
    return "left-0";
  };

  const transitionVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="mx-[5vw] md:mx-[12vw] mt-10 md:mt-20">
      <p className="text-[24px] md:text-[34px] font-semibold mb-6 md:mb-10">
        Talent Acquisition Module
      </p>
      <div className="mb-10 md:mb-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pb-2 relative">
          <svg
            className={`absolute top-0 z-10 transition-all duration-300 ${getSvgPosition()} hidden md:block `}
            width="387"
            height="90"
            viewBox="0 0 378 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_17417_1701" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60 0C46.7452 0 36 10.7452 36 24V44.64C36 44.7602 36.0009 44.8802 36.0026 45H36C36 65.5 36 86 0 86V110H378V86C341 86 341 67 341 45H340.997C340.999 44.8802 341 44.7602 341 44.64V24C341 10.7452 330.255 0 317 0H60Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60 0C46.7452 0 36 10.7452 36 24V44.64C36 44.7602 36.0009 44.8802 36.0026 45H36C36 65.5 36 86 0 86V110H378V86C341 86 341 67 341 45H340.997C340.999 44.8802 341 44.7602 341 44.64V24C341 10.7452 330.255 0 317 0H60Z"
              fill="#EE8888"
            />
            <path
              d="M36.0026 45V46H37.0175L37.0025 44.9853L36.0026 45ZM36 45V44H35V45H36ZM0 86V85H-1V86H0ZM0 110H-1V111H0V110ZM378 110V111H379V110H378ZM378 86H379V85H378V86ZM341 45H342V44H341V45ZM340.997 45L339.997 44.9852L339.982 46H340.997V45ZM37 24C37 11.2975 47.2975 1 60 1V-1C46.1929 -1 35 10.1929 35 24H37ZM37 44.64V24H35V44.64H37ZM37.0025 44.9853C37.0008 44.8704 37 44.7553 37 44.64H35C35 44.7651 35.0009 44.89 35.0028 45.0147L37.0025 44.9853ZM36 46H36.0026V44H36V46ZM0 87C18.1817 87 27.6105 81.8115 32.363 73.6927C34.7095 69.6841 35.8597 65.0484 36.4307 60.171C37.0012 55.2979 37 50.1127 37 45H35C35 50.1373 34.9988 55.2021 34.4443 59.9384C33.8903 64.6704 32.7905 69.0034 30.637 72.6823C26.3895 79.9385 17.8183 85 0 85V87ZM1 110V86H-1V110H1ZM378 109H0V111H378V109ZM377 86V110H379V86H377ZM340 45C340 50.4861 339.999 55.8605 340.585 60.8053C341.172 65.7553 342.355 70.353 344.774 74.2749C349.667 82.2104 359.358 87 378 87V85C359.642 85 350.833 80.2896 346.476 73.2251C344.27 69.647 343.14 65.3697 342.571 60.5697C342.001 55.7645 342 50.5139 342 45H340ZM340.997 46H341V44H340.997V46ZM340 44.64C340 44.7553 339.999 44.8704 339.997 44.9852L341.997 45.0148C341.999 44.89 342 44.7651 342 44.64H340ZM340 24V44.64H342V24H340ZM317 1C329.703 1 340 11.2974 340 24H342C342 10.1929 330.807 -1 317 -1V1ZM60 1H317V-1H60V1Z"
              fill="#EE8888"
              mask="url(#path-1-inside-1_17417_1701)"
            />
          </svg>

          {[
            "AI-Recruiter",
            "Game-Based Assessments",
            "Gamified Onboarding",
          ].map((label, index) => (
            <div
              key={index}
              onClick={() => setChosen(index + 1)}
              className={`w-full md:w-[250px] h-[60px] md:bg-[#f7f7f7] rounded-[20px] flex items-center justify-center cursor-pointer relative ${
                chosen === index + 1 ? "sm:bg-[#EE8888] bg-[#EE8888]" : "z-20"
              }`}
            >
              <p
                className={`${
                  chosen === index + 1 ? "text-[#fff]" : "text-[#000]"
                } relative z-20`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full min-h-[50vh] rounded-[20px] border-2 border-[#EE8888] relative z-20 bg-[#fff] flex flex-col md:flex-row justify-between gap-6 md:gap-8 p-6 md:p-10 overflow-hidden">
          <motion.div
            key={chosen}
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
          >
            <div className="w-full md:w-[50%] h-[200px] md:h-[400px]">
              {chosen === 1 ? (
                <img
                  className="w-full h-full object-contain rounded-xl"
                  src="/img/home/talent/ai.gif"
                  alt="img"
                />
              ) : chosen === 2 ? (
                <img
                  className="w-full h-full object-contain rounded-xl"
                  src="/img/home/talent/softskill.gif"
                  alt="img"
                />
              ) : (
                <img
                  className="w-full h-full object-contain rounded-xl"
                  src="/img/home/talent/onboardingg.gif"
                  alt="img"
                />
              )}
            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-between gap-4">
              {chosen === 1 ? (
                <>
                  <p className="text-[28px] md:text-[40px] text-[#333] font-semibold">
                    AI-Recruiter
                  </p>
                  <p className="text-[#888] text-[16px] md:text-[24px]">
                    Pre-trained and modified AI-Recruiter that understands your
                    business and hiring needs conducts first interviews via
                    messaging platforms saving tons of time for your recruiting
                    team
                  </p>
                </>
              ) : chosen === 2 ? (
                <>
                  <p className="text-[28px] md:text-[40px] text-[#333] font-semibold leading-10">
                    Game-Based Assessments
                  </p>
                  <p className="text-[#888] text-[16px] md:text-[24px]">
                    There is only 13% correlation between CV and Performance.
                    Prioritizing cognitive abilities improves chances to hire
                    high potential candidates
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[28px] md:text-[40px] text-[#333] font-semibold">
                    Gamified Onboarding
                  </p>
                  <p className="text-[#888] text-[16px] md:text-[24px]">
                    Transform onboarding into an exciting journey with our
                    gamified platform! New hires conquer tasks, unlock rewards,
                    and stay motivated while seamlessly integrating into the
                    team
                  </p>
                </>
              )}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="text-[#fff] text-sm font-semibold bg-[#EE8888] px-4 py-3 rounded-xl cursor-pointer w-full sm:w-auto">
                  Get Started
                </button>
                <button className="text-[#333] text-sm font-semibold bg-[#ebebeb] px-4 py-3 rounded-xl cursor-pointer w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
