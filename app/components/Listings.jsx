const listings = [
  { title: "Massive Royal Mansion", price: "$133,500" },
  { title: "Verd Residence", price: "$200,000" },
  { title: "Igbinedion", price: "$170,500" },
];

export default function Listings() {
  return (
    <section className="px-6 py-12">
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-1 rounded-full bg-black text-white text-sm">
          Apartment
        </button>
        <button className="px-4 py-1 rounded-full border text-sm">
          Office
        </button>
        <button className="px-4 py-1 rounded-full border text-sm">
          Warehouse
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="bg-gray-300 h-44 rounded-xl mb-4" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="font-bold mt-2">{item.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-full">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
