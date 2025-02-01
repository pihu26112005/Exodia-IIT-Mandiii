"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    image: "/assets/HomeEvent/1.jpg",
    name: "ProNight",
    description: "John is a wonderful person with a lot of experience.",
  },
  {
    image: "/assets/HomeEvent/2.jpg",
    name: "Competition",
    description: "Jane brings valuable insights to any project she works on.",
  },
  {
    image: "/assets/HomeEvent/3.jpg",
    name: "Drama",
    description: "Jane brings valuable insights to any project she works on.",
  },
  {
    image: "/assets/HomeEvent/4.jpg",
    name: "Dance",
    description: "John is a wonderful person with a lot of experience.",
  },
  {
    image: "/assets/HomeEvent/5.jpg",
    name: "TechTalk",
    description: "Jane brings valuable insights to any project she works on.",
  },
];

export default function HomeEventCrousalPihu2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Center Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={images[currentIndex].image}
          alt={images[currentIndex].name}
          width={800}
          height={500}
          className="rounded-lg shadow-2xl transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 p-3 bg-gray-800 text-white rounded-full z-30 hover:bg-gray-700 transition-colors"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 p-3 bg-gray-800 text-white rounded-full z-30 hover:bg-gray-700 transition-colors"
      >
        ❯
      </button>
    </div>
  );
}
