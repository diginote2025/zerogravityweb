"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
       <div className="fixed top-0 left-0 w-full z-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mt-4 flex items-center justify-between rounded-2xl  px-6 py-4 text-white shadow-lg">
      
      {/* Logo */}
      <p className="text-xl font-semibold tracking-wide cursor-pointer">
        LOGO
      </p>

      {/* Contact Button */}
      <a href="/contact" className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black">
        Contact
      </a>

    </div>
  </div>
</div>

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dnv5c78dl/video/upload/v1765710804/vecteezy_animated-flying-through-the-stars-and-blue-nebula-in-space_8078506_uvvzmb.mp4"
          type="video/mp4"
        />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl">
        <Image
          src="https://res.cloudinary.com/dnv5c78dl/image/upload/v1765708979/vecteezy_ai-generated-laptop-blank-screen-png-isolated-on-transparent_35877659_wxr7a5.png"
          width={1600}
          height={900}
          alt="Laptop Mockup"
          className="w-full h-auto"
          priority
        />

        {/* Screen */}
        <div className="absolute top-[3.2%] left-[11.5%] w-[76.3%] h-[70%] overflow-hidden rounded-xl">
          <iframe
            src="/home"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
