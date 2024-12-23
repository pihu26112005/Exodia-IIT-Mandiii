export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="bg-[#141414] bg-fixed" >
            {/* <body style={{}} className="bg-gradient-to-b from-blue-950 via-blue-950 to-black bg-fixed"> */}
                {children}

            </body>
        </html>
    );
}

// className="bg-gradient-to-b from-blue-950 via-blue-950 to-black bg-fixed"

// export default function RootLayout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//     return (
//       <html lang="en">
//         <body>
//           {children}
//         </body>
//       </html>
//     );
//   }