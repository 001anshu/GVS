import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { logo, monk_img, students, temple_img } from "@/public/constant";

export default function TestimonialCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true});

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    // const autoplayInterval = setInterval(autoplay, 5000); // Change slide every 3 seconds

    return () => clearInterval(); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-full w-full ">
        {images?.map((i) => (

          <div className="embla__slide flex flex-col justify-center" key={i.name}>
            
            
            <img className="md:h-3/4" src={i.src} alt=".." />
            
            <div className="bg-yellow-50 text-xl p-4 m-2" >{i.description}</div>
            <div className="bg-red-50 text-xl p-4 m-2">Source - {i.source}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
