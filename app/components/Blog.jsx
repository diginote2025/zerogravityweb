export default function Blog() {
  return (
    <section className="px-6 py-14">
      <h2 className="text-xl font-semibold mb-6">Blog Section</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-gray-300 h-32 rounded-lg mb-3" />
            <p className="font-medium">$133,500</p>
          </div>
        ))}
      </div>
    </section>
  );
}
