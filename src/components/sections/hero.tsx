"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.hero.image}
          alt={siteConfig.businessName}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white space-y-4 text-center md:text-left">
            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {siteConfig.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg sm:text-xl text-stone-100 leading-relaxed">
                {siteConfig.hero.subtitle}
              </p>
            </Reveal>

            {/* Botões */}
            <div className="flex flex-col gap-4 mt-8 px-4 md:px-0">
              <Reveal delay={0.4}>
                <a
                  href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  <Button variant="primary" className="w-full">
                    {siteConfig.hero.primaryButton}
                  </Button>
                </a>
              </Reveal>

              <Reveal delay={0.6}>
                <a
                  href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  <Button variant="transparent" className="w-full">
                    {siteConfig.hero.secondaryButton}
                  </Button>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Imagem direita */}
          <div className="hidden md:block">
            <Reveal delay={0.8}>
              <div className="relative w-full h-112.5 overflow-hidden rounded-3xl group">
                <Image
                  src={siteConfig.businessLogo}
                  alt={siteConfig.businessName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
