import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";
import Stats from "@/pages/Stats";
import WebsiteProcess from "@/pages/WebsiteProcess";

export default function Page() {
  return (
    <main className=" scrollbar-hide bg-black ">
      <Navbar/>
      <Hero/>
   {/* <Stats/>
   <WebsiteProcess/> */}

   <Footer/>
    </main>
  );
}
