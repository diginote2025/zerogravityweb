import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import Hero from "@/components/homepage/Hero";
import About from "./home/About";
import Process from "./home/Process";
import CTA from "./home/CTA";
import Services from "./home/Services";
import Responsive from "./home/Responsive";
import Home from "./home/Home";

export default function Page() {
  return (
    <main className=" scrollbar-hide bg-black ">
      <Navbar />
     <div className="block md:hidden">
        <Home />
      </div>

      {/* Visible on Desktop only (768px and up). 
          'hidden' hides it by default, 'md:block' shows it on medium screens+.
      */}
      <div className="hidden md:block">
        <Hero />
      </div>
      <About />
      <Responsive />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
