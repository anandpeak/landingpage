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
        Gamifying traditional Human Resources{" "}
        <span className="text-[#DC7F71]">operations and redefining</span> them
        in an innovative way.
      </p>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 relative mb-10">
        <motion.div
          className="hidden md:block w-[200px] h-[39px] bg-[#DC7F71] absolute rounded-3xl "
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
            Contact us
          </button>
          <div className="hidden sm:block w-[2px] h-[39px] bg-[#E8E8E8]" />
          <button
            className={`w-full sm:w-[200px] px-4 py-2 rounded-3xl transition-colors duration-300 cursor-pointer ${
              active === 2 && "md:bg-none sm:bg-[#DC7F71] bg-[#DC7F71]"
            } ${active === 2 ? "text-[#fff]" : "text-[#000]"}`}
            onClick={() => setActive(2)}
          >
            Test the product
          </button>
          <div className="hidden sm:block w-[2px] h-[39px] bg-[#E8E8E8]" />
          <Link
            href="https://calendly.com/khurelbaatar/book-a-meeting-with-oneplace-hr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[200px] px-4 py-2 rounded-3xl cursor-pointer text-center"
          >
            Book a meeting
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
                *If you choose to call, please do so during working hours
                (between 09:00 and 18:00). Thank you
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
                  <p className="ms-2">Name</p>
                  <input
                    className="bg-[#F8F8F8] py-2 px-4 w-full sm:w-[400px] border border-[#efefef] rounded-xl"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="ms-2">Phone Number</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="XXXX-XXXX"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="ms-2">Email</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="example@gmail.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="ms-2">Company Name</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="ms-2">Number of Employees</p>
                    <input
                      className="bg-[#F8F8F8] py-2 px-4 w-full border border-[#efefef] rounded-xl"
                      placeholder="10-20"
                      type="text"
                    />
                  </div>
                </div>
                <button className="w-full sm:w-[400px] flex items-center justify-center gap-3 rounded-3xl py-2 bg-[#DC7F71] text-[#fff] cursor-pointer">
                  Submit Request
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
