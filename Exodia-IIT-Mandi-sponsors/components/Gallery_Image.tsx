import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

const GalleryImage: React.FC<ImageProps> = ({src, alt, className}) => {
    return (
        <div className="group">
            <div className="overflow-hidden rounded-lg relative aspect-w-1 aspect-h-1">
                <Image height={200} width={380} alt={alt} src={src} className={`transition ease duration-1000 group-hover:scale-110 ${className}`} objectFit="cover" />
            </div>
        </div>
    );
}

export default GalleryImage;