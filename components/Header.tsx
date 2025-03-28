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
      <div className="container mx-auto flex justify-between items-center px-10">
        <Image
          className="h-[25px]"
          src="/oneplacehrLogo.svg"
          alt="logo"
          width={200}
          height={25}
        />
        <nav>
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
            <MdLanguage className="text-2xl" />
            <select className="cursor-pointer">
              <option value="en">Eng</option>
              <option value="mn">Мон</option>
            </select>
          </div>
          <button className="bg-[#EE8888] px-6 py-2 rounded-[30px] text-[#fff] hover:opacity-50 cursor-pointer">
            Try for free
          </button>
        </div>
      </div>
    </header>
  );
}
