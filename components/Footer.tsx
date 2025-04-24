import React from "react";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 px-[12vw] text-black mt-10 bg-[#f7f7f7]">
      <div className="flex md:flex-row sm:flex-col flex-col justify-between w-full sm:space-y-10 space-y-10 md:space-y-0">
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Recruitment Game</li>
            <li>Team Psychology</li>
            <li>Game-based Surveys</li>
            <li>Burnout Game</li>
            <li>Employee Engagement</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Research</h3>
          <ul className="space-y-2 text-sm">
            <li>Products</li>
            <li>Our Story</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline />
              hello@oneplace.hr
            </li>
            <li className="flex items-center gap-2">
              <LuPhone />
              +976 72728872
            </li>
            <li className="flex items-center gap-2 underline cursor-pointer">
              <Link
                href="https://www.facebook.com/metacog.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiFacebook />
                oneplace.hr
              </Link>
            </li>
            <li className="flex items-center gap-2 underline cursor-pointer">
              <Link
                href="https://www.instagram.com/oneplace_hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <IoLogoInstagram />
                oneplace.hr
              </Link>
            </li>
            <li className="flex items-center gap-2 underline cursor-pointer">
              <RiTwitterXLine />
              oneplace.hr
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1">
            <Image
              width={40}
              height={17}
              className="mt-3"
              src="/oneplaceIcon.svg"
              alt="icon"
            />
            <p className="text-[#1C1C1C] text-[34px] font-bold">oneplace.hr</p>
          </div>
          <p className="mt-1 text-center">Where HR Team collaborate with AI</p>
        </div>
      </div>

      <div className="border-t border-[#cfcfcf] mt-8 pt-8 text-center text-sm">
        <p>&copy; Copyright 2025. All Rights Reserved. Metacog Metrics LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
