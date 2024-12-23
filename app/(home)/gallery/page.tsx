"use client";

import GalleryImage from "@/components/Gallery_Image";
import TextAnimation from "@/components/Gallery_TextAnimation";
import { StarsBackground } from "@/components/ui/stars-background";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import GalleryFooter from "@/components/ui/Gallery_Footer";

const page = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setIndex(index);
    setOpen(true);
  }

  const slides = Array.from({ length: 28 }, (_, index) => ({
    src: `/assets/gallery-raw-images/gallery-raw-${index + 1}.jpg`,
  }));

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
        <div className="flex flex-wrap justify-center gap-4 gallery-block">
            {Array.from({ length: 28 }, (_, index) => (
              <GalleryImage className="gallery-view" key={index} src={`/assets/gallery-raw-images/gallery-raw-${index + 1}.jpg`} alt={`Gallery Image ${index + 1}`} onClick={(index) => openLightbox(index)} index={index} />
            ))}
        </div>
      </div>
      <GalleryFooter />
      <Lightbox index={idx} plugins={[Fullscreen, Zoom, Thumbnails]} open={open} slides={slides} close={() => setOpen(false)} />
      <StarsBackground starDensity={0.00070} className="z-[-1] fixed bg" />
    </div>
  );
}

export default page;