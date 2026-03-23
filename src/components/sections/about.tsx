"use client";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-stone-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Reveal delay={0.1}>
            <div className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden">
              <Image
                src={siteConfig.about.image}
                alt={siteConfig.businessName}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <span className="text-pink-500 font-medium">
                {siteConfig.about.subtitle || "sobre"} {siteConfig.businessName}
              </span>
            </Reveal>

            <Reveal delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold">
                {siteConfig.about.title}
              </h2>
            </Reveal>

            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.4 + index * 0.1}>
                <p className="text-gray-600">{paragraph}</p>
              </Reveal>
            ))}

            {/* Highlights */}
            <Reveal delay={0.7}>
              <div className="flex flex-wrap gap-3 pt-4">
                {siteConfig.about.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </Reveal>

            {siteConfig.about.tagline && (
              <Reveal delay={0.8}>
                <p className="text-pink-500 font-medium pt-4">
                  {siteConfig.about.tagline}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
