"use client";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import Image from "next/image";

export default function Products() {
  return (
    <section id="catalog" className="py-12 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">{siteConfig.products.title}</h2>
            <p className="text-stone-700 mt-2">{siteConfig.products.subtitle}</p>
          </div>
        </Reveal>

        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.products.items.map((item, index) => (
            <Reveal key={item.id} delay={0.2 + index * 0.1}>
              <div className="relative h-full rounded-xl overflow-hidden group shadow-lg p-6 flex flex-col min-h-full cursor-pointer bg-accent">
                <div className="relative h-75 mb-4 rounded-md shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-md"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white border-t border-primary pt-4">
                  {item.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA button */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">{siteConfig.products.CTA}</h3>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="text-2xl">
                {siteConfig.contact.instagramHandler}
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
