import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Heaven Management"
                width={120}
                height={44}
                className="object-contain"
              />
            </div>
            <p className="text-secondary-foreground/70 max-w-md leading-relaxed">
              Votre entreprise, managée de A à Z. Propriété intellectuelle, juridique, comptabilité, formalités, communication un seul interlocuteur pour toutes vos bases business.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#accueil" className="text-secondary-foreground/70 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-foreground/70 hover:text-white transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-secondary-foreground/70 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-foreground/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li>+221 788 909 451</li>
              <li>Sacré-Coeur 3, Dakar</li>
              <li>Lun-Ven, 9h-17h</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © 2026 Heaven Management. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
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
              className="text-secondary-foreground/50 hover:text-white transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Big brand text - Big Sister style */}
     
    </footer>
  )
}
