import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Decorative Glow */}
        <div className="relative group">
          {/* Subtle Orange Glow behind image */}
          <div className="absolute -inset-4 bg-[#F15A29]/20 rounded-xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 rounded-sm">
            <Image
              src="/about-dev.jpg" // Replace with your image path
              alt="Web Development Process"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#F15A29] p-8 hidden md:block">
            <p className="text-4xl font-bold italic leading-none">10+</p>
            <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Years of <br /> Innovation</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="text-[#F15A29] font-mono tracking-tighter text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-[#F15A29]" /> 
              01. WHO WE ARE
            </span>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mt-6 leading-tight">
              Crafting digital <br /> 
              <span className="text-gray-500 italic">masterpieces</span> since 2014.
            </h2>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed font-light">
            We are a team of engineers and dreamers obsessed with the "why" 
            behind the code. Our mission is to bridge the gap between human 
            intuition and digital performance.
          </p>

          <div className="space-y-6 text-gray-500 leading-loose">
            <p>
              In a world where speed is everything, we don't just build websites; 
              we build high-performance machines. Our architecture is designed 
              to scale with your growth, ensuring that your first 1,000 users 
              experience the same fluidity as your first 1,000,000.
            </p>
            
            {/* Minimalist Feature List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {['Scalable Architecture', 'Performance Focused', 'SEO Optimized', 'Security First'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#F15A29] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Button */}
          <div className="pt-8">
            <button className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F15A29] group-hover:border-[#F15A29] transition-all duration-300">
                <span className="text-2xl group-hover:rotate-90 transition-transform">+</span>
              </div>
              <span className="font-bold tracking-widest uppercase text-xs">
                Explore our philosophy
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}