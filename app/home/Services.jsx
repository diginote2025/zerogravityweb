import Button1 from '@/components/ui/Button1';
import React from 'react';

const services = [
  {
    id: 1,
    title: "Static and Landing Page Website",
    features: [
      "One scrollable page",
      "Custom design & responsive layout",
      "Basic animations",
      "Whatsapp Number Integration",
      "Contact form or CTA section",
      "CDN Image from Cloudinary for fast loading"
    ],
  },
  {
    id: 2,
    title: "Static Multi-Page Website",
    features: [
      "3 to 5 static pages (Home, About, etc.)",
      "Responsive design",
      "Contact form & Google Maps integration",
      "Whatsapp Number Integration",
      "Contact form or CTA Section",
      "CDN Image from Cloudinary for fast loading"
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 rounded-full border border-white/5">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Everything you need to <br className='max-lg:hidden' /> scale your digital presence.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-[#111111] border border-white/5 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-500/30 hover:bg-[#141414] relative overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-all duration-500" />

              <div>
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:border-orange-500/50 group-hover:scale-110">
                  <span className="text-sm font-bold italic text-orange-400/80">
                    0{service.id}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-medium mb-6 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Features List */}
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-400 text-sm md:text-base leading-relaxed">
                      <span className="text-orange-500/60 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 mt-auto">
                <Button1 button1="Check Pricing" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}