"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import SocialProof from "@/components/sections/socialProof";
import HowToOrder from "@/components/sections/howToOrder";
import About from "@/components/sections/about";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <SocialProof />
        <HowToOrder />
        <About />
      </main>
      <Footer />
    </>
  );
}
