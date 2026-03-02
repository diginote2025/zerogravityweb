import React from "react";
import Image from "next/image";
import Button1 from "@/components/ui/Button1";

export default function CTA() {
  return (
    <section className="relative bg-black text-white overflow-hidden flex items-center min-h-[520px] sm:min-h-[650px] lg:min-h-[800px]">
      
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dnv5c78dl/image/upload/w_1600,q_auto,f_auto/v1771697573/101948_a0sth2.jpg"
          alt="Mission Horizon"
          fill
          unoptimized
          className="object-cover object-bottom opacity-80"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 max-lg:via-black/0 to-black/20 max-lg:to-black/0" />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-center">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium max-lg:font-extrabold tracking-tight leading-tight mb-6 sm:mb-8">
          Ready to launch <br />
          your next mission?
        </h2>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-14">
          Partner with our team to elevate your digital operations.
          <span className="hidden md:inline">
            {" "}We provide the tools, expertise, and support to move faster.
          </span>
        </p>

        {/* CTA Button */}
        
        <Button1 button1="Start your mission"/>

      </div>
    </section>
  );
}