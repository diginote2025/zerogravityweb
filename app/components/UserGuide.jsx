export default function UserGuide() {
  return (
    <section className="px-6 py-14 bg-white rounded-3xl mx-6">
      <div className="grid md:grid-cols-2 gap-10">
        <h2 className="text-3xl font-bold">
          User guide for <br /> first timer
        </h2>

        <div className="space-y-4 border-l pl-6">
          {[1, 2, 3, 4].map((step) => (
            <div key={step}>
              <h4 className="font-semibold">Step {step}</h4>
              <p className="text-sm text-gray-600">
                Search – Use filter to find properties that match your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
