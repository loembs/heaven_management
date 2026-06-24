"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { CreativeCross, ParenthesizedElement, FloatingElement, AnimatedLine } from "./creative-elements"
import { useState } from "react"

const packs = [
  {
    name: "Starter",
    price: "300 000",
    currency: "FCFA",
    popular: false,
    features: [
      "Formalités création entreprise",
      "Dépôt à l'OAPI",
      "Logo + charte graphique",
      "3 contrats types",
    ],
    color: "secondary",
  },
  {
    name: "Croissance",
    price: "500 000",
    currency: "FCFA",
    popular: true,
    features: [
      "Tout le Pack Starter",
      "Comptabilité 2 mois",
      "Stratégie de communication",
      "Accompagnement personnalisé",
    ],
    color: "primary",
  },
  {
    name: "Premium",
    price: "750 000",
    currency: "FCFA",
    popular: false,
    features: [
      "Tout le Pack Croissance",
      "Suivi juridique annuel",
      "Community management",
      "Tableaux de bord personnalisés",
    ],
    color: "secondary",
  },
]

export function PacksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 lg:py-48 bg-muted relative overflow-hidden">
      {/* Floating decorative crosses */}
      <div className="absolute top-20 left-20 text-primary/20">
        <CreativeCross className="w-56 h-56 rotate-45" />
      </div>
      <div className="absolute bottom-40 right-20 text-secondary/20">
        <CreativeCross className="w-40 h-40 -rotate-90" />
      </div>

      {/* Large section number */}
      <div className="absolute top-10 right-10 text-foreground/5 font-black text-[160px] leading-none select-none -z-10">
        04
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-2">
            <FloatingElement delay={100}>
              <div className="sticky top-32">
                <ParenthesizedElement>
                  <span className="text-primary tracking-widest text-xs font-bold uppercase">04</span>
                </ParenthesizedElement>
              </div>
            </FloatingElement>
          </div>

          <div className="lg:col-span-10">
            <FloatingElement delay={200}>
              <div className="mb-8">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  Offres Packagées
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95] mb-8">
                Nos packs
                <br />
                <span className="text-primary">tout-en-un</span>
              </h2>
              <div className="w-32 mb-8">
                <AnimatedLine />
              </div>
              <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Combinez nos services et économisez. Paiement en 2 ou 3 fois disponible dès 300 000 FCFA.
              </p>
            </FloatingElement>
          </div>
        </div>

        {/* Packs grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packs.map((pack, index) => {
            const isPrimary = pack.color === "primary"
            const isHovered = hoveredIndex === index

            return (
              <FloatingElement key={index} delay={index * 150}>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative rounded-[2rem] p-10 transition-all duration-500 cursor-pointer ${
                    pack.popular
                      ? "bg-primary text-primary-foreground scale-105 shadow-2xl shadow-primary/30"
                      : isHovered
                      ? "bg-foreground text-background scale-105 shadow-2xl"
                      : "bg-white text-foreground border-2 border-border"
                  }`}
                >
                  {/* Popular badge */}
                  {pack.popular && (
                    <div className="absolute -top-4 left-10">
                      <span className="bg-foreground text-background px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                        Populaire
                      </span>
                    </div>
                  )}

                  {/* Decorative cross */}
                  <div
                    className={`absolute -bottom-10 -right-10 opacity-10 transition-transform duration-700 ${
                      isHovered ? "rotate-90 scale-150" : "rotate-0"
                    } ${pack.popular ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    <CreativeCross className="w-48 h-48" delay={index * 200} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3
                      className={`text-lg font-bold mb-2 ${
                        pack.popular
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {pack.name}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span
                        className={`text-6xl font-black ${
                          pack.popular ? "text-white" : "text-foreground"
                        }`}
                      >
                        {pack.price}
                      </span>
                      <span
                        className={`text-sm ${
                          pack.popular
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {pack.currency}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className={`h-6 w-6 shrink-0 mt-0.5 ${
                              pack.popular || isHovered
                                ? "text-white"
                                : "text-primary"
                            }`}
                          />
                          <span
                            className={`${
                              pack.popular
                                ? "text-primary-foreground/90"
                                : isHovered
                                ? "text-background/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full text-base font-bold transition-all duration-300 ${
                        pack.popular
                          ? "bg-white text-primary hover:bg-white/90"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      Choisir ce pack
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300 ${
                          pack.popular
                            ? "bg-primary text-white"
                            : "bg-background text-foreground"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </FloatingElement>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <FloatingElement delay={1000}>
          <div className="mt-24 text-center">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-4 bg-foreground text-background px-12 py-6 rounded-full text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Démarrer avec un pack
              <span className="w-12 h-12 bg-background text-foreground rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
