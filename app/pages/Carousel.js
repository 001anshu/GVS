"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { logo, monk_img, students, temple_img } from '@/public/constant'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true});

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    const autoplayInterval = setInterval(autoplay, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoplayInterval); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-full w-full">
        <div className="embla__slide flex justify-center">
          <img src={temple_img} alt="Temple"/>
        </div>
        <div className="embla__slide flex justify-center">
          <img src={monk_img} alt="Monk"/>
        </div>
        <div className="embla__slide flex justify-center">
          <img src={students} alt="Students"/>
        </div>
      </div>
    </div>
  );
}
