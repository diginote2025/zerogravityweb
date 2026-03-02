import React from "react";
import Home from "./Home";
import Navbar from "@/layout/Navbar";
import ContactPage from "../contact/Contact";
import AboutSection from "./About";
import Responsive from "./Responsive";
import Services from "./Services";
import Process from "./Process";
import CTA from "./CTA";
import Footer from "@/layout/Footer";

export default function page() {
  return (
    <div className="sub-website overflow-y-scroll  h-screen">
      <Home />
      <AboutSection />
      <Responsive />
      <Services />
      <Process />
      <CTA />
      <Footer />
      <ContactPage />
    </div>
  );
}
