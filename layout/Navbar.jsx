"use client"

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between max-lg:py-4 max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/10 rounded-2xl px-6   text-white">
          
          {/* Logo */}
          <p className="text-xl font-semibold tracking-wide cursor-pointer">
            ZEROGWTY
          </p>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex bg-black/20  rounded-xl border-b  backdrop-blur-[10px] w-full h-full max-w-md py-4 max-lg:py-0 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-orange-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="rounded-full border border-white/30 bg-white px-6 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`
          md:hidden absolute top-24 left-6 right-6 p-6 rounded-2xl max-lg:bg-white/10 bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-300 transform
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}>
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg text-white  hover:text-orange-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}