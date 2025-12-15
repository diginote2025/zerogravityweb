"use client";
import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400", // Bebas Neue Bold alag weight me nahi aata, sab 400 hi hota
  subsets: ["latin"],
});

export default function ContactPage() {
  return (
    <section className="min-h-screen overflow-hidden -z-20 relative bg-black px-6 py-14 text-white">
      <div className="">
        <div className="w-full h-80 -z-10 absolute bg-orange-500/30 left-0 -top-40 rounded-b-full blur-3xl" />
        <p
          className={`text-[200px] text-center font-bold 
  bg-gradient-to-b from-white/30 to-black 
  bg-clip-text text-transparent ${bebas.className}`}
        >
          CONTACT
        </p>
      </div>
      <div className="mx-auto max-w-6xl ">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* LEFT SIDE — INFORMATION */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Let’s Build Your <br />
              <span className="text-purple-400">Digital Presence</span>
            </h1>

            <p className="text-white/60 max-w-md">
              We help startups and businesses design and develop fast, scalable,
              and conversion-focused websites.
            </p>

            {/* Info Points */}
            <div className="space-y-4 pt-4">
              <InfoPoint title="⚡ Fast Delivery">
                Clean code and quick turnaround.
              </InfoPoint>
              <InfoPoint title="🎯 Business-Focused">
                Websites built to convert visitors into clients.
              </InfoPoint>
              <InfoPoint title="💻 Modern Tech">
                React, Next.js, Tailwind, scalable architecture.
              </InfoPoint>
            </div>

            {/* Contact Info */}
            <div className="pt-6 space-y-2 text-sm text-white/60">
              <p>📧 hello@youragency.com</p>
              <p>📞 +1 (969) 819-8061</p>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-purple-500/10 p-8 shadow-xl">
            <form className="space-y-6">
              <Input label="Your Name" placeholder="John Doe" required />

              <Input
                label="Email Address"
                placeholder="john@company.com"
                type="email"
                required
              />

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Project Type
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-purple-500"
                >
                  <option value="">Select</option>
                  <option>Website Development</option>
                  <option>E-commerce Website</option>
                  <option>Landing Page</option>
                  <option>Web App / SaaS</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Project Brief
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your project..."
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 py-3 text-sm font-medium transition hover:opacity-90"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Components */

function Input({ label, placeholder, type = "text", required }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/60">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-purple-500"
      />
    </div>
  );
}

function InfoPoint({ title, children }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-white/60">{children}</p>
    </div>
  );
}
