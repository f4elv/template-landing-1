"use client";

import CircularGallery from "@/components/CircularGallery";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

const galleryItems = [
  { image: siteConfig.socialProof.image1 },
  { image: siteConfig.socialProof.image2 },
  { image: siteConfig.socialProof.image3 },
  { image: siteConfig.socialProof.image4 },
  { image: siteConfig.socialProof.image5 },
  { image: siteConfig.socialProof.image6 },
  { image: siteConfig.socialProof.image7 },
  { image: siteConfig.socialProof.image8 },
  { image: siteConfig.socialProof.image9 },
  { image: siteConfig.socialProof.image10 },
  { image: siteConfig.socialProof.image11 },
  { image: siteConfig.socialProof.image12 },
];

export default function SocialProof() {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-white">
              {siteConfig.socialProof.title}
            </h2>
            <p className="text-white mt-2">{siteConfig.socialProof.subtitle}</p>
          </div>
        </Reveal>

        {/* Gallery on Computer */}
        <Reveal delay={0.3}>
          <div className="hidden md:block" style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={galleryItems}
              bend={3}
              borderRadius={0.05}
              scrollEase={0.02}
              scrollSpeed={2}
            />
          </div>
        </Reveal>

        {/* Gallery on Phone */}
        <Reveal delay={0.3}>
          <div className="md:hidden" style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={galleryItems}
              bend={0}
              borderRadius={0.05}
              scrollEase={0.02}
              scrollSpeed={2}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
