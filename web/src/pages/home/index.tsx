import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./sections/hero";
import About from "./sections/about";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
