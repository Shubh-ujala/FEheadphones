"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goLeft = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center gap-4">

      <button
        onClick={goLeft}
        className="bg-white/80 p-3 rounded-full shadow hover:scale-105 transition cursor-pointer"
      >
        <FaChevronLeft size={22} />
      </button>

      <div className="relative aspect-square w-[350px] sm:w-[400px] overflow-hidden rounded-3xl flex items-center justify-center">
        <Image
          src={images[index]}
          alt="product image"
          fill
          className="object-contain duration-500"
        />
      </div>

      <button
        onClick={goRight}
        className="bg-white/80 p-3 rounded-full shadow hover:scale-105 transition cursor-pointer"
      >
        <FaChevronRight size={22} />
      </button>

    </div>
  );
}
