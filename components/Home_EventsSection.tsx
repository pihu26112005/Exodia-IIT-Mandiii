"use client";

import React from "react";
import "./ui/Home_Events.css";
import Home_EventsSlide from "./Home_EventsSlide";
import { eventcards } from "@/lib/utils";
import { CarouselComponentPihu } from "./Event_CarouselPihu";
import ScrollingTestimonials from "./animata/container/scrolling-testimonials";

const Home_EventsSection = () => {
  const testimonialsData = [
      {
        image: 'https://images6.alphacoders.com/304/304604.jpg',
        name: 'ProNight',
        description: 'John is a wonderful person with a lot of experience.',
      },
      {
        image: 'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48264/article_full%403x.jpg',
        name: 'Competition',
        description: 'Jane brings valuable insights to any project she works on.',
      },
      {
        image: 'http://spellshelp.com/upload/medialibrary/e0b/e0b3bd034aaea1136c9de5f97a364d9d.jpg',
        name: 'Music',
        description: 'John is a wonderful person with a lot of experience.',
      },
      {
        image: 'https://images.ctfassets.net/6pezt69ih962/1DyAhWIAnmyzgNjMR8sGdu/8c67663590d07cf31beeee934ed1a9b6/Ticketing_1920x1200.jpg',
        name: 'Drama',
        description: 'Jane brings valuable insights to any project she works on.',
      },
      {
        image: 'https://wallup.net/wp-content/uploads/2018/09/26/685291-fantasy-mage-wizard-sorcerer-art-artwork-magic-magician.jpg',
        name: 'Dance',
        description: 'John is a wonderful person with a lot of experience.',
      },
      {
        image: 'https://wallpaperaccess.com/full/1430394.jpg',
        name: 'TechTalk',
        description: 'Jane brings valuable insights to any project she works on.',
      },
    
  ];
  return (
    <>
    <div className="Mkd">
      <div className="gallery-container" style={{scale:"0.8"}}>
        <div className="box34">
          <div className="center-text" style={{
            backgroundImage: "linear-gradient(to right, gold, gold",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "H3",
          }}>
            Events
          </div>
          <div className="animate">
            {eventcards.map((card, index) => (
              <span
                key={index}
                style={{
                  "--i": index + 6,
                } as React.CSSProperties}
              >
                <img className="border border-gold rounded-xl" src={card.imageUrl} alt={card.title} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ transform: 'rotate(5deg)' ,marginTop:"-100px"}}>
      <ScrollingTestimonials data={testimonialsData} />
      </div>
      {/* <Home_EventsSlide /> */}
      {/* <hr
        style={{
          height: "2px",
          backgroundColor: "gold",
          border: "2px white",
          marginTop:"-10px"
        }}/> */}
    </div>
    </>
  );
};

export default Home_EventsSection;


