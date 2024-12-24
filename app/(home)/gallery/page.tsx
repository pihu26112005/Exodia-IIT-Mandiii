"use client";

import GalleryImage from "@/components/Gallery_Image";
import TextAnimation from "@/components/Gallery_TextAnimation";
import { StarsBackground } from "@/components/ui/stars-background";

const page = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center px-20 py-12">
        <h1 className="text-4xl font-bold text-white my-28 harry-text">
          <TextAnimation text="Gallery" />
        </h1>
        <div className="flex flex-wrap justify-center gap-4 gallery-block">
          {Array.from({ length: 28 }, (_, index) => (
            <GalleryImage className="gallery-view" key={index} src={`/assets/gallery-raw-images/gallery-raw-${index + 1}.jpg`} alt={`Gallery Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <StarsBackground starDensity={0.00070} className="z-[-1] fixed bg" />
    </div>
  );
}

export default page;