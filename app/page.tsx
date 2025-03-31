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
    <div className="relative">
      <div className="flex items-center justify-between mx-28 mt-20 gap-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[69px]  text-center font-bold">
            Where <br /> HR Team and AI <br />
            <span className="text-[#EA8B88]">Collaborate</span>
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-cover bg-center flex items-center justify-center me-10">
            <Image
              className="w-[550px]"
              src="/img/home/bg.svg"
              alt="image"
              width={550}
              height={300}
              layout="intrinsic"
            />

            <Image
              className="absolute mt-10 rounded-xl"
              src="/img/home/dashboard.png"
              width={680}
              height={380}
              alt="dash"
              layout="intrinsic"
            />
          </div>
        </motion.section>
      </div>
      <InfiniteCarousel />
      <div className="fixed bottom-14 left-20 z-50">
        <button
          className="flex items-center text-[#fff] gap-4 py-2 px-8 bg-[#EA8B88] rounded-[50px] cursor-pointer"
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
