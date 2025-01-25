import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientLoader from "@/components/ClientLoader";
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: "Exodia '25 || IIT Mandi",
  description: "Exodia '25, the annual cultural fest of IIT Mandi",
  // icons: [{ rel: "icon", url: "/assets/favicon.ico" }],
};

const myFont = localFont({ // DEPLOYMENT FIX
  src: '../public/fonts/HarryP.woff2',
  display: 'swap',
})

const myNewFont = localFont({ // DEPLOYMENT FIX
  src: '../public/fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf',
  display: 'swap',
})

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
          <div   className={myNewFont.className}>
            {/* <CustomCursor /> */}
            {children}
          </div>
        </ClientLoader>
      </body>
    </html>
  );
}
