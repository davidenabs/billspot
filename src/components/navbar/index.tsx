"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BillspotLogo } from "@/icons";
import Button from "../forms/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center items-center px-32 py-5 w-full text-lg leading-5 bg-white">
      <div className="flex gap-5 justify-between items-center w-full max-w[1440px]">
        <Image
          src={"/images/billspot-logo.png"}
          width={100}
          height={100}
          alt="Billspot"
        />
        <button
          className="lg:hidden text-[#2C2C2C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex justify-between items-center self-center my-auto font-semibold`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center md:space-x-[12px] lg:space-x-[27px]">
            <li>
              <Link href="/">
                <span className="text-[17px] text-[#2C2C2C]">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-[17px] text-[#2C2C2C]">Refill</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-[17px] text-[#2C2C2C]">Resources</span>
              </Link>
            </li>
            <li>
              <Button onClick={undefined} className="p-2.5 font-bold h-[58px] w-[185px]">
                Sign up for free
              </Button>
            </li>
            <li>
              <Link href="/">
                <span className="text-[17px] text-[#2C2C2C]">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
