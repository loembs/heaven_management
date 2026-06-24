import Link from "next/link"
import Image from "next/image"
import { CreativeCross, ParenthesizedElement } from "./creative-elements"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
      </div>

      {/* Floating decorative crosses */}
      <div className="absolute top-20 right-20 text-white/5">
        <CreativeCross className="w-64 h-64 rotate-45" />
      </div>
      <div className="absolute bottom-20 left-20 text-white/5">
        <CreativeCross className="w-48 h-48 -rotate-90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo.png"
                alt="Heaven Management"
                width={140}
                height={52}
                className="object-contain"
              />
            </div>
            <p className="text-secondary-foreground/70 max-w-md leading-relaxed text-lg mb-6">
              Votre entreprise, managée de A à Z. Propriété intellectuelle, juridique, comptabilité, formalités, communication — un seul interlocuteur pour toutes vos bases business.
            </p>
            <ParenthesizedElement className="text-secondary-foreground/50">
              <span className="text-xs tracking-widest font-bold uppercase">Dakar, Sénégal</span>
            </ParenthesizedElement>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-black text-white mb-6 text-lg tracking-tight">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#accueil" className="text-secondary-foreground/70 hover:text-white transition-colors font-medium">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-foreground/70 hover:text-white transition-colors font-medium">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-secondary-foreground/70 hover:text-white transition-colors font-medium">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-foreground/70 hover:text-white transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white mb-6 text-lg tracking-tight">Contact</h4>
            <ul className="space-y-4 text-secondary-foreground/70">
              <li className="font-medium">+221 788 909 451</li>
              <li className="font-medium">Sacré-Coeur 3, Dakar</li>
              <li className="font-medium">Lun-Ven, 9h-17h</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-10 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-secondary-foreground/50 text-sm font-medium">
            © 2026 Heaven Management. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link
              href="#"
              className="text-secondary-foreground/50 hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-secondary-foreground/50 hover:text-white transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="https://www.instagram.com/heaven_management_74/"
              target="_blank"
              className="text-secondary-foreground/50 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
