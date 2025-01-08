"use client";

// components/CustomCursor.js
import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const lightRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);


  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move wand
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Move light effect
      if (lightRef.current) {
        lightRef.current.style.left = `${clientX}px`;
        lightRef.current.style.top = `${clientY}px`;
      }
    };

    const onMouseDown = () => {
      setIsClicking(true); // Show sparks on click
    };

    const onMouseUp = () => {
      setIsClicking(false); // Remove sparks after click
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Wand */}
      <div
        ref={cursorRef}
        className="max-sm:hidden fixed w-10 h-10 bg-[url('/icons/custom/wandd.svg')] bg-contain bg-no-repeat pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[100]"
      ></div>

      {/* Light effect */}
      <div
        ref={lightRef}
        className="max-sm:hidden fixed w-3 h-0 pointer-events-none rounded-full bg-white z-[99] 
          shadow-[0_0_50px_20px_rgba(255,255,255,0.9),0_0_100px_40px_rgba(255,255,255,0.8),0_0_150px_60px_rgba(255,255,255,0.7)] 
          animate-flicker opacity-100"  
      >
          {/* Sparks on click */}
          {isClicking && (
          <div className="relative max-sm:hidden">
            <div className="absolute w-16 h-16 rounded-full bg-white opacity-70 blur-lg animate-ping"></div>
            <div className="absolute w-10 h-10 rounded-full bg-white opacity-80 blur-md animate-flicker"></div>
            <div className="absolute w-8 h-8 rounded-full bg-white opacity-60 blur-sm animate-bounce"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
