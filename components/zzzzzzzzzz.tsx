import React from "react";
import Image from "next/image";

const imageBaseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650";

const ParallaxHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[450px] bg-[#d9edfd] overflow-hidden">
      {[6, 5, 4, 3, 2, 1].map((index) => (
        <div
          key={index}
          className={`absolute bottom-0 left-0 w-full h-full bg-repeat-x animate-parallax-bg`}
          style={{ 
            backgroundImage: `url('${imageBaseUrl}/${index}.png')`,
            animationDuration: `${index * 10}s`
          }}
        />
      ))}
      <div 
        className="absolute bottom-[100px] left-0 w-full h-full bg-no-repeat bg-[auto_75px] animate-parallax-bike"
        style={{ backgroundImage: `url('${imageBaseUrl}/bike.png')` }}
      />
      <div className="absolute top-[70px] w-full text-center z-10">
        <Image
          src={`${imageBaseUrl}/logo.svg`}
          alt="Logo"
          width={200}
          height={50}
          className="mx-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default ParallaxHero;
