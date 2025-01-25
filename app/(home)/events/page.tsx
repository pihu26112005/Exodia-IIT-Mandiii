"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import SwiperComponent from "@/components/Event_EventsSwiper";  // DEPLOYMENT FIX
import { Vortex } from "@/components/ui/vortex";
import Card from "@/components/Event_Card";
import AllCards from "@/components/Event_AllCards";
import ArrowButton from "@/components/Button";

import Link from "next/link";
import { HomeEvents } from "@/components/HomeEvents";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/utils";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


const words = [
  {
    text: "Explore",
  },
  {
    text: "all",
  },
  {
    text: "events",
  },
  {
    text: "of",
  },
  {
    text: "EXODIA.",
    className: "text-yellow-300 dark:text-yellow-300",
  },
];

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: { duration: 0.5 },
  },
};

const Page = () => {
  const imageUrl =
    "https://www.ministryofvillas.com/wp-content/uploads/2017/12/phuket-kamala-villa-lomchoy-sunset.jpg";

  // Reset scroll position to left when the page loads
  useEffect(() => {
    // window.scrollTo(0, 0); // DEPLOYMENT FIX
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (

    <>
      <div className="m-0 p-0 overflow-x-hidden">
        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />

        <div className=" m-0 p-0 w-full flex flex-col items-center justify-center flex-grow">
          <div className="z-[900]  h-[100vh] w-full flex flex-col items-center justify-center">
            <div className="mt-[2rem] max-sm:mt-[4rem] text-gold text-[15rem] max-2xl:text-[12rem] max-xl:text-[11rem] max-lg:text-[10rem] max-md:text-[9rem] max-sm:text-[8rem] ">
              Events
            </div>
            <div className="mt-[7rem] max-sm:mt-[1rem] transform scale-100 md:scale-80 max-sm:scale-60">
              {/* <SwiperComponent /> */}  {/* DEPLOYMENT FIX */}
            </div>
          </div>

          <div className="w-full h-[20vh] flex justify-center items-end">
            <TypewriterEffect words={words} />
          </div>

          <div className="w-full">
            {/* <Image src="/assets/event_assets/evbg.png" alt="bg" width={100} height={100} className='absolute object-fill w-full mx-auto h-full' /> */}
            <div className="text-white text-4xl md:text-6xl text-center mt-[5rem] mb-[5rem] max-sm:mb-[2rem] max-sm:mt-[2rem] z-10"
              style={{ color: "gold", fontFamily: "B2" }}>
              Events
            </div>
            <div>
              <AllCards />
            </div>
          </div>
          <div className="w-full h-[50vh] flex justify-center items-center">
            <TypewriterEffect words={words} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
