import React from "react";

export default function Navbar() {
  return (
     <div className="fixed top-0 left-0 w-full z-50">
    <div className="mx-auto max-w-7xl px-6">
      <div className=" flex items-center justify-between rounded-2xl  px-6 py-4 text-white ">
        
        {/* Logo */}
        <p className="text-xl font-semibold tracking-wide cursor-pointer">
          ZEROGWTY
        </p>
  <nav className="flex justify-center items-center  z-10">
        <div className="py-4 px-6 rounded-b-xl flex border-b  backdrop-blur-[3px] justify-center">
          <div className="flex gap-10">
            <a href="/" className="hover:text-orange-400">Home</a>
            <a href="/about" className="hover:text-orange-400">About</a>
            <a href="/services" className="hover:text-orange-400">Services</a>
            <a href="/projects" className="hover:text-orange-400">Projects</a>
            <a href="/blog" className="hover:text-orange-400">Blog</a>
          </div>
        </div>
      </nav>
        {/* Contact Button */}
        <a href="/contact" className="rounded-full border text-black hover:text-white border-white/30 px-8 py-2 text-sm font-medium transition-all duration-300 bg-white hover:bg-white/0 hover:text-black">
          Contact
        </a>
  
      </div>
    </div>
  </div>
  );
}
