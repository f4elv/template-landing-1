"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
    </>
  );
}
