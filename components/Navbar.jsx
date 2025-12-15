import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-center relative items-center text-white z-50">
      <div className="w-full pt-20 fixed max-w-250 py-4 px-4 bg-white/5 backdrop-blur-sm rounded-2xl flex border-b  justify-between items-center">
        <a href="/">LOGO</a>
        <div className="flex gap-10">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
        </div>
         <a href="/contact" className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black">
        Contact
      </a>
      </div>
    </nav>
  );
}
