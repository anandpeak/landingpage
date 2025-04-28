"use client";
import { useEffect, useState } from "react";
import { IoArrowForward, IoArrowUp } from "react-icons/io5";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Comments from "@/components/home/Comments";
import Engagement from "@/components/home/Engagement";
import Example from "@/components/home/Example";
import InfiniteCarousel from "@/components/home/InfiniteCarousel";
import Integrations from "@/components/home/Integrations";
import Pathway from "@/components/home/Pathway";
import Table from "@/components/home/Table";
import Talent from "@/components/home/Talent";
import Image from "next/image";

export default function Home() {
  const [chosen, setChosen] = useState<number>(1);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsBottom(bottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-[#fff]">
      <div className="bg-dots flex flex-col lg:flex-row items-center justify-between px-6 lg:px-28 pt-20 gap-10 lg:gap-20 text-center lg:text-left pb-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[42px] lg:text-[69px] font-bold leading-tight text-center">
            Where <br className="hidden lg:block" /> HR Team and AI <br />
            <span className="text-[#EA8B88]">Collaborate</span>
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex items-center justify-center">
            <Image
              className="w-[320px] lg:w-[550px]"
              src="/img/home/bg.svg"
              alt="background image"
              width={550}
              height={300}
              layout="intrinsic"
            />

            <Image
              className="absolute  rounded-xl w-[360px] lg:w-[680px]"
              src="/img/home/dashboard.png"
              width={680}
              height={380}
              alt="dashboard"
              layout="intrinsic"
            />
          </div>
        </motion.section>
      </div>
      <InfiniteCarousel />
      <div className="fixed bottom-10 left-5 sm:left-5 lg:left-20 z-50">
        <button
          className="flex items-center text-[#fff] gap-4 py-2 px-6 lg:px-8 bg-[#EA8B88] rounded-[50px] cursor-pointer text-sm lg:text-base"
          onClick={() => {
            if (isBottom) {
              scrollToTop();
            } else {
              window.open(
                "https://calendly.com/khurelbaatar/book-a-meeting-with-oneplace-hr",
                "_blank"
              );
            }
          }}
        >
          {isBottom ? "Go Up" : "Book a Demo"}
          {isBottom ? <IoArrowUp /> : <IoArrowForward />}
        </button>
      </div>
      <div className="mb-10 text-left md:ms-40 sm:ms-8 ms-8">
        <p className="font-semibold text-[20px] lg:text-[24px] mt-10 lg:mt-20">
          Employee Journey
        </p>
      </div>
      <Pathway />
      <Example />
      <Talent chosen={chosen} setChosen={setChosen} />
      <Engagement />
      <Comments />
      <Integrations />
      <Table />
      <Footer />
    </div>
  );
}
