"use client";
import CircularGallery from "@/components/CircularGallery";
import { siteConfig } from "@/config/site";

const galleryItems = [
  { image: siteConfig.socialProof.image1, text: "" },
  { image: siteConfig.socialProof.image3, text: "" },
  { image: siteConfig.socialProof.image4, text: "" },
  { image: siteConfig.socialProof.image5, text: "" },
  { image: siteConfig.socialProof.image2, text: "" },
  { image: siteConfig.socialProof.image6, text: "" },
  { image: siteConfig.socialProof.image7, text: "" },
  { image: siteConfig.socialProof.image8, text: "" },
  { image: siteConfig.socialProof.image9, text: "" },
  { image: siteConfig.socialProof.image10, text: "" },
  { image: siteConfig.socialProof.image11, text: "" },
  { image: siteConfig.socialProof.image12, text: "" },
];

export default function SocialProof() {
  return (
    <section className="bg-secondary pt-12">
      <div className="">
        <h1 className="text-4xl font-extrabold text-center text-white">
          social proof seciton
        </h1>
        <p className="text-white text-center">
          subtitle of social proof section
        </p>

        {/* Gallery on Computer */}
        <div
          className="hidden md:block"
          style={{ height: "600px", position: "relative" }}
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
          />
        </div>
        {/* Gallery on phone */}
        <div
          className="md:hidden"
          style={{ height: "600px", position: "relative" }}
        >
          <CircularGallery
            bend={0}
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
          />
        </div>
      </div>
    </section>
  );
}
