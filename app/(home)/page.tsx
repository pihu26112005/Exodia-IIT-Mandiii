"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React from "react";
import { FooterSocialMediaDock } from "@/components/Home_FooterSocialMediaDock";
import Home_AboutSection from "@/components/Home_AboutSection";
import Home_GallerySection from "@/components/Home_GallerySection";
import { navItems } from "@/lib/utils";
import Home_EventsSection from "@/components/Home_EventsSection";
import Footer from "@/components/Footer";



const HomePage = () => {
  return (
    <>
      <div className="m-0 p-0 overflow-x-hidden">

        <FloatingNav navItems={navItems} namex="P" />

        <div className="flex items-center justify-center relative h-[100vh] w-full">
          <div className="relative flex h-screen w-full flex-col items-center justify-center gap-0">
            <p className="harry-text-small absolute top-[16rem] left-[26rem]">
              Welcome to
            </p>
            <p className="harry-text">EXODIA '25</p>
            <p className="harry-text-small absolute right-[8rem] bottom-[21rem]">
              - Biggest Cultural Fest in the Himalayas
            </p>
            <p className="harry-text-small">By IIT MANDI</p>
          </div>
        </div>

        <div
          id="about"
          className="h-[100vh] pt-44 flex justify-center items-center"
        >
          <Home_AboutSection />
        </div>


        <div id="events" className="h-[150vh] flex flex-col justify-center items-center pt-[100px]">
        <p className="harry-text-Medium">Explore Events</p>
          <Home_EventsSection />
        </div>


        <div id="gallery" className=" h-[100vh] flex justify-center items-center gap-[20px] p-0 mx-36">
          <Home_GallerySection />
        </div>

      </div>

      <Footer />

    </>
  );
};

export default HomePage;