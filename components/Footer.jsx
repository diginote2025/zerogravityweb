import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 text-gray-400 pt-20">
      <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Finwise</h2>
          <p className="text-sm leading-relaxed">
            We serve as intermediaries, safeguarding funds, facilitating
            transactions for individuals & businesses.
          </p>

          <div className="flex gap-4 mt-6">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              X
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              IG
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              IN
            </span>
          </div>
        </div>

        {/* USE CASES */}
        <div>
          <h3 className="text-white font-medium mb-4">USE CASES</h3>
          <ul className="space-y-3 text-sm">
            <li>Online Business</li>
            <li>Creators</li>
            <li>E-Commerce</li>
            <li>Agencies</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-white font-medium mb-4">PRODUCTS</h3>
          <ul className="space-y-3 text-sm">
            <li>Invoicing</li>
            <li>Office Hours</li>
            <li>Explore More</li>
            <li>Loan Type</li>
            <li>Calculator</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-medium mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">For latest updates subscribe us!</p>

          <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
            />
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
              →
            </button>
          </div>

          <p className="text-sm mt-4">📧 hello@finwise.com</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-16">
        <div className="max-w-[1250px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© 2023 Finwise</p>
          <p className="opacity-50">www.DownloadNewThemes.com</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
