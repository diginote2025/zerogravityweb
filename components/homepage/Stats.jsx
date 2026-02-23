export default function Stats() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-black px-10 py-12 text-white sm:grid-cols-3">
          
          <StatItem value="8+" label="Years Experience" />
          <StatItem value="120+" label="Projects Completed" />
          <StatItem value="60+" label="Happy Clients" />

        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl font-bold md:text-5xl">
        {value}
      </span>
      <span className="mt-2 text-sm text-gray-400">
        {label}
      </span>
    </div>
  );
}
