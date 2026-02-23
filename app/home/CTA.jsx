import React from 'react';
import Image from 'next/image';

const features = [
  { id: 1, text: "End-to-end support" },
  { id: 2, text: "Proven reliability" },
  { id: 3, text: "Custom-built solutions" },
];

export default function CTA() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden min-h-[800px] flex flex-col justify-center">
      
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dnv5c78dl/image/upload/v1771697573/101948_a0sth2.jpg" // Ensure your file is named exactly this in /public
          alt="Mission Horizon"
          fill
          className="object-bottom object-cover opacity-80"
          priority
        />
        {/* Top Fade: Smoothly blends the image into the black background above */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent h-1/2" />
        
      
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
          Ready to launch <br /> your next mission?
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with our team to elevate your digital operations. <br className="hidden md:block" />
          We provide the tools, expertise, and support to move faster.
        </p>

        {/* The Signature Orange Button */}
        <div className="flex justify-center mb-32">
          <button className="group relative bg-[#F15A29] hover:bg-[#ff6a3a] text-white px-10 py-5 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(241,90,41,0.3)]">
            <span className="flex items-center gap-3 font-bold tracking-wide uppercase text-sm">
              Start your mission
              <span className="text-2xl leading-none">+</span>
            </span>
          </button>
        </div>

        {/* Bottom Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  relative">
            
            {features.map((item) => (
                <div key={item.id} className="flex flex-col items-center space-y-5 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-colors group-hover:border-orange-500/50">
                        <span className="text-sm font-bold italic text-orange-400/80">
                            {item.id}
                        </span>
                    </div>
                    <p className="text-lg font-medium tracking-wide text-gray-100 opacity-90">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}