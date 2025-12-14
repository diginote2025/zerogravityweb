import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Case Studies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-amber-600 mb-2">{p.category}</p>
              <h4 className="font-bold mb-4">{p.title}</h4>
              <button className="text-sm font-medium">Read →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
