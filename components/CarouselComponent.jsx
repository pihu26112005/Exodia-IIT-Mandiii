// import React, { useState, useEffect } from "react";

// const CarouselComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0); // DEPLOYMENT FIX

//   useEffect(() => { // DEPLOYMENT FIX
//     if (typeof window !== 'undefined') {
//       setWindowWidth(window.innerWidth);

//       const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//       };

//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }
//   }, []);

//   // Add more images as needed
//   const images = [
//     "/assets/home-gallery-images/1.JPG",
//     "/assets/home-gallery-images/2.JPG",
//     "/assets/home-gallery-images/3.JPG",
//     "/assets/home-gallery-images/4.JPG",
//     "/assets/home-gallery-images/5.JPG",
//     "/assets/home-gallery-images/6.JPG",
//     "/assets/home-gallery-images/7.JPG",
//     "/assets/home-gallery-images/8.JPG",
//     "/assets/home-gallery-images/9.JPG",
//     "/assets/home-gallery-images/10.JPG",
//   ];

//   // Auto-scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 1000); // 3 seconds per slide
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [images.length]);

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-0 max-sm:p-0">
//       <div
//         className="relative w-96 h-96 max-sm:w-80 max-sm:h-80 perspective-1000"
//         style={{ perspectiveOrigin: "50% 25%" }} // Tilt effect
//       >
//         {/* Carousel Container */}
//         <div
//           className="absolute w-full h-full transform-gpu transition-transform duration-500"
//           style={{
//             transform: `rotateX(${windowWidth < 640 ? "0deg" : "-5deg"}) rotateY(${currentSlide * -(360 / images.length)}deg)`,
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="absolute w-full h-full bg-cover bg-center border-2 border-yellow-300"
//               style={{
//                 transform: `rotateY(${(index * 360) / images.length}deg) translateZ(${
//                  windowWidth < 640 ? "550px" : "900px" // Adjust radius dynamically
//                 })`,
//                 backgroundImage: `url(${image})`,
//                 opacity: currentSlide === index ? 1 : 0.5,
//                 transition: "opacity 0.5s, transform 0.5s", // Smooth transition for scaling
//                 scale: currentSlide === index ? 1 : 1,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       {/* <div className="flex space-x-2 mt-[15rem] max-sm:mt-[10rem]">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleSlideChange(index)}
//             className={`w-5 h-5 max-sm:w-3 max-sm:h-3 rounded-full bg-white opacity-50 transition-opacity ${
//               currentSlide === index ? "opacity-100" : ""
//             }`}
//           ></button>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default CarouselComponent;


// DEPLOYMENT FIX



import React, { useState, useEffect } from "react";
import Image from "next/image";

// Static imports for optimization
import img1 from "../public/assets/home-gallery-images/1.JPG";
import img2 from "../public/assets/home-gallery-images/2.JPG";
import img3 from "../public/assets/home-gallery-images/3.JPG";
import img4 from "../public/assets/home-gallery-images/4.JPG";
import img5 from "../public/assets/home-gallery-images/5.JPG";
import img6 from "../public/assets/home-gallery-images/6.JPG";
import img7 from "../public/assets/home-gallery-images/7.JPG";
import img8 from "../public/assets/home-gallery-images/8.JPG";
import img9 from "../public/assets/home-gallery-images/9.JPG";
import img10 from "../public/assets/home-gallery-images/10.JPG";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Images Array
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  // Track window width for dynamic carousel adjustments
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-0 max-sm:p-0">
      <div
        className="relative w-96 h-96 max-sm:w-80 max-sm:h-80 perspective-1000"
        style={{ perspectiveOrigin: "50% 25%" }}
      >
        {/* Carousel Container */}
        <div
          className="absolute w-full h-full transform-gpu transition-transform duration-500"
          style={{
            transform: `rotateX(${windowWidth < 640 ? "0deg" : "-5deg"}) rotateY(${currentSlide * -(360 / images.length)}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-full h-full"
              style={{
                transform: `rotateY(${(index * 360) / images.length}deg) translateZ(${
                  windowWidth < 640 ? "550px" : "900px"
                })`,
                opacity: currentSlide === index ? 1 : 0.5,
                 transition: "opacity 0.5s, transform 0.5s", // Smooth transition for scaling
                 scale: currentSlide === index ? 1 : 1,
              }}
            >
              {/* Optimized Image */}
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                quality={100}
                // placeholder="blur"
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  borderRadius: "8px", // Optional for rounded corners
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      {/* <div className="flex space-x-2 mt-[15rem] max-sm:mt-[10rem]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-5 h-5 max-sm:w-3 max-sm:h-3 rounded-full bg-white opacity-50 transition-opacity ${
              currentSlide === index ? "opacity-100" : ""
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default CarouselComponent;
