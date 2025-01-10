import React from 'react'
import { Card, Carousel } from './ui/apple-cards-carousel';
import { AboutPrevGuestData } from '@/lib/utils';




const About_PrevGuest = () => {
    const cards = AboutPrevGuestData.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
      ));
     
      return (
        <div className="w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-[5rem] text-yellow-300">
            Previous Guests
          </h2>
          <Carousel items={cards} />
        </div>
      );
}

export default About_PrevGuest