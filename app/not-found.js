import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      
      {/* IMAGE */}
      <div className="max-w-md w-full">
        <Image
          src="https://res.cloudinary.com/dnv5c78dl/image/upload/v1771694207/cute-astronaut-lost-space-404-cartoon-vector-icon-illustration-science-technology-isolated-flat_elfmls.png"
          alt="Page Not Found"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* TEXT */}
      <h1 className="text-3xl md:text-4xl font-bold">
        Page Not Found
      </h1>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* BUTTON */}
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}