"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import SocialProof from "@/components/sections/socialProof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <SocialProof />
      </main>
    </>
  );
}
