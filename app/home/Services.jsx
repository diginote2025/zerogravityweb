import React from 'react';

const services = [
  {
    id: 1,
    title: "Custom Web Apps",
    description: "Tailored full-stack solutions built with React and Next.js, focusing on high performance and unique business logic.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Robust online stores with seamless payment integrations, inventory management, and optimized checkout flows.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centric design systems that balance aesthetic appeal with intuitive navigation to drive conversion.",
  },
  {
    id: 4,
    title: "API Development",
    description: "Secure, scalable RESTful and GraphQL APIs to connect your mobile apps and third-party services smoothly.",
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    description: "Expert deployment and serverless architecture setup on AWS or Vercel for maximum uptime and speed.",
  },
  {
    id: 6,
    title: "Performance Audits",
    description: "Deep-dive technical SEO and speed optimization to ensure your site hits perfect Core Web Vitals scores.",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white/10 text-xs font-semibold uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Everything you need to <br /> scale your digital presence.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-[#111111] border border-white/5 p-8 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/40 hover:bg-[#161616]"
            >
              <div>
                {/* Number Circle */}
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-8 transition-colors group-hover:border-orange-500/50">
                  <span className="text-sm font-bold italic text-orange-400/80">
                    {service.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-medium mb-4 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* White Button with Plus Icon like reference */}
              <button className="flex items-center justify-between w-fit bg-white text-black px-6 py-3 font-semibold group-hover:bg-[#F15A29] group-hover:text-white transition-all duration-300">
                <span className="mr-4">Learn more</span>
                <span className="text-xl">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}