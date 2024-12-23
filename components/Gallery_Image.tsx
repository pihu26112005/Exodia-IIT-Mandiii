import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5572e05 ( commit)
    onClick: (index: number) => void;
    className?: string;
    index: number;
}

const GalleryImage: React.FC<ImageProps> = ({src, alt, onClick, className, index}) => {
    const handleClick = () => {
        onClick(index);
    };

    return (
        <div>
            <div className="group overflow-hidden rounded-lg relative aspect-w-1 aspect-h-1" onClick={handleClick}>
                    <Image height={200} width={380} alt={alt} src={src} className={`transition ease duration-1000 group-hover:scale-110 ${className}`} objectFit="cover" />
<<<<<<< HEAD
=======
=======
    className?: string;
}

const GalleryImage: React.FC<ImageProps> = ({src, alt, className}) => {
    return (
        <div className="group">
            <div className="overflow-hidden rounded-lg relative aspect-w-1 aspect-h-1">
                <Image height={200} width={380} alt={alt} src={src} className={`transition ease duration-1000 group-hover:scale-110 ${className}`} objectFit="cover" />
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
            </div>
        </div>
    );
}

export default GalleryImage;