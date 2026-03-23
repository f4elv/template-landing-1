"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";

export default function Footer() {
  return (
    <footer className="bg-accent border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl text-white font-bold mb-4">
              {siteConfig.businessName}
            </h3>
            <p className="text-stone-100 text-sm mb-4">{siteConfig.tagline}</p>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                className="text-stone-100 hover:text-pink-500 transition"
              >
                {siteConfig.contact.instagramHandler}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-stone-100">
              <li>
                <a href="#inicio" className=" hover:text-pink-500 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-pink-500 transition">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-pink-500 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-pink-500 transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h4 className="font-semibold text-white mb-4">Como encomendar</h4>
            <ul className="space-y-2 text-sm text-stone-100">
              <li>🧵 Escolha um modelo</li>
              <li>💬 Chame na DM</li>
              <li>📦 Receba em casa</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Faça sua encomenda
            </h4>
            <p className="text-sm text-stone-100 mb-4">
              Fale direto pelo Instagram e peça seu amigurumi personalizado.
            </p>

            <a href="https://instagram.com/SEU_USUARIO" target="_blank">
              <Button variant="primary">Ir para o Instagram</Button>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-6 flex flex-col md:flex-col justify-center items-center gap-4 text-sm text-stone-100">
          <span>
            © {new Date().getFullYear()} {siteConfig.businessName}. Todos os
            direitos reservados.
          </span>

          <span className="text-center items-center justify-center">
            Desenvolvido e mantido por
            <a href="https://vortexstudio.com.br" target="blank">
              {" "}
              <span className="font-bold text-primary">Vortex</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
