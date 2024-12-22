"use client";
import React from 'react';
import Image from 'next/image';
import { Lens } from './ui/lens';

const Home_GallerySection = () => {
  return (
    <div className="border-2 border-green-600 gallery max-w-[80%] grid grid-cols-1 md:grid-cols-3 gap-[100px]">
      <div className="border-2 border-green-600 row-span-2">
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1aaaa.jpg"  alt="tree" width={100} height={10} />
        </Lens>
      </div>
      <div className="border-2 border-green-600 col-span-2">
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1bbbb.jpg"  alt="mountain" width={100} height={10} />
        </Lens>
      </div>
      <div>
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1cccc.jpg"  alt="forest" width={100} height={10} />
        </Lens>
      </div>
      <div className="border-2 border-green-600 row-span-2">
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1dddd.jpg"  alt="sunset" width={100} height={10} />
        </Lens>
      </div>
      <div className="border-2 border-green-600 col-span-2">
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1aaaa.jpg"  alt="nature" width={100} height={10} />
        </Lens>
      </div>
      <div>
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1aaaa.jpg"  alt="river" width={100} height={10} />
        </Lens>
      </div>
      <div className="border-2 border-green-600 col-span-2">
        <Lens lensSize={140}>
          <Image src="/assets/home-event-images/1aaaa.jpg"  alt="scenery" width={100} height={10} />
        </Lens>
      </div>
    </div>
  );
}

export default Home_GallerySection;