import { book, laptop, teacher } from "@/public/constant";
import React from "react";

const Features = () => {
  return (
    <div id="features">
      <div>Features</div>
      <div className="lg:flex bg-red-500  p-8 py-  lg:gap-64 text-xl text-white">
        <div className="flex flex-col items-center  ">
          <img className="h-40 w-40" src={book} />
          <p className="lg:text-2xl p-2  ">Get Completion Certificate</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-40 w-40" src={teacher} />
          <p className="lg:text-2xl  p-2">Professional Mentors</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-40 w-40" src={laptop} />
          <p className="lg:text-2xl p-2">Offline And Online Classes</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
