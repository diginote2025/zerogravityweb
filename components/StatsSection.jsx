import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-4xl font-bold mb-4">{s.value}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
