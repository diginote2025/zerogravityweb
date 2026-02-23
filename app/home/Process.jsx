import React from 'react';

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals and user needs to create a comprehensive digital roadmap tailored to your vision.",
  },
  {
    id: 2,
    title: "Architecture & Design",
    description: "Our team crafts intuitive UI/UX designs and robust system architectures, ensuring high performance, accessibility, and scalability.",
  },
  {
    id: 3,
    title: "Development & QA",
    description: "We write clean, efficient code and conduct rigorous automated testing to guarantee a bug-free experience across all browsers.",
  },
  {
    id: 4,
    title: "Deployment & Growth",
    description: "We manage the CI/CD pipeline for a seamless launch and provide ongoing optimization to ensure your product evolves with your users.",
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
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Our process is engineered to deliver seamless, end-to-end web 
              solutions—from initial logic and interface design to final 
              cloud deployment and scaling.
            </p>
          </div>
          
          <button className="mt-12 w-fit bg-[#F15A29] hover:bg-[#d44d21] text-white px-8 py-4 flex items-center gap-4 transition-colors group">
            <span className="font-semibold">Discover more</span>
            <span className="text-xl">+</span>
          </button>
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