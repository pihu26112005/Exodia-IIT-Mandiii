"use client";

import FAQ from '@/components/Announcement_qnaSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { announcementFaq, faqquestions, navItems } from '@/lib/utils'
import React from 'react'





const page = () => {
  return (
    <>
      <Navbar />

      <FloatingNav navItems={navItems} namex="P" className="max-md:hidden" />

      <div className='m-0 p-0 w-full'>
        <div className='h-[100vh] bg-black flex justify-center items-center'>
          <div className='h-[80%] w-[90%] bg-white border-2 border-yellow-300 rounded-2xl'
            style={{ backgroundImage: 'url(/assets/anouncement/bgxgx.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

          </div>
        </div>
        <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={announcementFaq}
            direction="right"
            speed="slow"
            className='py-[5rem] my-10'
          />
        </div>
        <div className="bg-black">
          <div className="container mx-auto p-6 min-h-screen flex flex-col">
            <FAQ data={faqquestions} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page