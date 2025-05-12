"use client";

import { MdLanguage } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (path: string) =>
    currentPath === path ? "text-[#fff] bg-[#000]" : "";

  return (
    <header
      style={{ boxShadow: "20px 20px 40px 10px rgba(0, 0, 0, 0.07)" }}
      className="py-3"
    >
      <div className="container mx-auto flex justify-between items-center sm:px-4 px-4 md:px-10">
        <div className="flex items-center justify-center gap-1">
          <Image
            width={30}
            height={12}
            className="mt-1 sm:mt-1.5 md:mt-2 w-[24px] sm:w-[24px] md:w-[30px] h-auto"
            src="/oneplaceIcon.svg"
            alt="icon"
          />
          <p className="text-[#1C1C1C] md:text-[24px] sm:text-xl text-xl font-bold">
            oneplace.hr
          </p>
        </div>
        <nav className="hidden">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`${isActive("/")} rounded-[40px] px-4 py-3`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className={`${isActive("/product")} rounded-[40px] px-4 py-3`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/case-study"
                className={`${isActive(
                  "/case-study"
                )} rounded-[40px] px-4 py-3`}
              >
                Case Study
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <MdLanguage className="md:text-2xl sm:text-sm text-sm" />
            <select className="cursor-pointer md:text-base sm:text-sm text-sm">
              <option value="en">Eng</option>
              <option value="mn">Мон</option>
            </select>
          </div>
          <button
            className="bg-[#EE8888] md:px-6 py-2 sm:px-4 px-4 rounded-[30px] text-[#fff] hover:opacity-50 cursor-pointer md:text-base sm:text-sm text-sm"
            onClick={() =>
              window.open(
                "https://calendly.com/khurel-oneplacehr/demo-session-with-oneplace-hr",
                "_blank"
              )
            }
          >
            Try for free
          </button>
        </div>
      </div>
    </header>
  );
}
