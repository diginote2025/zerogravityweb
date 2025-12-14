import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.number} className="p-8 rounded-3xl bg-white/10">
            <div className="text-5xl font-bold text-amber-400 mb-4">
              {s.number}
            </div>
            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-300">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
