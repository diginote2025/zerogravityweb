import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center  z-10">
      <div className="py-4 px-6 rounded-b-xl flex border-b  backdrop-blur-xs justify-center">
        <div className="flex gap-10">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/about" className="hover:text-orange-400">About</a>
          <a href="/services" className="hover:text-orange-400">Services</a>
          <a href="/projects" className="hover:text-orange-400">Projects</a>
          <a href="/blog" className="hover:text-orange-400">Blog</a>
        </div>
      </div>
    </nav>
  );
}
