import { monk_img, temple_img } from "@/public/constant";
import React from "react";
import EmblaCarousel from "./Carousel";


const About = () => {
 
  return (
    <>
    <div className="flex justify-center items-center text-2xl">About</div>
    <div id="about" className="md:flex p-4 bg-slate-100 m-4">
      
      <div className="md:flex h-auto relative overflow-hidden w-1/2  ">
        <EmblaCarousel/>
      </div>
      <div className="mb-4 md:w-1/2">
        <p className=" font-bold m-8">Learning With The Vedic School</p>
        <h1 className="text-5xl m-6 text-orange-400 lg:m-8">
        Experience An Amazing Indian Vedic Culture Journey
        </h1>
        <p className="text-2xl m-4 lg:m-10">
          Gain a superior understanding of Indian Vedic culture through an
          education that exceeds global standards. Unlock the secrets to this
          ancient knowledge and use it for personal achievement!
        </p>
        <button className="bg-red-500 p-4 m-4 text-white">KNOW MORE → </button>
      </div>
    </div>
    </>
  );
};

export default About;
