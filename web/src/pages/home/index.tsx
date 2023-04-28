import React from "react";
import Hero from "./sections/hero";
import About from "./sections/about";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
}
