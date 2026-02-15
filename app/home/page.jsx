import React from "react";
import Home from "./Home";
import Navbar from "@/components/Navbar";
import ContactPage from "../contact/Contact";

export default function page() {
  return (
    <div className="sub-website overflow-y-scroll  h-screen">
      <Home />
      <ContactPage/>
    </div>
  );
}
