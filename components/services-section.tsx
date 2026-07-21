"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Building2, Scale, Calculator, Megaphone } from "lucide-react"
import { CreativeCross, ParenthesizedElement, AnimatedLine, FloatingElement, HeavenWatermark } from "./creative-elements"

const services = [
  {
    icon: Shield,
    title: "Propriété intellectuelle",
    subtitle: "MARQUES · BREVETS · LICENCES · DMI, Droit d'auteur",
    price: "",
    features: [
      "Accompagnement dans les procédures de dépôts",
      "Rédaction et gestion des contrats: cession, licence, confidentialité (NDA)",
      "⁠Gestion des droits d’auteur",
      "Conseil en stratégie de protection",
    ],
    color: "primary",
  },
  {
    icon: Building2,
    title: "Création & formalisation d'entreprise ",
    subtitle: "RCCM · NINEA · STATUTS",
    price: "",
    features: [
      "Création entreprise complète",
      "Création association",
      "Assistance administrative",
    ],
    color: "secondary",
  },
  {
    icon: Scale,
    title: "Accompagnement Juridique ",
    subtitle: "CONTRATS · CONTENTIEUX · NÉGOCIATION",
    price: "",
    features: [
      "Contrats prestation, collaboration",
      "Gestion contentieux",
      "Relecture documents sensibles",
      "Accompagnement négociations",
    ],
    color: "primary",
  },
  {
    icon: Calculator,
    title: "Comptabilité d'entreprise de base ",
    subtitle: "BILANS · TABLEAUX DE BORD · TPE",
    price: "",
    features: [
      "Tenue comptabilité simplifiée",
      "Bilans annuels",
      "Tableaux de bord personnalisés",
    ],
    color: "secondary",
  },
  {
    icon: Megaphone,
    title: "Communication",
    subtitle: "LOGO · SITE INTERNET · VISUELS · RÉSEAUX SOCIAUX",
    price: "",
    features: [
      "Creation de l’identité visuelle",
      "Community management",
      "Communication marketing / commerciale",
    ],
    color: "primary",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
    <section id="services" ref={sectionRef} className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating decorative crosses */}
      <div className="absolute top-20 right-20 text-primary/20">
        <CreativeCross className="w-40 h-40" delay={200} />
      </div>
      <div className="absolute bottom-40 left-10 text-secondary/20">
        <CreativeCross className="w-32 h-32 -rotate-90" delay={400} />
      </div>

      {/* Large section number */}
      <div className="absolute top-10 right-10 text-foreground/5 font-black text-[200px] leading-none select-none -z-10">
        02
      </div>

      {/* Heaven watermark */}
      <div className="absolute bottom-10 right-10 text-primary/5 -z-10">
        <HeavenWatermark />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header with creative layout */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-2">
            <FloatingElement delay={100}>
              <div className="sticky top-32">
                <ParenthesizedElement>
                  <span className="text-primary tracking-widest text-xs font-bold uppercase">02</span>
                </ParenthesizedElement>
                <div className="mt-8">
                  <CreativeCross className="text-primary w-16 h-16" delay={300} />
                </div>
              </div>
            </FloatingElement>
          </div>

          <div className="lg:col-span-10">
            <FloatingElement delay={200}>
              <div className="mb-8">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  Nos Expertises
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95] mb-8">
                Tout ce dont votre
                <br />
                <span className="text-primary">entreprise</span> a besoin
              </h2>
              <div className="w-32 mb-8">
                <AnimatedLine />
              </div>
              <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Cinq domaines d'expertise complémentaires. Un accompagnement
                <span className="text-foreground font-bold"> cohérent</span>,
                <span className="text-foreground font-bold"> transparent</span> et
                <span className="text-foreground font-bold"> humain</span>.
              </p>
            </FloatingElement>
          </div>
        </div>

        {/* Services grid with creative cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isPrimary = service.color === "primary"

            return (
              <FloatingElement key={index} delay={index * 150}>
                <div
                  className={`group relative rounded-[2rem] p-10 overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                    isPrimary
                      ? "bg-primary text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  {/* Background decorative cross */}
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-transform duration-500 group-hover:rotate-90 text-white">
                    <CreativeCross className="w-40 h-40" />
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 bg-white/20">
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold tracking-widest uppercase mb-6 text-white/60">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-3 mb-8 text-white/80">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-start gap-3">
                        <span className="mt-1 text-lg text-white">
                          ●
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-white/20">
                    <p className="font-black text-2xl mb-4 text-white">
                      {service.price}
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-4 text-white"
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FloatingElement>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <FloatingElement delay={1000}>
          <div className="mt-20 text-center">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-6 rounded-full text-lg font-bold hover:bg-foreground hover:text-white transition-all duration-500"
            >
              Démarrer mon projet
              <span className="w-12 h-12 bg-primary-foreground text-primary rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
