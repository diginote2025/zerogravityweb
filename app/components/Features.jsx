export default function Features() {
  const features = [
    "Private Pool",
    "Private Garden",
    "Spacious Balcony",
  ];

  return (
    <section className="flex flex-wrap justify-center gap-6 py-10">
      {features.map((f) => (
        <div
          key={f}
          className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm"
        >
          <span className="w-4 h-4 bg-gray-400 rounded-full" />
          <span className="text-sm font-medium">{f}</span>
        </div>
      ))}
    </section>
  );
}
