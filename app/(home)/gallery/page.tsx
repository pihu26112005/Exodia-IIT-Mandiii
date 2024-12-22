"use client";

import GalleryImage from "@/components/Gallery_Image";

const page = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center px-20 pt-20">
        <h1 className="text-4xl font-bold text-white mb-12 harry-text-Medium">Gallery</h1>
        <div className="flex flex-wrap justify-center gap-4 gallery-block">
          {Array.from({ length: 28 }, (_, index) => (
            <GalleryImage className="gallery-view" key={index} src={`/assets/gallery-raw-images/gallery-raw-${index + 1}.jpg`} alt={`Gallery Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;