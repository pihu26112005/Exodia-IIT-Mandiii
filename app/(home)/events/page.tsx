"use client";
import SwiperComponent from '@/components/Event_EventsSwiper'
import React from 'react'
import { Vortex } from "@/components/ui/vortex"
import Card from '@/components/Event_Card';
import AllCards from '@/components/Event_AllCards';

const page = () => {
  const imageUrl = "https://www.ministryofvillas.com/wp-content/uploads/2017/12/phuket-kamala-villa-lomchoy-sunset.jpg";
  return (
    <div className="m-0 p-0 w-full h-screen">
    <Vortex
      backgroundColor="#ffffff00"
      rangeY={800}
      particleCount={500}
      baseHue={55}
      className="px-2 md:px-10 py-0 w-full h-full flex flex-col items-center justify-start"
    >
      
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center" style={{color:"gold", fontFamily:"B1"}}>
        It's Exodia 2024!
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center" style={{color:"gold"}}>
        Join us at Exodia 2024, IIT Mandi's cultural festival, Explore a diverse lineup of thrilling events and performances in the heart of the Himalayas.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      </div>
      <br/><br/><br/><br/>
      <SwiperComponent/>
      <br/>
    </Vortex>
  
    <Vortex
      backgroundColor="#ffffff00"
      rangeY={800}
      particleCount={500}
      baseHue={55}
      className="px-2 md:px-10 py-0 w-full h-full flex flex-col items-center justify-start"
    >
      <div className='text-white text-2xl md:text-6xl  text-start' style={{color:"gold" , fontFamily:"B2"}}>Events</div>
      <AllCards />
    </Vortex>
    <Vortex
      backgroundColor="#ffffff00"
      rangeY={800}
      particleCount={500}
      baseHue={55}
      className="px-2 md:px-10 py-0 w-full h-full flex flex-col items-center justify-start"
    >
    </Vortex>
  </div>
  
  )
}

export default page