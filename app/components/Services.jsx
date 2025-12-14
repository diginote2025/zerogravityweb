export default function Services() {
  const services = [
    "Furniture Design",
    "Interior Details",
    "Home Revamping",
  ];

  return (
    <section className="px-6 py-16">
      <h2 className="text-xl font-semibold mb-6">Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s}
            className={`p-6 rounded-2xl ${
              i === 0 ? "bg-black text-white" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">{s}</h3>
            <p className="text-sm opacity-80">
              The design of furniture holds substantial influence on everyday life.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
