import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5572e05 ( commit)

export const FooterSocialMediaDock = () => {
  const links = [
    {
      title: "Whatsapp",
      icon: "📱",
      href: "#",
    },
 
    {
      title: "Instagram",
      icon: "📦",
      href: "#",
    },
    {
      title: "Twitter",
      icon:"🧩",
      href: "#",
    },
    {
      title: "Youtube",
      icon: "🔄",
      href: "#",
    },
 
    {
      title: "LinkedIn",
      icon: "🐦",
      href: "#",
    },
    {
      title: "Facebook",
      icon: "🐙",
      href: "#",
    },
  ];
<<<<<<< HEAD
=======
=======
import { links } from "@/lib/utils";

export const FooterSocialMediaDock = () => {
 
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
  return (
    <div className="flex items-center mt-10 justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

// export  FooterSocialMediaDock