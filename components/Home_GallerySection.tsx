"use client";
import React from 'react';
import Image from 'next/image';
import { Lens } from './ui/lens';

const Home_GallerySection = () => {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5572e05 ( commit)
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
<<<<<<< HEAD
=======
=======
    <div className=" gallery max-w-[80%] grid grid-cols-1 md:grid-cols-3 gap-[20px] relative">
      {/* Top-left item (spans 2 rows, 2 columns) */}
      <div className=" row-span-2 col-span-2 relative">
        <Lens lensSize={140}>
          <Image
            src="/assets/home-gallery-images/g1aaaa.jpg"
            alt="tree"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={700}
            objectPosition='bottom'
            className='px-auto mx-auto rounded-3xl border-2 border-gray-500 ' 
          />
        </Lens>
      </div>

      {/* Top-right vertical item (spans 4 rows) */}
      <div className=" col-span-1 row-span-4 relative">
        <Lens lensSize={140}>
          <Image
            src="/assets/home-gallery-images/g1bbbb.JPG"
            alt="mountain"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={400}
            className='border-2 border-gray-500 rounded-3xl ml-14'
          />
        </Lens>
      </div>

      {/* Middle-left vertical item (spans 4 rows) */}
      <div className=" row-span-4 col-span-1 relative ">
        <Lens lensSize={140}>
          <Image
            src="/assets/home-gallery-images/g1cccc.jpg"
            alt="forest"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={400}
            className='border-2 border-gray-500 rounded-3xl ml-4 mt-5'
          />
        </Lens>
      </div>

      {/* Middle square item (spans 2 rows) */}
      <div className=" row-span-2 col-span-1 relative">
        <Lens lensSize={140}>
          <Image
            src="/assets/home-gallery-images/g1dddd.JPG"
            alt="sunset"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={500}
            className='border-2 border-gray-500 rounded-3xl mt-3'
          />
        </Lens>
      </div>

      {/* Bottom-wide item (spans 2 rows, 2 columns) */}
      <div className=" col-span-2 row-span-2 relative">
        <Lens lensSize={140}>
          <Image
            src="/assets/home-gallery-images/g1eeee.jpg"
            alt="nature"
            // layout="fill"
            // objectFit="cover"
            height={200}
            width={600}
            className='px-auto mt-14 mx-auto border-2 border-gray-500 rounded-3xl'
          />
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
        </Lens>
      </div>
    </div>
  );
<<<<<<< HEAD
}

export default Home_GallerySection;
=======
<<<<<<< HEAD
}

export default Home_GallerySection;
=======
};

export default Home_GallerySection;
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
