"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center transition-all duration-500 ${
              isScrolled
                ? "opacity-100 scale-100"
                : "lg:opacity-100 opacity-0 scale-95"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Heaven Management"
              width={140}
              height={52}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <Link
              href="#accueil"
              className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-2 inline-flex items-center gap-1 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="#services"
              className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-2 inline-flex items-center gap-1 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
            >
              Services
            </Link>
            <Link
              href="#apropos"
              className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-2 inline-flex items-center gap-1 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
            >
              À Propos
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-2 inline-flex items-center gap-1 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className={`group relative inline-flex items-center gap-4 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden transition-all duration-500 ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-white"
                  : "bg-white text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <span className="relative z-10">Démarrer</span>
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 relative z-10 ${
                  isScrolled
                    ? "bg-primary-foreground text-primary"
                    : "bg-foreground text-white"
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-3 transition-all duration-300 rounded-full ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-8 bg-white border-t border-gray-100 animate-slide-down">
            <div className="flex flex-col gap-6">
              <Link
                href="#accueil"
                className="text-foreground font-bold tracking-widest uppercase text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="#services"
                className="text-foreground font-bold tracking-widest uppercase text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#apropos"
                className="text-foreground font-bold tracking-widest uppercase text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                href="#contact"
                className="text-foreground font-bold tracking-widest uppercase text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-4 bg-foreground text-background px-8 py-5 rounded-full text-sm font-bold tracking-widest uppercase mt-4"
              >
                Démarrer mon projet
                <span className="w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
