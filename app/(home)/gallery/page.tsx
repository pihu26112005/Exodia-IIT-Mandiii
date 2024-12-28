"use client";

import GalleryImage from "@/components/Gallery_Image";
import TextAnimation from "@/components/Gallery_TextAnimation";
import { StarsBackground } from "@/components/ui/stars-background";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import LoadMore from "@/components/LoadMore";
import { ImageRenderer } from "@/components/ImageRenderer";

const page = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setIndex(index);
    setOpen(true);
  }

  const images = [
    "/assets/exodia-gallery-images/DSC_0372.jpg",
    "/assets/exodia-gallery-images/DSC_0373.jpg",
      "/assets/exodia-gallery-images/DSC06940.jpg",
      "/assets/exodia-gallery-images/DSC07046.jpg",
      "/assets/exodia-gallery-images/DSC07220.jpg",
      "/assets/exodia-gallery-images/DSC07242.jpg",
      "/assets/exodia-gallery-images/DSC07249.jpg", 
      "/assets/exodia-gallery-images/DSC07252.jpg",
      "/assets/exodia-gallery-images/DSC07253.jpg",
      "/assets/exodia-gallery-images/DSC07260.jpg", 
      "/assets/exodia-gallery-images/DSC07268.jpg",
      "/assets/exodia-gallery-images/DSC07270.jpg",
      "/assets/exodia-gallery-images/DSC07275.jpg",
      "/assets/exodia-gallery-images/DSC07390.jpg",
      "/assets/exodia-gallery-images/DSC08347.jpg",
      "/assets/exodia-gallery-images/DSC08403.jpg",
      "/assets/exodia-gallery-images/DSC08467.jpg",
      "/assets/exodia-gallery-images/DSC08472.jpg",
      "/assets/exodia-gallery-images/DSC08481.jpg",
      "/assets/exodia-gallery-images/DSC08482.jpg",
      "/assets/exodia-gallery-images/DSC08487.jpg",
      "/assets/exodia-gallery-images/DSC08499.jpg",
      "/assets/exodia-gallery-images/LEH07282.jpg",
  ];

  const slides = Array.from({ length: images.length }, (_, index) => ({
    src: images[index],
  }));

  const onClick = (index: number) => openLightbox(index);
  

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center px-20 py-12">
        <header className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mt-28 harry-text">
            <TextAnimation text="Gallery" />
          </h1>
            <div className="text-white text-center harry-text-small mt-20 mb-12">
              <TextAnimation text="Welcome to the Exodia IIT Mandi Gallery!" />
            </div>
        </header>
        <ImageRenderer onClick={onClick} images={images} />
        <LoadMore onClick={onClick} />
      </div>
      <Lightbox index={idx} plugins={[Fullscreen, Zoom, Thumbnails]} open={open} slides={slides} close={() => setOpen(false)} />
      <StarsBackground starDensity={0.00070} className="z-[-1] fixed bg" />
    </div>
  );
}

export default page;