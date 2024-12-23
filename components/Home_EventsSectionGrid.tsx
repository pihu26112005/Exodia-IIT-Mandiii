"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Home_EventsSectionCard from "./Home_EventsSectionCard";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Events } from "@/lib/utils";

<<<<<<< HEAD
export function Home_EventsSectionGrid() {
=======
<<<<<<< HEAD
export function Home_EventsSectionGrid() {
=======
export function Home_EventsSectionGrid(
  
) {
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
  const [active, setActive] = useState<(typeof Events)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[1000px]  h-full md:h-fit md:max-h-[100%]  flex flex-col p-6 bg-white dark:bg-black sm:rounded-xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
<<<<<<< HEAD
      <ul className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-9 m-0 my-0 py-0">
=======
<<<<<<< HEAD
      <ul className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-9 m-0 my-0 py-0">
=======
      <ul className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-9 m-0 my-0 py-0 ">
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
        {Events.map((card, index) => (
          
          <div>
            <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="cursor-pointer"
          >
           <CardContainer className="inter-var ">
               <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                 <CardItem
                   translateZ="50"
                   className="text-xl font-bold text-neutral-600 dark:text-white"
                 >
                   {card.title}
                 </CardItem>
                 <CardItem
                   as="p"
                   translateZ="60"
                   className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                 >
                   {card.description}
                 </CardItem>
                 <CardItem
                   translateZ="100"
                  //  rotateX={20}
                  //  rotateZ={-10}
                   className="w-full mt-4 "
                 >
                   <Image
                     src={card.src}
                     height="1000"
                     width="1000"
                     className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                     alt="thumbnail"
                   />
                 </CardItem>
                 <div className="flex justify-between items-center mt-20">
                   <CardItem
                     translateZ={20}
                     translateX={-40}
                     as="button"
                     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                   >
                     Try now →
                   </CardItem>
                   <CardItem
                     translateZ={20}
                     translateX={40}
                     as="button"
                     className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                   >
                     Participate
                   </CardItem>
                 </div>
               </CardBody>
             </CardContainer>
          </motion.div>
          </div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
