import { monk_img, temple_img } from "@/public/constant";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";


const About = () => {
  // const images = [
  //   { name: "logo", src: "https://www.haldiavoice.in/images/logo.png" },
  //   {
  //     name: "monk_img",
  //     src: "https://www.vedicgurukul.org/wp-content/uploads/elementor/thumbs/Header01-pzgfug3xyvmk8pgbc3pa4j1apghwzka28nbthjzpck.jpg",
  //   },
  //   {
  //     name: "temple_img",
  //     src: "https://www.vedicgurukul.org/wp-content/uploads/2022/12/Hearder-sliding-02.jpg",
  //   },
  //   {
  //     name: "book",
  //     src: "https://img.icons8.com/?size=100&id=112289&format=png&color=000000",
  //   },
  // ];

  return (
    <>
    <div className="flex justify-center items-center text-2xl"></div>
    <div id="about" className="md:flex p-4 bg-slate-100 m-4">
      
      <div className="md:flex m-8 items-center h-1/2 relative overflow-hidden w-1/2   ">
        <img
        className="md:w-1/2 "
        src="/prabhupada.png"
        alt="prabhupada"
        />
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
