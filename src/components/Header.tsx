"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

import { Button } from "@/components/Button";

import { scrollToSection, scrollToTop } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/90 backdrop-blur-md shadow-md" : "bg-primary"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name of the Business */}
          <button
            onClick={scrollToTop}
            className={`text-2xl font-extrabold transition-colors duration-300 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}
          >
            {siteConfig.businessName}
          </button>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 font-medium">
            <Button
              variant="transparent"
              className={`${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrollToSection("")}
            >
              Catálogo
            </Button>
            <Button
              variant="transparent"
              className={`${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrollToSection("")}
            >
              Sobre Nós
            </Button>
            <Button
              variant="transparent"
              className={`${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrollToSection("")}
            >
              Contato
            </Button>
            <a
              href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 font-extrabold"
            >
              <Button variant="secondary">CTA</Button>
            </a>
          </nav>
          {/* Mobile CTA */}
          <a
            href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden ml-6 font-extrabold"
          >
            <Button variant="secondary">CTA</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
