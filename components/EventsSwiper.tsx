"use client";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundGradient } from './ui/background-gradient'
import Head from "next/head";
// Import Swiper's CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Add this to include the effect's CSS
import "./ui/EventsSwiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import necessary modules for effect and autoplay
import { EffectCoverflow, Autoplay } from "swiper";

const images = [
  {
    src: "https://images6.alphacoders.com/304/304604.jpg",
    title: "Fireworks at Night",
    description: "A spectacular view of fireworks over the water.",
  },
  {
    src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48264/article_full%403x.jpg",
    title: "City Skyline",
    description: "A breathtaking city skyline during the night.",
  },
  {
    src: "http://spellshelp.com/upload/medialibrary/e0b/e0b3bd034aaea1136c9de5f97a364d9d.jpg",
    title: "IIT Chennai",
    description: "An iconic view of IIT Chennai campus.",
  },
  {
    src: "https://www.theaureview.com/wp-content/uploads/2020/02/Stranger-Things-is-Coming-to-HHN-2018-1-2048x1173.jpg",
    title: "College Fest",
    description: "A lively college fest atmosphere.",
  },
  {
    src: "https://images.ctfassets.net/6pezt69ih962/1DyAhWIAnmyzgNjMR8sGdu/8c67663590d07cf31beeee934ed1a9b6/Ticketing_1920x1200.jpg",
    title: "Motorfest",
    description: "The excitement of Motorfest with high-energy performances.",
  },
  {
    src: "https://wallup.net/wp-content/uploads/2018/09/26/685291-fantasy-mage-wizard-sorcerer-art-artwork-magic-magician.jpg",
    title: "Sunset View",
    description: "A serene sunset view over the horizon.",
  },
  {
    src: "https://multiplayer.net-cdn.it/thumbs/images/2022/03/18/hogwarts-legacy-artwork-_33_jpg_1600x900_crop_q85.jpg",
    title: "Beach Party",
    description: "A fun-filled beach party at night.",
  },
  {
    src: "https://wallpaperaccess.com/full/1430394.jpg",
    title: "Mountain Adventure",
    description: "An adventure trip through beautiful mountain landscapes.",
  },
];

const SwiperComponent = () => {
  const [count, setCount] = useState(1);
  const [delay, setDelay] = useState(500);
  const swiperRef = useRef(null);

  // Triggering custom styles on active slide change
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on('slideChange', () => {
      // Remove scale from all slides
      const slides = document.querySelectorAll('.swiper-slide img');
      slides.forEach(slide => {
        slide.style.transform = 'scale(1)';
      });
  
      // Scale the active slide
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      const activeImage = activeSlide.querySelector('img');
      if (activeImage) {
        activeImage.style.transform = 'scale(1.7)';
      }
  
      // Get all text overlays and apply fade-in/fade-out based on active index
      const textOverlays = document.querySelectorAll('.text-overlay');
      textOverlays.forEach((overlay, index) => {
        if (index === swiperInstance.activeIndex) {
          overlay.classList.add('fade-in');  // Add fade-in class to active slide
          overlay.classList.remove('fade-out');  // Remove fade-out class from active slide
        } else {
          overlay.classList.add('fade-out');  // Add fade-out class to inactive slides
          overlay.classList.remove('fade-in');  // Remove fade-in class from inactive slides
        }
      });
    });

    if (count < 4) {
      setTimeout(() => setCount(count + 1), delay);
    } else if (count === 4) {
      setDelay(3000);
      setCount(count + 1);
    }
  }, [count, delay]);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
      </Head>

      <Swiper
        ref={swiperRef} // Reference to the Swiper component
        modules={[EffectCoverflow, Autoplay]} // Ensure the Autoplay module is added here
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay, // 3 seconds
          disableOnInteraction: false, // Keeps autoplay active even after interaction
          pauseOnMouseEnter: true, // Pause autoplay when mouse enters the swiper
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            
            <div className="slide-content">
            <BackgroundGradient
                  className="relative rounded-[22px] bg-gold dark:bg-zinc-900"
                >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              /></BackgroundGradient>
              <div
                className={`text-overlay ${index === swiperRef.current?.swiper.activeIndex ? 'fade-in' : 'fade-out'}`}
              >
                <h2 style={{color:"gold"}}>{image.title}</h2>
                <p style={{color:"gold"}}>{image.description}</p>
              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
