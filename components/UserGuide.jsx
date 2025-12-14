export default function UserGuide() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow">
        <h2 className="text-4xl font-bold mb-10">
          How This Project Was Built
        </h2>

        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex gap-6 mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
              {step}
            </div>
            <p className="text-gray-600">
              Step {step}: Component-driven development with clean separation
              of concerns.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
