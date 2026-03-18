"use client";

import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export default function HowToOrder() {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How to order?</h2>

        <p className="text-gray-600 mb-12">Subtitle How to Order</p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">Emoji</div>
            <h3 className="font-semibold text-lg mb-2">title of step 1</h3>
            <p className="text-gray-600 text-sm">
              {siteConfig.howToOrder.step1}
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">emoji</div>
            <h3 className="font-semibold text-lg mb-2">title of step 2</h3>
            <p className="text-gray-600 text-sm">
              {siteConfig.howToOrder.step2}
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">emoji</div>
            <h3 className="font-semibold text-lg mb-2">title of step 3</h3>
            <p className="text-gray-600 text-sm">
              {siteConfig.howToOrder.step3}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <a href={siteConfig.contact.instagram} target="_blank">
            <Button variant="transparent" className="bg-pink-500">
              Fazer encomenda pelo Instagram
            </Button>
          </a>

          <span className="text-sm text-gray-500">
            💬 Respondemos rapidinho na DM
          </span>
        </div>
      </div>
    </section>
  );
}
