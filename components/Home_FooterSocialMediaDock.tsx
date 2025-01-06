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
import { links } from "@/lib/utils";

export const FooterSocialMediaDock = () => {
 
  return (
    <div className="flex items-center mt-10 justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
        desktopClassName="max-sm:hidden"
      />
      <div className="sm:hidden">
        {/* social media link on circles mapp  */}
        
      </div>
    </div>
  );
}

// export  FooterSocialMediaDock