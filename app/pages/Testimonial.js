"use client";
import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  const images = [
    {
      description:
        "edic society, rooted in ancient India, is often referred to as one of the earliest and most formative periods in Indian civilization, roughly spanning from 1500 BCE to 500 BCE. It is named after the Vedas, which are the oldest sacred texts of Hinduism, composed during this era. This society's structure, beliefs, and daily life were profoundly influenced by these texts",
      name: "test2",
      src: "/teste4.jpg",
      source:"test"
    },
    {
      description:
        "Vedas: The Vedic texts, consisting of the Rigveda, Samaveda, Yajurveda, and Atharvaveda, were central to the spiritual and ritualistic life. These texts included hymns, prayers, rituals, and philosophical discourse",
      name: "test",
      src: "/teste1.jpg",
      source:"test"
    },
    {
      description:
        "Women had a relatively respected position in early Vedic society, participating in religious rituals and having access to education. However, their status declined in later Vedic periods",
      name: "test",
      src: "/teste2.jpg",
      source:"test"
    },
    {
      description:
        "The early Vedic period was characterized by semi-nomadic tribes led by chiefs (Rajan). Over time, these tribes settled into more stable agricultural communities, forming small kingdoms and republics",
      name: "test2",
      src: "/teste3.jpg",
      source:"test"
    },
  ];
  return (
    <div id="testimonial  " className="">
      <div className="flex justify-center items-center text-2xl m-4 font-semibold">
        REVIEWS
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/3 m-4 md:m-10 p-4  ">
          <TestimonialCarousel images={images} />
        </div>
        <div className="md:w-1/3 hidden md:flex  m-4 md:m-10 p-4  ">
          <TestimonialCarousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
