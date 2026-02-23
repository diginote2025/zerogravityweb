import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/homepage/Hero";
import Stats from "@/components/homepage/Stats";
import WebsiteProcess from "@/components/homepage/WebsiteProcess";
import About from "./home/About";
import Process from "./home/Process";
import CTA from "./home/CTA";
import Services from "./home/Services";
import Responsive from "./home/Responsive";

export default function Page() {
  return (
    <main className=" scrollbar-hide bg-black ">
      <Navbar/>
      <Hero/>
   {/* <Stats/>
   <WebsiteProcess/> */}
<About/>
<Responsive/>
<Services/>
<Process/>
<CTA/>
   <Footer/>
    </main>
  );
}
