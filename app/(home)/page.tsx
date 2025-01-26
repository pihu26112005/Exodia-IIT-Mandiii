"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React from "react";
import { FooterSocialMediaDock } from "@/components/Home_FooterSocialMediaDock";
import Home_AboutSection from "@/components/Home_AboutSection";
import Home_GallerySection from "@/components/Home_GallerySection";
import { navItems, Sliderslides } from "@/lib/utils";
import Home_EventsSection from "@/components/Home_EventsSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home_JoinSection } from "@/components/Home_JoinSection";
import Navbar from "@/components/Navbar";
import ArrowButton from "@/components/Button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HomeEvents } from "@/components/HomeEvents";
import Home_MainSection from "@/components/Home_MainSection";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";
import CustomCursor from "@/components/CustomCursor";
import About_VideoSection from "@/components/About_VideoSection";
import { Anouncement_DialogSection } from "@/components/Anouncement_DialogSection";



const HomePage = () => {
  return (
    <>

      <Anouncement_DialogSection open={true} close={() => {}} />
      <div className="m-0 p-0 overflow-x-hidden">

        {/* <CustomCursor />  */}

        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <Home_MainSection />

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div
          id="about"
          className="h-[100vh]  flex justify-center items-center max-sm:hidden"
        >
          <Home_AboutSection />
        </div>

        <div
          id="about"
          className="m-0 p-0 w-full sm:hidden"
        >
          <div className='h-[100vh] bg-black flex justify-center items-center sm:hidden'>
            <div className='h-[80%] w-[90%] bg-white border-2 border-yellow-300 rounded-2xl'
              style={{ backgroundImage: 'url(/assets/anouncement/bgxgx.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}

        <HomeEvents />

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <About_VideoSection />

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div id="gallery" className=" h-[100vh] max-sm:h-[60vh] flex justify-center items-center flex-col gap-[6rem] max-sm:gap-[3.5rem] relative z-[900]">
          {/* <Image src="/assets/schedule_assets/bg_mid_light.png" alt="bg" width={100} height={100} className='absolute object-cover- w-full mx-auto h-[150%]' /> */}
          <p className="text-gold text-[5rem] ">Gallery</p>
          <div className="flex  justify-center items-center w-full h-[45%] ">
            {/* <Home_GallerySection /> */}
            <CarouselComponent />
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div className="flex justify-center items-center z-[900] cursor-pointer">
         <Link href={'/gallery'}>
         <div className="p-4 border-2 rounded-3xl bg-yellow-300 text-black text-[1rem] hover:bg-yellow-500 hover:text-white"
                style={{
                animation: "shine 2s infinite linear" ,
                boxShadow: "0 0 10px 2px white",
              }}>
            Explore More
          </div>
         </Link>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div id="contact" className="h-[100vh] max-sm:h-[60vh] flex justify-center items-center ">
          <Home_JoinSection />
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      </div>


      <Footer />

    </>
  );
};

export default HomePage;