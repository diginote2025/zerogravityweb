export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 px-6 py-14 bg-gray-200 rounded-b-3xl">
      <div>
        <p className="text-sm mb-2">Welcome To Corazon</p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Find Your Dream <br /> Home With Ease.
        </h2>

        <p className="text-gray-700 mb-6 max-w-md">
          Discover top listings, explore virtual tours, and connect with trusted agents in minutes.
        </p>

        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Browse Listing
          </button>
          <button className="border px-6 py-2 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-gray-300 rounded-2xl min-h-[260px]" />
    </section>
  );
}
