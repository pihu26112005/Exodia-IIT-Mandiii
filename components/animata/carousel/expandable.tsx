import { HTMLAttributes, useEffect, useState } from "react";
import WaveReveal from "@/components/animata/text/wave-reveal";
import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        { "flex-grow": index === activeItem },
        className
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", { "blur-[2px]": index !== activeItem })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          <WaveReveal
            duration="1000ms"
            className="items-start justify-start text-xl sm:text-2xl md:text-6xl"
            text={item.title}
            direction="up"
          />
        </div>
      )}
    </div>
  );
};

const allItems = [
    { "image": "https://multiplayer.net-cdn.it/thumbs/images/2022/03/18/hogwarts-legacy-artwork-_33_jpg_1600x900_crop_q85.jpg", "title": "Exodia" },
    { "image": "https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1000", "title": "ProNights" },
    { "image": "https://wallup.net/wp-content/uploads/2018/09/26/685291-fantasy-mage-wizard-sorcerer-art-artwork-magic-magician.jpg", "title": "Hackathon" },
    { "image": "https://images6.alphacoders.com/304/304604.jpg", "title": "Gaming Arena" },
    { "image": "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000", "title": "LAN Party" },
    { "image": "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?q=80&w=1000", "title": "VR Zone" },
    { "image": "https://images.ctfassets.net/6pezt69ih962/1DyAhWIAnmyzgNjMR8sGdu/8c67663590d07cf31beeee934ed1a9b6/Ticketing_1920x1200.jpg", "title": "Live Contests" },
    { "image": "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000", "title": "Enjoy & Chill" }
  ]
  

export default function Expandable({ list = allItems, autoPlay = true, className }: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleItems, setVisibleItems] = useState(9);

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const updateVisibleItems = () => {
        if (window.innerWidth >= 1024) {
          setVisibleItems(9); // Laptop
        } else if (window.innerWidth >= 768) {
          setVisibleItems(6); // Tablet
        } else {
          setVisibleItems(3); // Mobile
        }
      };
  
      updateVisibleItems();
      window.addEventListener("resize", updateVisibleItems);
      return () => window.removeEventListener("resize", updateVisibleItems);
    }
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % visibleItems);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [autoPlay, visibleItems, isHovering]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.slice(0, visibleItems).map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => setIsHovering(false)}
        />
      ))}
    </div>
  );
}
