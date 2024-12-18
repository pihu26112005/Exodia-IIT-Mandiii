"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import React from "react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Events",
    link: "#events",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="m-0 p-0 overflow-x-hidden">


        <FloatingNav navItems={navItems} namex="P"/>


        <div className="flex items-center justify-center relative h-[100vh] w-full">
          {/* <div className="background"></div> */}
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
          <ContainerScroll
            titleComponent={
              <>
              </>
            }
          >
            <BackgroundGradient
              className="relative rounded-[22px] bg-white dark:bg-zinc-900 w-[80vw] h-[80vh]"
              backgroundImage="/assets/background6.webp"
            >
              <div className="background-about rounded-[22px] h-full">
                <div className="glasomorphic-about p-32 rounded-[22px] ">  
                  <p className="harry-text-Medium">About Exodia</p>
                  <p className="harry-text-small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus et minus impedit facilis. Illo neque libero odio
                    eveniet optio laborum voluptate culpa temporibus architecto
                    autem cupiditate eos, facilis, earum natus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Odio nulla animi, ullam
                    temporibus voluptatum eos doloremque, laboriosam exercitationem
                    molestias similique velit corrupti modi alias dolore,
                  </p>
                </div>
              </div>
            </BackgroundGradient>
          </ContainerScroll>


        </div>

        <div id="events" className="h-[110vh] pt-44 flex justify-center items-center">
wddwdwb
        </div>
        
      </div>
    </>
  );
};

export default HomePage;