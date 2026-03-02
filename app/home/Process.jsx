import Button1 from '@/components/ui/Button1';
import React from 'react';

const steps = [
  {
    id: 1,
    title: "Planning & Design",
    description: "We’ll define the project goals, create wireframes, and design a user-friendly interface that aligns with your brand.",
  },
  {
    id: 2,
    title: "Development",
    description: "Our team will code and build the website, ensuring responsiveness, performance, and integration of all required features.",
  },
  {
    id: 3,
    title: "Testing & Revisions",
    description: "We’ll test the site on all major devices and browsers, fix any issues, and make final tweaks based on your feedback.",
  },
  {
    id: 4,
    title: "Launch",
    description: "After approval, we’ll deploy the website and ensure everything is running smoothly for a successful launch.",
  },
];

export default function Process() {
  return (
    <section className="bg-black text-white py-20 px-8 md:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Static Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-medium tracking-tight mb-8 leading-tight">
              We build every <br /> digital step with precision.
            </h2>
            <p className="text-gray-400 text-lg mb-4 max-w-md leading-relaxed">
              Our process is engineered to deliver seamless, end-to-end web 
              solutions—from initial logic and interface design to final 
              cloud deployment and scaling.
            </p>
          </div>
          
         <Button1 button1="Discover more"/>
        </div>

        {/* Right Side: Timeline Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gray-800" />

          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-16 group">
                {/* Step Number Circle */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full border border-gray-700 bg-black flex items-center justify-center z-10">
                  <span className="text-sm font-bold italic text-orange-200/80 group-hover:text-orange-400 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}