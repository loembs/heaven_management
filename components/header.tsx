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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className={`flex items-center transition-opacity duration-300 ${isScrolled ? "opacity-100" : "lg:opacity-100 opacity-0"}`}>
            <Image
              src="/logo.png"
              alt="Heaven Management"
              width={120}
              height={44}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="#accueil"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="#services"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              Nos Services
            </Link>
            <Link
              href="#apropos"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              À Propos
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className={`group flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-foreground hover:bg-white/90"
              }`}
            >
              Démarrer mon projet
              <span className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform ${
                isScrolled ? "bg-white text-foreground" : "bg-foreground text-white"
              }`}>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 bg-white border-t border-gray-200">
            <div className="flex flex-col gap-6">
              <Link
                href="#accueil"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Services
              </Link>
              <Link
                href="#apropos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium mt-2"
              >
                Démarrer mon projet
                <span className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center">
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
