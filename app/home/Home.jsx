export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs text-gray-300 backdrop-blur">
          🔥 Solutions
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Transform Your Data Into <br />
          <span className="text-orange-500">
            Actionable Solutions
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400">
          Unlock the full potential of your data with our suite of analytics
          tools designed for insight and growth.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black hover:bg-orange-400 transition">
            Download App
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10 transition">
            Talk to Sales
          </button>
        </div>
      </div>

  
    </section>
  );
}
