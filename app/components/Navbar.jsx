"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-xl font-bold">Corazon</h1>

      <Menu className="md:hidden" />

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">Listings</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
