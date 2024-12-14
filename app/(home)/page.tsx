"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { sleep } from "@/lib/utils";

const HomePage = () => {
  const [Animatehogya, setAnimatehogya] = React.useState(false);

  return (
    <>
      {Animatehogya ? (
        <div>huhwdwudb</div>
      ) : (
        <>
          <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-12 bg-[#242424]">
            <Image
              src="/assets/background.jpg"
              width={1920}
              height={1080}
              alt={"Background"}
              className="absolute bottom-0 left-0 right-0 top-0 h-screen w-screen rounded-xl border-2 border-[#d6d3d1] opacity-20"
            />
            <svg
              viewBox="0 0 460.84 71.974"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10 w-[80vw]"
            >
              <motion.g
                id="svgGroup"
                strokeLinecap="square"
                fillRule="evenodd"
                initial={{ stroke: "#d6d3d1", fill: "#00000000" }}
                animate={{ fill: "#d6d3d1" }}
                transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                onAnimationComplete={async () => (
                  await sleep(1500), setAnimatehogya(true)
                )}
              >
                <motion.text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="60"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  Exodia
                </motion.text>
              </motion.g>
            </svg>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;