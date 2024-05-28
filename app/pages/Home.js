import { monk_img, temple_img } from "@/public/constant";
import React from "react";

const Home = () => {
  return (
    <div className="md:flex p-4 bg-slate-100 m-4" id="home">
      <h1>HOME</h1>
      <div className="mb-4 md:w-1/2">
        <p className=" font-bold m-8">Learning With The Vedic School</p>
        <h1 className="text-7xl m-6 lg:m-8">A world-class education in Indian Vedic culture</h1>
        <p className="text-2xl m-4 lg:m-10">Gain a superior understanding of Indian Vedic culture through an education that exceeds global standards. Unlock the secrets to this ancient knowledge and use it for personal achievement!</p>
        <button className="bg-red-500 p-4 m-4 text-white">ENROLL NOW →  </button>
      </div>
      <div className="md:flex h-auto relative overflow-hidden  ">
        <img
          className="m-4 w-1/2 h-1/2 lg:h-2/3 rounded-lg animate-float "
          alt="monk_image"
          src={monk_img}
        />
        <img
        className="m-4 w-2/5 h-1/3 rounded-lg animate-float "
        alt="image_slider"
        src={temple_img}
        />
      </div>
    </div>
  );
};

export default Home;
