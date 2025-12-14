"use client";

import { useState } from "react";
import { properties } from "@/data/properties";
import { Bed, Bath, Square } from "lucide-react";

const PropertyGrid = () => {
  const [activeFilter, setActiveFilter] = useState("Apartment");

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="flex gap-4 mb-10">
          {["Apartment", "Office", "Warehouse"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-3 rounded-full ${
                activeFilter === type
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-500">{p.location}</p>

              <div className="flex gap-4 text-sm mt-4">
                <span className="flex items-center gap-1">
                  <Bed size={16} /> {p.beds}
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={16} /> {p.baths}
                </span>
                <span className="flex items-center gap-1">
                  <Square size={16} /> {p.sqft}
                </span>
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold">{p.price}</span>
                <button className="px-5 py-2 bg-black text-white rounded-full">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
