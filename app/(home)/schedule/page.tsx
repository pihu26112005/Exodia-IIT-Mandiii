"use client"

import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import ScrollTimeline from './Timeline';
import './page.css'
import hamburger from "../../../public/assets/sch_assets/hamburdger.png"
import cross from "../../../public/assets/sch_assets/cross.png"

import try1 from "../../../public/assets/sch_assets/bg_mid_light.png"
import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems, ScheduleEventList } from '@/lib/utils';
import Footer from '@/components/Footer';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import scroll from "../../../public/assets/sch_assets/scroll.jpg"
import { aboutNPfont } from '@/lib/font.utils';

// import video from "../../../public/assets/sch_assets/"

interface TimelineEvent { // DEPLOYMENT FIX
  time: string
  title: string
  description: string
  venue: string
}


interface EventDays { // DEPLOYMENT FIX
  day1: TimelineEvent[]
  day2: TimelineEvent[]
  day3: TimelineEvent[]
}

const Page: React.FC = () => {
  const [active, isActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState<keyof EventDays>('day1'); // DEPLOYMENT FIX



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    isActive(!active)
  }

  const handleDayClick = (day: keyof EventDays) => { // DEPLOYMENT FIX
    setSelectedDay(day); // Update selected day
  };



  return (
   <>
    <div className="relative w-full h-screen bg-black text-yellow-400 overflow-x-hidden ">
    <Navbar />
      <FloatingNav namex="P" className="max-md:hidden" />

      {/* Header Section */}
      {/* <div className="z-20 fixed w-full bg-black shadow-lg  flex items-center justify-between px-20 py-6 ">
        <h1 className="text-5xl font-bold font-harryPotter">EXODIA</h1>
        {active ? <Image width={28} onClick={handleClick} src={cross} alt='cross icon' />
          : <Image width={28} onClick={handleClick} className=' transition-all ' src={hamburger} alt='hameburger menu' />}



      </div> */}

      {/* Video Section */}
      {/* <div className="relative w-full h-full  z-0">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/assets/sch_assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* section 2 */}
      <div className='h-screen bg-black'>

      <Image src={scroll} alt='harry image' className='absolute object-fill w-full mx-auto h-full   max-sm:object-center' />
        <div className={` ${aboutNPfont.className} relative text-center font-harryPotter pt-[13rem] max-sm:pt-[12rem] max-lg:pt-[12rem] text-6xl text-black font-semibold max-sm:text-black max-lg:text-5xl max-sm:text-3xl bgProp`}>
          TIMELINE
        </div>
        <div className='relative font-harryPotter font-bold flex justify-center mt-10 gap-40 text-4xl max-lg:text-3xl text-black max-lg:gap-20 max-sm:gap-10 max-sm:text-xl'>
          <div
            onClick={() => handleDayClick('day1')}
            className={selectedDay === 'day1' ? 'cursor-pointer text-yellow-400' : 'cursor-pointer'}
          >
            Day 1
          </div>
          <div
            onClick={() => handleDayClick('day2')}
            className={selectedDay === 'day2' ? 'cursor-pointer text-yellow-400' : 'cursor-pointer'}
          >
            Day 2
          </div>
          <div
            onClick={() => handleDayClick('day3')}
            className={selectedDay === 'day3' ? 'cursor-pointer text-yellow-400' : 'cursor-pointer'}
          >
            Day 3
          </div>
        </div>
        {/* @ts-ignore */}
        <div className='relative font-harryPotter  text-black flex justify-center '><ScrollTimeline selectedDay={selectedDay} /> </div>
      </div>

      {/* {showPopup && !active ? (
        <div className="absolute top-1/2 left-[42%] z-10  text-center max-sm:left-[38%]">
          <div className='flex gap-5 '>

            <h2 className="text-8xl  font-harryPotter flex font-bold text-yellow-400 overflow-hidden whitespace-nowrap typing-demo">
              Schedule
            </h2>

          </div>
          <p className="w-full text-lg underline font-harryPotter font-thin text-gray-300 mt-2 overflow-hidden whitespace-nowrap hover:text-xl  max-sm:sm ">
            Scroll to Checkout
          </p>
        </div>
      ) : null} */}

      {/* {active ? <div className='fixed  bg-black  h-screen top-0 opacity-90 left-0 right-0 z-10  '></div> : <div></div>}
      {active ? <div className="fixed cursor-pointer  top-48 left-0 right-0 z-10 flex flex-col items-center space-y-10 max-sm:space-y-4 max-sm:top-28 max-sm:text-xl font-harryPotter  text-3xl text-white">
        <div>HOME</div>
        <div>EVENTS</div>
        <div>GALLERY</div>
        <div className=' hover:border-b-yellow-300 hover:border-b-2'>SCHEDULE</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div> : null} */}

      <div className="max-w-full mx-0 px-0 max-sm:hidden">
        <div className={`p-4 flex justify-center items-center text-[4rem] mt-8 ${aboutNPfont.className}`}>TimeLine of All Events</div>
      <HoverEffect items={ScheduleEventList} />
      </div>

      <Footer />

    </div>

   </>
  );
}

export default Page


