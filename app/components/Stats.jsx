export default function Stats() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-6 py-14">
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-bold">10+ Million</h3>
          <p className="text-sm text-gray-600">Active users connected</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">8x More</h3>
          <p className="text-sm text-gray-600">Engagement growth</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">1+ Million</h3>
          <p className="text-sm text-gray-600">Listings published</p>
        </div>
      </div>

      <div className="bg-gray-300 rounded-2xl min-h-[260px]" />
    </section>
  );
}
