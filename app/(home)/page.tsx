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
    name: "Gallery",
    link: "#gallery",
  },
];

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
          <ContainerScroll titleComponent={<></>}>
            <BackgroundGradient
              className="relative rounded-[22px] bg-white dark:bg-zinc-900 w-[80vw] h-[80vh]"
              backgroundImage="/assets/background6.webp"
            >
              <div className="background-about rounded-[22px] h-full">
                <div className="glasomorphic-about p-32 rounded-[22px]">
                  <p className="harry-text-Medium">About Exodia</p>
                  <p className="harry-text-small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus et minus impedit facilis. Illo neque libero odio
                    eveniet optio laborum voluptate culpa temporibus architecto
                    autem cupiditate eos, facilis, earum natus. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Odio nulla
                    animi, ullam temporibus voluptatum eos doloremque,
                    laboriosam exercitationem molestias similique velit corrupti
                    modi alias dolore,
                  </p>
                </div>
              </div>
            </BackgroundGradient>
          </ContainerScroll>
        </div>

        <div id="gallery" className=" h-[100vh] flex justify-center items-center gap-[20px] p-0 mx-36">
          {/* <div className="container"> */}
            <div className="gallery">
              <div
                className="box box1 row2MEphailega"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww)",
                }}
              >
                tree
              </div>
              <div
                className="box box2 col2MEphailega"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D)",
                }}
              >
                mountain
              </div>
              <div
                className="box box3"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww)",
                }}
              >
                forest
              </div>
              <div
                className="box box4 row2MEphailega"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww)",
                }}
              >
                sunset
              </div>
              <div
                className="box box5 col2MEphailega"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D)",
                }}
              >
                nature
              </div>
              <div
                className="box box6"
                style={{
                  backgroundImage:
                    "url(https://plus.unsplash.com/premium_photo-1664547606956-22749d0e0d77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww)",
                }}
              >
                river
              </div>
              <div
                className="box box7 col2MEphailega"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D)",
                }}
              >
                scenery
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;