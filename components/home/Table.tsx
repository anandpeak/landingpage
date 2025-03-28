import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Table = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="mx-[12vw] mt-20">
      <p className="text-[24px] w-[700px] font-semibold mb-10">
        Уламжлалт Хүний нөөцийн{" "}
        <span className="text-[#DC7F71]">үйл ажиллагааг тоглоомчилж</span>,
        шинэлэгээр тодорхойлно.
      </p>
      <div className="flex items-center gap-3 relative mb-10">
        <motion.div
          className="w-[200px] rounded-3xl h-[43px] bg-[#DC7F71] absolute"
          initial={{ left: "0px" }}
          animate={{ left: active === 1 ? "0px" : "226px" }}
          transition={{ duration: 0.3 }}
        />
        <button
          className={`w-[200px] px-4 py-2 rounded-3xl relative z-10 transition-colors duration-300 cursor-pointer ${
            active === 1 ? "text-[#fff]" : "text-[#000]"
          }`}
          onClick={() => setActive(1)}
        >
          Шууд холбогдох
        </button>
        <div className="w-[2px] h-[24px] bg-[#E8E8E8]" />
        <button
          className={`w-[200px] px-4 py-2 rounded-3xl relative z-10 transition-colors duration-300 cursor-pointer ${
            active === 2 ? "text-[#fff]" : "text-[#000]"
          }`}
          onClick={() => setActive(2)}
        >
          Бүтээгдэхүүн турших
        </button>
        <div className="w-[2px] h-[24px] bg-[#E8E8E8]" />
        <Link
          href="https://calendly.com/khurelbaatar/book-a-meeting-with-oneplace-hr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] px-4 py-2 rounded-3xl cursor-pointer text-center"
        >
          Уулзалт товлох
        </Link>
      </div>
      <div className="flex w-full h-[40vh] mb-20 relative overflow-hidden">
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
              className="flex items-center justify-between mx-[50px] w-full"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
            >
              <div className="">
                <div className="mb-3">
                  <p className="ms-2">Нэр</p>
                  <input
                    className="bg-[#F8F8F8] py-2 px-4 w-[400px] border border-[#efefef] rounded-xl"
                    placeholder="Нэр"
                    type="text"
                  />
                </div>
                <div className="mb-3 flex items-center gap-4">
                  <div className="">
                    <p className="ms-2">Утасны дугаар</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-[190px] border border-[#efefef] rounded-xl"
                      placeholder="XXXX-XXXX"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <p className="ms-2">Цахим шуудан</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-[190px] border border-[#efefef] rounded-xl"
                      placeholder="example@gmail.com"
                      type="text"
                    />
                  </div>
                </div>{" "}
                <div className="mb-3 flex items-center gap-4">
                  <div className="">
                    <p className="ms-2">Компаний нэр</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-[190px] border border-[#efefef] rounded-xl"
                      placeholder="Нэр"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <p className="ms-2">Ажилтны тоо</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-[190px] border border-[#efefef] rounded-xl"
                      placeholder="10-20"
                      type="text"
                    />
                  </div>
                </div>
                <button className="w-[400px] flex items-center justify-center gap-3 rounded-3xl py-2 bg-[#DC7F71] text-[#fff] cursor-pointer">
                  Хүсэлт илгээх
                  <MdArrowOutward />
                </button>
              </div>
              <Image
                width={285}
                height={285}
                src="/img/home/table/table.svg"
                alt="img"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Table;
