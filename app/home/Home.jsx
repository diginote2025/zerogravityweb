import Navbar from "./Navbar";

export default function Home() {
  return (
    <section className="relative overflow-hidden max-lg:h-screen bg-black text-white">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dnv5c78dl/video/upload/v1765710804/vecteezy_animated-flying-through-the-stars-and-blue-nebula-in-space_8078506_uvvzmb.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative scrollbar-hide py-30">
        {/* <Navbar /> */}

        <div className="z-10 max-w-5xl px-6  text-center  ">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs text-gray-300 backdrop-blur">
            🚀 Web Development Company
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Professional Website Solutions <br />
            <span className="text-orange-500">That Drive Business Growth</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-white">
            We design and develop fast, secure, and scalable websites using
            modern technologies—focused on performance, user experience, and
            results.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black hover:bg-orange-400 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="/projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
