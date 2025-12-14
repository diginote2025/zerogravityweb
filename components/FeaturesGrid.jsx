import { agents } from "@/data/agents";

const FeaturesGrid = () => {
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              {index + 1}
            </div>
            <h4 className="font-bold mb-2">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
