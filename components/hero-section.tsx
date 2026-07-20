"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { CreativeCross, ParenthesizedElement, XXLText, AnimatedLine, FloatingElement, HeavenWatermark } from "./creative-elements"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with dramatic overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Professionnels africains en réunion d'affaires"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/20" />

        {/* Animated overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHptMCAyYzEuMTA1IDAgMiAuODk1IDIgMnMtLjg5NSAyLTIgMi0yLS44OTUtMi0yIC44OTUtMiAyLTJ6IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 text-primary/40 animate-rotate-slow">
        <CreativeCross className="w-32 h-32" delay={200} />
      </div>
      <div className="absolute bottom-40 left-20 text-secondary/40">
        <CreativeCross className="w-24 h-24 -rotate-45" delay={400} />
      </div>

      {/* Section number XXL */}
      <div className="absolute top-10 left-10 text-white/5 font-black">
        <XXLText className="text-white/5">01</XXLText>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="lg:col-span-8">
            {/* Parenthesized badge */}
            <FloatingElement delay={100}>
              <ParenthesizedElement className="text-white/80 mb-8">
                <span className="tracking-widest text-xs font-bold uppercase">Heaven Management</span>
              </ParenthesizedElement>
            </FloatingElement>

            {/* Main headline with expressive typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              <div className="overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
                >
                  Votre
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  className={`inline-block text-primary transition-transform duration-1000 delay-200 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
                >
                  entreprise,
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-1000 delay-400 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
                >
                  managée
                </span>
                <span className="text-white/50 inline-block mx-2">/</span>
                <span
                  className={`inline-block transition-transform duration-1000 delay-600 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
                >
                  de A à Z
                </span>
              </div>
            </h1>

            {/* Animated line 
            <div className="my-10">
              <AnimatedLine className="w-48" />
            </div>

            <FloatingElement delay={800}>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-12">
                Propriété intellectuelle,Création et formalisation d'entreprise, Comptabilité d'entreprise de base, Accompagnement juridique,
                <span className="text-primary font-bold"> communication</span> un seul interlocuteur pour toutes vos bases business.
              </p>
            </FloatingElement>
            */}

            {/* CTA Buttons with creative styling */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <FloatingElement delay={1000}>
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 sm:gap-4 bg-white text-foreground px-5 py-3 sm:px-8 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Obtenir mon devis gratuit</span>
                  <span className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 z-10">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </FloatingElement>

              <FloatingElement delay={1200}>
                <Link
                  href="#services"
                  className="group inline-flex items-center gap-3 sm:gap-4 border-2 border-white/50 text-white px-5 py-3 sm:px-8 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-foreground transition-all duration-500"
                >
                  Découvrir nos services
                  <span className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-foreground group-hover:rotate-45 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              </FloatingElement>
            </div>
          </div>

          {/* Right column - Decorative elements */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              {/* Heaven watermark */}
              <div className="absolute -bottom-20 -right-20">
                <HeavenWatermark className="text-white/5" />
              </div>

              {/* Large decorative number */}
              <div className="text-[280px] font-black text-white/5 leading-none select-none">
                01
              </div>

              {/* Floating crosses */}
              <div className="absolute top-0 right-0">
                <CreativeCross className="text-primary/60 w-20 h-20" delay={600} />
              </div>
              <div className="absolute bottom-20 left-10">
                <CreativeCross className="text-secondary/60 w-16 h-16 rotate-90" delay={800} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator 
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <AnimatedLine className="w-24" />
        <div className="text-white/60 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        
      </div>*/}
    </section>
  )
}
