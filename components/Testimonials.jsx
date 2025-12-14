import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Client Feedback</h2>

        <div className="bg-white/10 p-10 rounded-3xl">
          <h4 className="font-bold mb-2">Bambi Abdullah</h4>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="italic text-gray-300">
            “This project structure clearly demonstrates professional frontend
            architecture.”
          </p>
        </div>
      </div>
    </section>
  );
}
