import React from "react";
import Image from "next/image";
import Button1 from "@/components/ui/Button1";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image with Decorative Glow */}
        <div className="relative group">
          {/* Subtle Orange Glow behind image */}
          <div className="absolute -inset-4 bg-[#F15A29]/20 rounded-xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 rounded-sm">
            <Image
              src="https://res.cloudinary.com/dnv5c78dl/image/upload/v1772470629/2151252532_fse7nj.jpg" // Replace with your image path
              alt="Web Development Process"
              height={1000}
              unoptimized
              width={1000}
              priority
              className="object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mt-6 leading-tight">
              Crafting digital <br />
              <span className="text-gray-500 italic">masterpieces</span> since
              2014.
            </h2>
          </div>

          <p className="text-xl max-lg:text-base text-gray-300 leading-relaxed font-light">
            I am results-driven Full Stack Developer building scalable,
            high-performance web applications. Skilled in React.js, Next.js,
            Node.js, Express.js, MongoDB, authentication (JWT), Redux Toolkit,
            and Tailwind CSS, with proven success delivering production-ready
            projects across healthcare, advertising, and AI domains. Passionate
            about clean code, performance, and seamless user experiences.
          </p>

          <div className="space-y-6 max-lg:text-base text-gray-500 leading-loose">
            <p>
              I leverage modern web technologies to build digital solutions that
              are scalable, maintainable, and designed to engage your target
              audience effectively. My ultimate goal is to create an online
              presence that clearly communicates your brand, attracts customers,
              and drives business growth.
            </p>

            {/* Minimalist Feature List */}
            {/* <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "Scalable Architecture",
                "Performance Focused",
                "SEO Optimized",
                "Security First",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-[#F15A29] rounded-full" />
                  {item}
                </li>
              ))}
            </ul> */}
          </div>

          {/* Signature Button */}
          <div className="pt-4">
          
            <Button1 button1="Explore our philosophy"/>
          </div>
        </div>
      </div>
    </section>
  );
}
