import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Table = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="mx-[6vw] sm:mx-[12vw] mt-10 sm:mt-20">
      <p className="text-[20px] sm:text-[24px] sm:w-[700px] font-semibold mb-6 sm:mb-10">
        Уламжлалт Хүний нөөцийн{" "}
        <span className="text-[#DC7F71]">үйл ажиллагааг тоглоомчилж</span>,
        шинэлэгээр тодорхойлно.
      </p>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 relative mb-10">
        <motion.div
          className="hidden md:block w-[200px] h-[43px] bg-[#DC7F71] absolute rounded-3xl "
          initial={{ top: "0px", left: "0px" }}
          animate={
            active === 1
              ? { top: "0px", left: "0px" }
              : { top: "0px", left: "226px" }
          }
          transition={{ duration: 0.3 }}
        />
        <div className="flex sm:flex-row flex-col sm:gap-3 gap-2 z-10">
          <button
            className={`w-full sm:w-[200px] px-4 py-2 rounded-3xl transition-colors duration-300 cursor-pointer ${
              active === 1 && "md:bg-none sm:bg-[#DC7F71] bg-[#DC7F71]"
            } ${active === 1 ? "text-[#fff]" : "text-[#000]"}`}
            onClick={() => setActive(1)}
          >
            Шууд холбогдох
          </button>
          <div className="hidden sm:block w-[2px] h-[24px] bg-[#E8E8E8]" />
          <button
            className={`w-full sm:w-[200px] px-4 py-2 rounded-3xl transition-colors duration-300 cursor-pointer ${
              active === 2 && "md:bg-none sm:bg-[#DC7F71] bg-[#DC7F71]"
            } ${active === 2 ? "text-[#fff]" : "text-[#000]"}`}
            onClick={() => setActive(2)}
          >
            Бүтээгдэхүүн турших
          </button>
          <div className="hidden sm:block w-[2px] h-[24px] bg-[#E8E8E8]" />
          <Link
            href="https://calendly.com/khurelbaatar/book-a-meeting-with-oneplace-hr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[200px] px-4 py-2 rounded-3xl cursor-pointer text-center"
          >
            Уулзалт товлох
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:h-[40vh] mb-20 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {active === 1 && (
            <motion.div
              key="page1"
              className="w-full text-center"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
            >
              <p className="font-light text-center">
                *Та утсаар залгахаар бол ажлын цагаар (09:00 - 18:00 цагийн
                хооронд) холбогдоно уу. Баярлалаа.
              </p>
            </motion.div>
          )}

          {active === 2 && (
            <motion.div
              key="page2"
              className="flex flex-col sm:flex-row items-center justify-between mx-0 sm:mx-[50px] gap-6 sm:gap-0 w-full"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
            >
              <div>
                <div className="mb-3">
                  <p className="ms-2">Нэр</p>
                  <input
                    className="bg-[#F8F8F8] py-2 px-4 w-full sm:w-[400px] border border-[#efefef] rounded-xl"
                    placeholder="Нэр"
                    type="text"
                  />
                </div>
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="ms-2">Утасны дугаар</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="XXXX-XXXX"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="ms-2">Цахим шуудан</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="example@gmail.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="ms-2">Компаний нэр</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="Нэр"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="ms-2">Ажилтны тоо</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="10-20"
                      type="text"
                    />
                  </div>
                </div>
                <button className="w-full sm:w-[400px] flex items-center justify-center gap-3 rounded-3xl py-2 bg-[#DC7F71] text-[#fff] cursor-pointer">
                  Хүсэлт илгээх
                  <MdArrowOutward />
                </button>
              </div>

              <div className="hidden sm:block">
                <Image
                  width={285}
                  height={285}
                  src="/img/home/table/table.svg"
                  alt="img"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Table;
