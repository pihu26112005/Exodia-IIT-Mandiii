"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import React from "react";
import { FooterSocialMediaDock } from "@/components/Home_FooterSocialMediaDock";
import Home_AboutSection from "@/components/Home_AboutSection";
import Home_GallerySection from "@/components/Home_GallerySection";
import { navItems } from "@/lib/utils";



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

        <div id="gallery" className=" h-[100vh] flex justify-center items-center gap-[20px] p-0 mx-36">
          <Home_GallerySection />
        </div>

      </div>

      <footer className="bg-black text-white py-20 flex flex-col items-center">


        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 ">

          <div>
            <p className="harry-text-small">EXODIA '25</p>
          </div>

          {/* Participate Section */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Participate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Events Portal</a></li>
              <li><a href="#" className="hover:text-pink-500">CA Portal</a></li>
              <li><a href="#" className="hover:text-pink-500">Join The Community</a></li>
            </ul>
          </div>

          {/* Explore More Section */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Explore More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Star Attractions</a></li>
              <li><a href="#" className="hover:text-pink-500">Hall Of Fame</a></li>
              <li><a href="#" className="hover:text-pink-500">Brochure</a></li>
            </ul>
          </div>

          {/* Reach Out Section */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Reach Out To Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Have Any Queries?</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-500">Associate With Us</a></li>
            </ul>
          </div>

        </div>

        <FooterSocialMediaDock />


        {/* Social Icons and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center px-6 lg:px-12">
          {/* Social Media Links */}

          {/* Copyright */}
          <p className="text-gray-400 mt-4 md:mt-0 text-sm">
            © Exodia '25, IIT Mandi &nbsp; | &nbsp; Made with <span className="text-pink-500">♥</span> by Web Dev Team
          </p>
        </div>
      </footer>

    </>
  );
};

export default HomePage;