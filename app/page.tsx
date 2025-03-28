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
    <div className="relative">
      <div className="flex items-center justify-between mx-28 mt-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[28px] font-bold">
            Where HR Team and AI collaborate
          </p>
          <p className="mt-7 w-[330px] text-[19px] leading-12">
            Recruiting & Onboarding on auto-pilot Employee engagement with Games
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-cover bg-center flex items-center justify-center me-10">
            <img className="w-[550px]" src="/img/home/bg.svg" alt="image" />
            <img
              className="absolute w-[680px] mt-10 rounded-xl"
              src="/img/home/dashboard.png"
              alt="dash"
            />
          </div>
        </motion.section>
      </div>
      <InfiniteCarousel />
      <div className="fixed bottom-14 left-20 z-50">
        <button
          className="flex items-center text-[#fff] gap-4 py-2 px-8 bg-[#EE8888] rounded-[50px] cursor-pointer"
          onClick={scrollToTop}
        >
          {isBottom ? "Go Up" : "Book a Demo"}{" "}
          {isBottom ? <IoArrowUp /> : <IoArrowForward />}
        </button>
      </div>
      <div className="mb-10">
        <p className="font-semibold text-[24px] ms-40 mt-20">
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
