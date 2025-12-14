"use client";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <span className="inline-block text-sm font-medium text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
            Web Developer Showcase
          </span>

          <h1 className="text-6xl font-bold">
            <span className="text-gray-900">Modern</span>
            <br />
            <span className="bg-linear-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              React Projects
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            A modular, scalable UI built with Next.js, Tailwind CSS, and modern
            component architecture.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full">
              View Projects
            </button>
            <button className="px-8 py-4 border rounded-full">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
