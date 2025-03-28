import React from "react";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 px-[12vw] text-black mt-10">
      <div className="flex justify-between w-full">
        <div>
          <h3 className="font-semibold mb-3">Бүтээгдэхүүн</h3>
          <ul className="space-y-2 text-sm">
            <li>Сонгон шалгаруулалтын тоглоом</li>
            <li>Багийн сэтгэл зүй</li>
            <li>Тоглоомд суурилсан судалгаа</li>
            <li>Burnout тоглоом</li>
            <li>Ажилтны оролцоот байдал</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Судалгаа</h3>
          <ul className="space-y-2 text-sm">
            <li>Бүтээгдэхүүн</li>
            <li>Бидний түүх</li>
            <li>Холбоо барих</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Холбоо барих</h3>
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
              <FiFacebook />
              oneplace.hr
            </li>
            <li className="flex items-center gap-2 underline cursor-pointer">
              <IoLogoInstagram />
              oneplace.hr
            </li>
            <li className="flex items-center gap-2 underline cursor-pointer">
              <RiTwitterXLine />
              oneplace.hr
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1">
            <img className="mt-3" src="/oneplaceIcon.svg" alt="icon" />
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
