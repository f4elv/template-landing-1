import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import Image from "next/image";
import { Sigmar_One } from "next/font/google";

export default function Products() {
  return (
    <section id="products" className="py-12 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Title of products seciton</h2>
          <p className="text-stone-700">subtitle of products section</p>
        </div>
        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.2}>
              <div className="relative h-full rounded-xl overflow-hidden group shadow-lg  p-6 flex flex-col min-h-full cursor-pointer bg-accent">
                <div className="relative h-75 mb-4 rounded-md shadow-md ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-md mb-4"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white border-t border-primary pt-4">
                  {product.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
        {/* CTA button */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">CTA to instagram</h3>
          <a href={siteConfig.contact.instagram}>
            <Button variant="primary" className="text-2xl">
              {siteConfig.contact.instagramHandler}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
