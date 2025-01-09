import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientLoader from "@/components/ClientLoader";

export const metadata: Metadata = {
  title: "Exodia '25 || IIT Mandi",
  description: "Exodia '25, the annual cultural fest of IIT Mandi",
  // icons: [{ rel: "icon", url: "/assets/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        {/* // DEPLOYMENT FIX */}
        {/* <div>
        <CustomCursor /> 
        {children}
        </div> */}
        <ClientLoader>
          <div>
            <CustomCursor />
            {children}
          </div>
        </ClientLoader>
      </body>
    </html>
  );
}
