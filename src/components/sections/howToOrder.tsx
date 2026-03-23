"use client";

import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export default function HowToOrder() {
  return (
    <section id="contact" className="bg-stone-100 py-20">
      <div className="max-w-6xl px-4 sm:px-6 mx-auto text-center">
        {/* Title */}
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {siteConfig.howToOrder.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-stone-700 mb-12">
            {siteConfig.howToOrder.subtitle}
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {siteConfig.howToOrder.steps.map((step, index) => (
            <Reveal key={index} delay={0.3 + index * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
                <div className="text-4xl mb-4">{step.emoji}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-stone-700 text-sm">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.6}>
          <div className="flex flex-col items-center gap-4">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                {siteConfig.howToOrder.cta}
              </Button>
            </a>

            <span className="text-sm text-gray-500">
              💬 Respondemos rapidinho na DM
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
