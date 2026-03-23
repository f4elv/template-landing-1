"use client";

import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export default function HowToOrder() {
  return (
    <section id="contact" className="bg-stone-100">
      <div className="max-w-6xl px-4 sm:px-6 mx-auto py-20 text-center">
        {/* Title */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to order?</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-stone-700 mb-12">Subtitle How to Order</p>
        </Reveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <Reveal delay={0.2}>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
              <div className="text-4xl mb-4">Emoji</div>
              <h3 className="font-semibold text-lg mb-2">title of step 1</h3>
              <p className="text-stone-700 text-sm">
                {siteConfig.howToOrder.step1}
              </p>
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal delay={0.4}>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
              <div className="text-4xl mb-4">emoji</div>
              <h3 className="font-semibold text-lg mb-2">title of step 2</h3>
              <p className="text-stone-700 text-sm">
                {siteConfig.howToOrder.step2}
              </p>
            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal delay={0.6}>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
              <div className="text-4xl mb-4">emoji</div>
              <h3 className="font-semibold text-lg mb-2">title of step 3</h3>
              <p className="text-stone-700 text-sm">
                {siteConfig.howToOrder.step3}
              </p>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={1}>
          <div className="flex flex-col items-center gap-4">
            <a href={siteConfig.contact.instagram} target="_blank">
              <Button variant="secondary">
                Fazer encomenda pelo Instagram
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
