"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const numOfPages = 5;
const animTime = 1000; // animation duration in ms

const SkewedPages: React.FC = () => {
  // Using a hook to assign ref to an element for intersection
  const { ref: inViewRef, inView } = useInView({ threshold: 1 });
  const [curPage, setCurPage] = useState<number>(1);
  const scrollingRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Manage whether the container fully covers the viewport
  const [isFullyInView, setIsFullyInView] = useState<boolean>(false);
  const isFullyInViewRef = useRef<boolean>(false);

  // Use IntersectionObserver to detect if the container is completely in view
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFullyInView(entry.isIntersecting);
          isFullyInViewRef.current = entry.isIntersecting;
          console.log("IntersectionObserver: isFullyInView", entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Reset scrolling flag after animation finishes.
  const paginate = useCallback(() => {
    setTimeout(() => {
      scrollingRef.current = false;
    }, animTime);
  }, []);

  const navigateUp = useCallback(() => {
    if (curPage === 1) return;
    setCurPage((prev) => prev - 1);
    scrollingRef.current = true;
    paginate();
  }, [curPage, paginate]);

  const navigateDown = useCallback(() => {
    if (curPage === numOfPages) return;
    setCurPage((prev) => prev + 1);
    scrollingRef.current = true;
    paginate();
  }, [curPage, paginate]);

  // Consolidated event listeners for wheel and keydown events.
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only intercept if the container is fully in view and not animating.
      if (!isFullyInViewRef.current || scrollingRef.current) return;

      // Allow native scrolling if on the last page (scrolling down) or the first page (scrolling up)
      if (curPage === numOfPages && e.deltaY > 0) return;
      if (curPage === 1 && e.deltaY < 0) return;

      // Prevent default scroll behavior when intercepting the event.
      e.preventDefault();

      if (e.deltaY > 0) {
        navigateDown();
      } else if (e.deltaY < 0) {
        navigateUp();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullyInViewRef.current || scrollingRef.current) return;

      if (curPage === numOfPages && e.key === "ArrowDown") return;
      if (curPage === 1 && e.key === "ArrowUp") return;

      if (e.key === "ArrowDown") {
        navigateDown();
      } else if (e.key === "ArrowUp") {
        navigateUp();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [curPage, navigateUp, navigateDown]);

  // Helper functions for CSS class names
  const leftHalfClasses = (active: boolean) =>
    active ? "translate-x-0 translate-y-0" : "translate-x-[-32.4vh] translate-y-full";

  const rightHalfClasses = (active: boolean) =>
    active ? "translate-x-0 translate-y-0" : "translate-x-[32.4vh] translate-y-[-100%]";

  // Skewed container base classes.
  const skewedClasses =
    "skew-x-[-18deg] w-[140%] h-full bg-black overflow-hidden absolute top-0";

  // Content container classes.
  const contentClasses = (isLeft: boolean, inactive: boolean) => {
    const origin = isLeft ? "origin-top-right" : "origin-bottom-left";
    const extra = inactive ? "opacity-50 scale-95" : "";
    return `absolute inset-0 flex flex-col items-center justify-center px-[30%] text-white transition-transform duration-1000 ${origin} ${extra} skew-x-[18deg]`;
  };

  // Function to get background classes for each page and half.
  const getBackgroundClasses = (page: number, isLeft: boolean) => {
    if (page === 1) {
      return isLeft
        ? "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg')] bg-cover"
        : "bg-[#292929]";
    }
    if (page === 2) {
      return isLeft
        ? "bg-[#292929]"
        : "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg')] bg-cover";
    }
    if (page === 3) {
      return isLeft
        ? "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg')] bg-cover"
        : "bg-[#292929]";
    }
    if (page === 4) {
      return isLeft
        ? "bg-[#292929]"
        : "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')] bg-cover";
    }
    if (page === 5) {
      return isLeft
        ? "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg')] bg-cover"
        : "bg-[#292929]";
    }
    return "";
  };

  // Content for each page.
  const pagesContent = [
    {
      left: null,
      right: {
        heading: "Skewed One Page Scroll",
        description: "Just scroll down",
      },
    },
    {
      left: {
        heading: "Page 2",
        description: "Nothing to do here, continue scrolling.",
      },
      right: null,
    },
    {
      left: null,
      right: {
        heading: "Page 3",
        description: "The end is near, I promise!",
      },
    },
    {
      left: {
        heading: "Page 4",
        description: "Ok, ok, just one more scroll!",
      },
      right: null,
    },
    {
      left: null,
      right: {
        heading: "Epic finale",
        description: (
          <>
            Feel free to check{" "}
            <a
              href="https://codepen.io/suez/pens/public/"
              target="_blank"
              rel="noreferrer"
              className="text-[#ffa0a0]"
            >
              my other pens
            </a>{" "}
            and follow me on{" "}
            <a
              href="https://twitter.com/NikolayTalanov"
              target="_blank"
              rel="noreferrer"
              className="text-[#ffa0a0]"
            >
              Twitter
            </a>
          </>
        ),
      },
    },
  ];

  return (
    <div ref={containerRef} className="sticky h-screen overflow-hidden">
      {Array.from({ length: numOfPages }, (_, i) => {
        const pageNumber = i + 1;
        const isActive = pageNumber === curPage;
        const isInactive = pageNumber === curPage - 1;
        return (
          <div
            key={pageNumber}
            ref={inViewRef}
            className="sticky inset-0 w-full transition-transform duration-1000"
          >
            {/* Left half */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-screen transition-transform duration-1000 ${leftHalfClasses(isActive)}`}
            >
              <div className={`absolute top-0 left-[-40%] ${skewedClasses} ${getBackgroundClasses(pageNumber, true)}`}>
                <div className={contentClasses(true, isInactive)}>
                  {pagesContent[pageNumber - 1].left && (
                    <>
                      <h2 className="mb-4 uppercase text-[25px] text-center">
                        {pagesContent[pageNumber - 1].left!.heading}
                      </h2>
                      <p className="text-[18px] text-center">
                        {pagesContent[pageNumber - 1].left!.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Right half */}
            <div
              className={`absolute top-0 left-1/2 w-1/2 h-screen transition-transform duration-1000 ${rightHalfClasses(isActive)}`}
            >
              <div className={`absolute top-0 right-[-40%] ${skewedClasses} ${getBackgroundClasses(pageNumber, false)}`}>
                <div className={contentClasses(false, isInactive)}>
                  {pagesContent[pageNumber - 1].right && (
                    <>
                      <h2 className="mb-4 uppercase text-[25px] text-center">
                        {pagesContent[pageNumber - 1].right!.heading}
                      </h2>
                      <p className="text-[18px] text-center">
                        {pagesContent[pageNumber - 1].right!.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkewedPages;
