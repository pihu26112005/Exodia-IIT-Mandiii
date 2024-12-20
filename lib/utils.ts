import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// HOME PAGE UTILS 

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Schedule",
    link: "/schedule",
  },
  {
    name: "Sponsors",
    link: "/sponsors",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];