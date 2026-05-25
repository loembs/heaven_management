import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Professionnels africains en réunion d'affaires"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Main headline - Big Sister style */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Votre entreprise,
            <br />
            <span className="text-primary">managée de A à Z</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mt-8 max-w-xl leading-relaxed">
            Propriété intellectuelle, juridique, comptabilité, formalités, communication  un seul interlocuteur pour toutes vos bases business.
          </p>

          {/* CTA Buttons - Big Sister style with arrow in circle */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link 
              href="#contact" 
              className="group inline-flex items-center gap-3 bg-white text-foreground px-6 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Obtenir mon devis gratuit
              <span className="w-10 h-10 bg-foreground text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link 
              href="#services" 
              className="group inline-flex items-center gap-3 border border-white/30 text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Découvrir nos services
              <span className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
