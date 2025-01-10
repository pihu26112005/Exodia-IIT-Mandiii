import React, { JSX, useEffect, useRef, useState } from 'react';
import './ui/Home_EventsSlide.css';
import Image from 'next/image';
import Link from 'next/link';

function Home_EventsSlide(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for the scroll container
  const positionRef = useRef(0); // Ref to store the current scroll position
  const speedRef = useRef(3); // Ref to store the current speed
  const [startAnimation, setStartAnimation] = useState<boolean>(false); // State to track animation start

  useEffect(() => {
    // const scrollContainer = scrollRef.current;
    // if (!scrollContainer) return;

    // const initializePosition = () => {
    //   const containerWidth = scrollContainer.offsetWidth;
    //   const contentWidth = scrollContainer.scrollWidth / 2;
    //   positionRef.current = -(contentWidth / 2 - containerWidth / 2); // Center the first image
    //   scrollContainer.style.transform = `translateX(${positionRef.current}px)`;
    // };

    // const handleScroll = () => {
    //   const scrollY = window.scrollY || document.documentElement.scrollTop;
    //   if (scrollY > 150) {
    //     setStartAnimation(true);
    //   }
    // };

    // const scroll = () => {
    //   if (startAnimation) {
    //     positionRef.current -= speedRef.current; // Use speedRef for dynamic control
    //     scrollContainer.style.transform = `translateX(${positionRef.current}px)`;

    //     const scrollWidth = scrollContainer.scrollWidth / 2;

    //     if (Math.abs(positionRef.current) >= scrollWidth) {
    //       positionRef.current = 0;
    //     }
    //   }

    //   requestAnimationFrame(scroll);
    // };

    // initializePosition();

    // window.addEventListener('scroll', handleScroll);

    // scroll();

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // }; //DEPLOYMENT FIX

    if(typeof window != undefined)
    {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
  
      const initializePosition = () => {
        const containerWidth = scrollContainer.offsetWidth;
        const contentWidth = scrollContainer.scrollWidth / 2;
        positionRef.current = -(contentWidth / 2 - containerWidth / 2); // Center the first image
        scrollContainer.style.transform = `translateX(${positionRef.current}px)`;
      };
  
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 150) {
          setStartAnimation(true);
        }
      };
  
      const scroll = () => {
        if (startAnimation) {
          positionRef.current -= speedRef.current; // Use speedRef for dynamic control
          scrollContainer.style.transform = `translateX(${positionRef.current}px)`;
  
          const scrollWidth = scrollContainer.scrollWidth / 2;
  
          if (Math.abs(positionRef.current) >= scrollWidth) {
            positionRef.current = 0;
          }
        }
  
        requestAnimationFrame(scroll);
      };
  
      initializePosition();
  
      window.addEventListener('scroll', handleScroll);
  
      scroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [startAnimation]);

  const handleMouseEnter = () => {
    speedRef.current = 0; // Stop animation
  };

  const handleMouseLeave = () => {
    speedRef.current = 3; // Resume animation
  };

  const images = [
    { src: '/assets/background/U4.png', alt: 'image1', title: 'Dance Competition', description: 'A lively dance competition showcasing various dance styles including contemporary, hip-hop, and classical.' },
    { src: '/assets/background/U1.png', alt: 'image2', title: 'Music Performance', description: 'A mesmerizing performance by local bands and solo artists, playing a mix of genres from rock to classical.' },
    { src: '/assets/background/U4.png', alt: 'image5', title: 'Drama Skit', description: 'A short theatrical performance depicting a dramatic story, full of emotions and plot twists.' },
    { src: '/assets/background/U6.png', alt: 'image4', title: 'Street Dance Battle', description: 'An exciting street dance battle where dancers compete with each other to show off their best moves.' },
    { src: '/assets/background/U4.png', alt: 'image5', title: 'Gaming Tournament', description: 'A competitive gaming tournament with top players battling in games like FIFA, Counter-Strike, and PUBG.' },
    { src: '/assets/background/U5.png', alt: 'image3', title: 'Fashion Show', description: 'A fashion show featuring the latest trends and designs from aspiring student designers and fashion enthusiasts.' },
    { src: '/assets/background/Head.png', alt: 'image4', title: 'DJ Night', description: 'An electrifying DJ night where top DJs spin the best tracks to keep the crowd dancing all night long.' },
    { src: '/assets/background/U7.png', alt: 'image5', title: 'Stand-up Comedy', description: 'A hilarious stand-up comedy show by popular comedians, making the audience laugh with relatable jokes and witty humor.' },
    { src: '/assets/background/U4.png', alt: 'image1', title: 'Poetry Slam', description: 'A poetry competition where poets perform their original works, competing for the title of best poet of the fest.' },
    { src: '/assets/background/U1.png', alt: 'image2', title: 'Food Festival', description: 'A vibrant food festival offering a variety of cuisines from street food to gourmet delicacies, all prepared by local chefs.' },
    { src: '/assets/background/U4.png', alt: 'image5', title: 'Art Exhibition', description: 'A stunning art exhibition showcasing the creative works of students, including paintings, sculptures, and digital art.' },
    { src: '/assets/background/U6.png', alt: 'image4', title: 'Photography Contest', description: 'A photography contest highlighting the best snapshots captured by students, featuring various themes and styles.' },
    { src: '/assets/background/U4.png', alt: 'image5', title: 'Treasure Hunt', description: 'An adventurous treasure hunt where participants solve clues and riddles to find hidden treasures around the campus.' },
    { src: '/assets/background/U5.png', alt: 'image3', title: 'Mocktail Masterclass', description: 'A mocktail-making workshop where participants learn to prepare creative non-alcoholic drinks and compete for the best mix.' },
    { src: '/assets/background/Head.png', alt: 'image4', title: 'Flash Mob', description: 'A surprise flash mob performance by students in the middle of the campus, gathering everyone for a fun and spontaneous dance.' },
    { src: '/assets/background/U7.png', alt: 'image5', title: 'Zumba Fitness Session', description: 'A high-energy Zumba fitness session to get everyone moving and grooving to the rhythm of the music.' },
    { src: '/assets/background/U4.png', alt: 'image1', title: 'Talent Show', description: 'A talent show where students showcase their unique skills, from singing and dancing to magic tricks and stand-up comedy.' },
    { src: '/assets/background/U1.png', alt: 'image2', title: 'Open Mic Night', description: 'An open mic event where students can perform anything from music, comedy, poetry, to motivational speaking.' }
  ];

  return (
    <div
      className="scroll-container"
      onMouseEnter={handleMouseEnter} // Stop animation on hover
      onMouseLeave={handleMouseLeave} // Resume animation when hover ends
    >
      <div className="scroll-content" ref={scrollRef}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <Image src={image.src} alt={image.alt} width={300} height={300} />
            <div className="image-info">
              <h3 className="image-title">{image.title}</h3>
              <p className="image-description">{image.description}</p>
              <Link href="/events">
              <button className='abc'>View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home_EventsSlide;
