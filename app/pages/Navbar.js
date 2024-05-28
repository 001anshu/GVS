"use client";
import React, { useEffect, useState } from "react";
import Navbarbtn from "./Navbarbtn";
import { logo } from "@/public/constant";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const items1 = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Courses", id: "courses" },
    { name: "Achivement", id: "achievement" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log("clicked");
    setisOpen(false);
  };

  return (
    <div className=" ">
      <div className="bg-red-500 flex items-center  justify-between  ">
        <img
          src="/header_logo.jpeg"
          alt="Description of the image"
          className="w-10 m-2  lg:w-20 md:w-16"
        />

        <div className="text-2xl lg:text-3xl text-slate-100 ">Guaranga Vedic Society</div>
        <div>
        <div className="hidden   m-2   lg:flex  lg:justify-between ">
          {items1.map((item, i) => (
             
            <Navbarbtn
              name={item.name}
              key={i}
              gotoId={() => scrollToSection(item.id)}
            />
            
          ))}
          
        </div>
        </div>
        <div className="">
          <button onClick={toggleMenu} className="focus:outline-none m-4 lg:hidden ">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white w-1/3 absolute  right-0 z-50 shadow-2xl `}
      >
        <div className="max-w-sm mx-auto border-b border-gray-300 flex flex-col items-center p-4">
          {items1.map((item, i) => (
             
            <Navbarbtn
              name={item.name}
              key={i}
              gotoId={() => scrollToSection(item.id)}
            />
            
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
