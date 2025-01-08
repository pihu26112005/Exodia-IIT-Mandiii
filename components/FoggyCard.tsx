"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const FoggyCard = ({
  children,
  className,
  width = "350px",
  height = "200px",
  bgColor = "gray",
  fogColor = "rgba(0, 0, 0, 0.5)",
}: {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  fogColor?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden flex items-center justify-center",
        className
      )}
      style={{
        width,
        height,
        background: bgColor,
      }}
    >
      {/* Left Foggy Effect */}
      <div
        className="absolute top-0 left-0 h-full w-[50px] pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${fogColor}, transparent)`,
        }}
      ></div>

      {/* Right Foggy Effect */}
      <div
        className="absolute top-0 right-0 h-full w-[50px] pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${fogColor}, transparent)`,
        }}
      ></div>

      {/* Card Content */}
      <div className="z-10 p-4">{children}</div>
    </div>
  );
};
