"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageRenderer } from "./ImageRenderer";

import img1 from "@/images/gallery/DSC_0372.jpg";
import img2 from "@/images/gallery/DSC06940.jpg";

interface LoadMoreProps {
    onClick: (index: number) => void;
}

let page = 1;

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
    const images = [
        img1,
        img2
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