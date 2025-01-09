"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageRenderer } from "./ImageRenderer";

interface LoadMoreProps {
    onClick: (index: number) => void;
}

let page = 1;

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
    const images = [
      "/assets/exodia-gallery-images/DSC_0372.JPG",
      "/assets/exodia-gallery-images/DSC_0373.JPG",
      "/assets/exodia-gallery-images/DSC06940.JPG",
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
    const { ref, inView } = useInView();
    const [data, setData] = useState<string[]>([]);
    useEffect(() => {
        if(inView) {
            setData(() => [...data, ...images]);
            page++;
        }
    }, [inView, data]);
    return (
        <>
            <section className="flex flex-col items-center">
                <ImageRenderer images={data} onClick={onClick} />
                <div ref={ref}>
                    <Image className="mt-16" src='/assets/gallery-svgs/spinner.svg' alt="spinner" width={60} height={60} />
                </div>
            </section>
        </>
    )
}

export default LoadMore;