'use client';

import { useState } from 'react';
import Image from 'next/image';
import { aboutNPfont } from '@/lib/font.utils';

interface Slide {
    image: string;
    name: string;
    description: string;
}

export default function HomeEventCrousalPihu3() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images: Slide[] = [
        {
            image: "/assets/HomeEvent/1.jpg",
            name: "ProNight",
            description: "John is a wonderful person with a lot of experience.",
        },
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
        // ... paste all your images array entries here
        // (I've omitted them for brevity)
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-[70%] max-sm:w-[100%] h-screen max-sm:h-[100%] overflow-hidden flex items-center justify-center max-sm:hidden">
            {/* Slides Container */}
            <div className="relative w-[80%] max-sm:w-full h-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-full absolute inset-0 flex items-center justify-center "
                        style={{ left: `${index * 100}%` }}
                    >
                        <div className="relative max-w-[80%] max-h-[80%] max-sm:h-full aspect-video">
                            <Image
                                src={slide.image}
                                alt={slide.name}
                                height={500}
                                width={800}
                                className="object-cover  shadow-xl border-2 border-gold rounded-3xl "
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h2 className={`text-white text-[3rem] max-sm:text-[1rem] ${aboutNPfont.className}`}>{slide.name}</h2>
                                <p className={`text-white text-[1rem] ${aboutNPfont.className}`}>{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 px-3 py-2 bg-black/50 border border-white text-white  rounded-full hover:bg-black/70 transition-colors"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 px-3 py-2 bg-black/50 border border-white text-white  rounded-full hover:bg-black/70 transition-colors"
            >
                &gt;
            </button>
        </div>
    );
}