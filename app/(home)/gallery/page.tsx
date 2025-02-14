"use client";

import TextAnimation from "@/components/Gallery_TextAnimation";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom, Thumbnails, Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import LoadMore from "@/components/LoadMore";
// import { ImageRenderer } from "@/components/ImageRenderer";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
// import { navItems } from "@/lib/utils";
import { aboutNPfont11 } from "@/lib/font.utils";
import { CoolMode } from "@/components/ui/cool-mode";

const page = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setIndex(index);
    setOpen(true);
  }

  const images = [
    "/assets/exodia-gallery-images/DSC06940.JPG",
    "/assets/exodia-gallery-images/DSC_0372.JPG",
    "/assets/exodia-gallery-images/DSC_0373.JPG",
    "/assets/exodia-gallery-images/DSC07046.JPG",
    "/assets/exodia-gallery-images/DSC07220.JPG",
    "/assets/exodia-gallery-images/DSC07242.JPG",
    "/assets/exodia-gallery-images/DSC07249.JPG",
    "/assets/exodia-gallery-images/DSC07252.JPG",
    "/assets/exodia-gallery-images/DSC07253.JPG",
    "/assets/exodia-gallery-images/DSC07260.JPG",
    "/assets/exodia-gallery-images/DSC07268.JPG",
    "/assets/exodia-gallery-images/DSC07270.JPG",
    "/assets/exodia-gallery-images/DSC07275.JPG",
    "/assets/exodia-gallery-images/DSC07390.JPG",
    "/assets/exodia-gallery-images/DSC08347.JPG",
    "/assets/exodia-gallery-images/DSC08403.JPG",
    "/assets/exodia-gallery-images/DSC08467.JPG",
    "/assets/exodia-gallery-images/DSC08472.JPG",
    "/assets/exodia-gallery-images/DSC08481.JPG",
    "/assets/exodia-gallery-images/DSC08482.JPG",
    "/assets/exodia-gallery-images/DSC08487.JPG",
    "/assets/exodia-gallery-images/DSC08499.JPG",
    "/assets/exodia-gallery-images/LEH07282.JPG",
  ];

  const slides = Array.from({ length: images.length }, (_, index) => ({
    
    src: images[index],
    description: typeof window != undefined && window.innerWidth > 1140 ? "Press ESC to exit\nUse arrow keys to navigate" : "",
  }));

  // console.log(window.innerWidth);

  const onClick = (index: number) => openLightbox(index);


  return (
    <div className="h-screen">
      <Navbar />

      <FloatingNav namex="P" className="max-md:hidden" />
      <div className="absolute top-8 left-8 flex items-center justify-center">
        <Modal>
          <ModalTrigger className="harry-text border border-yellow-300 flex justify-center group/modal-btn mt-10">
            <span className="text-[1.3rem] group-hover/modal-btn:translate-x-40 text-yellow-300 text-center transition duration-500 harry-text">
              Hover here!
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <Image src="/assets/gallery-svgs/instagram-fill.svg" alt="instagram-fill" width={30} height={30} />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Check Out Exodia's Instagram Page! 📸
              </h4>
              <div className="flex justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
            <CoolMode>
            <Link href="https://www.instagram.com/exodia.iitmandi/" target="_blank">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-white dark:border-black dark:text-black border border-gray-300 rounded-md text-sm w-auto">
                
                  @exodia.iitmandi
                
              </button>
            </Link>
            </CoolMode>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      <div className="flex flex-col items-center px-20 py-12 mt-2">
        <header className="flex flex-col items-center z-[200] sm:static relative">
          <h1 className={`font-bold text-gold mt-28  z-[900] text-[6rem] max-sm:text-[3rem] ${aboutNPfont11.className}`}>
            {/* <TextAnimation text="Gallery" /> */}
            Gallery
          </h1>
          <div className={`text-white text-center text-[2rem]  mb-20 z-[900] ${aboutNPfont11.className}`}>
            <TextAnimation text="Welcome to the Exodia IIT Mandi Gallery!" />
          </div>
        </header>
        {/* <ImageRenderer onClick={onClick} images={images} /> */}
        <LoadMore onClick={onClick} />
      </div>
      <Lightbox className="z-0" index={idx} captions={{descriptionTextAlign: "center"}} plugins={[Captions]} open={open} slides={slides} close={() => setOpen(false)} />
    </div>
  );
}

export default page;