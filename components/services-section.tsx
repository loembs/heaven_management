"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Building2, Scale, Calculator, Megaphone } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Propriété intellectuelle",
    subtitle: "OAPI · MARQUES · BREVETS · LICENCES",
    price: "À partir de 150 000 FCFA",
    features: [
      "Conseil en stratégie de protection",
      "Dépôt marques, brevets, dessins à l'OAPI",
      "Rédaction contrats : cession, licence, confidentialité",
      "Valorisation d'actifs immatériels",
    ],
  },
  {
    icon: Building2,
    title: "Création & formalisation",
    subtitle: "RCCM · NINEA · STATUTS",
    price: "À partir de 100 000 FCFA",
    features: [
      "Création entreprise complète",
      "Mise en conformité",
      "Suivi déclarations & affiliations",
      "Assistance administrative",
    ],
  },
  {
    icon: Scale,
    title: "Juridique & contrats",
    subtitle: "CONTRATS · CONTENTIEUX · NÉGOCIATION",
    price: "À partir de 75 000 FCFA",
    features: [
      "Contrats prestation, collaboration",
      "Gestion contentieux",
      "Relecture documents sensibles",
      "Accompagnement négociations",
    ],
  },
  {
    icon: Calculator,
    title: "Comptabilité & gestion",
    subtitle: "BILANS · TABLEAUX DE BORD · TPE",
    price: "À partir de 50 000 FCFA/mois",
    features: [
      "Tenue comptabilité simplifiée",
      "Bilans annuels",
      "Tableaux de bord personnalisés",
    ],
  },
  {
    icon: Megaphone,
    title: "Communication & branding",
    subtitle: "NAMING · IDENTITÉ VISUELLE · COMMUNITY",
    price: "À partir de 100 000 FCFA",
    features: [
      "Naming & identité visuelle cohérente",
      "Storytelling de marque authentique",
      "Community management stratégique",
    ],
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Nos Expertises
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Tout ce dont votre entreprise a besoin
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Cinq domaines d&apos;expertise complémentaires. Un accompagnement cohérent, transparent et humain.
          </p>
        </div>

        {/* Services grid with stacked card animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isBlue = index % 2 === 0
            // Calculate stack offset for each card (centered before animation)
            const stackOffset = isVisible ? 0 : (index - 2) * 20
            const stackRotate = isVisible ? 0 : (index - 2) * 3
            const stackScale = isVisible ? 1 : 0.9
            const stackOpacity = isVisible ? 1 : 0.7

            return (
              <div
                key={index}
                className={`group rounded-3xl p-8 flex flex-col transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isBlue
                    ? "bg-secondary text-white hover:shadow-2xl hover:shadow-orange-500/30"
                    : "bg-white text-foreground hover:shadow-2xl hover:shadow-secondary/30 border border-gray-100"
                }`}
                style={{
                  transform: `translateY(${stackOffset}px) rotate(${stackRotate}deg) scale(${stackScale})`,
                  opacity: stackOpacity,
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  isBlue ? "bg-white/20" : "bg-secondary/20"
                }`}>
                  <service.icon className={`h-7 w-7 ${isBlue ? "text-white" : "text-secondary"}`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-2 ${isBlue ? "text-white" : "text-foreground"}`}>
                  {service.title}
                </h3>
                <p className={`text-xs font-medium tracking-wide mb-4 ${
                  isBlue ? "text-white/70" : "text-muted-foreground"
                }`}>
                  {service.subtitle}
                </p>

                <ul className={`space-y-2 mb-6 flex-grow ${isBlue ? "text-white/80" : ""}`}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2 ${
                      isBlue ? "text-white/80" : "text-muted-foreground"
                    }`}>
                      <span className={`mt-1.5 text-xs ${isBlue ? "text-orange-400" : "text-secondary"}`}>●</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className={`pt-4 border-t ${isBlue ? "border-white/20" : "border-border/50"}`}>
                  <p className={`font-semibold mb-3 ${isBlue ? "text-white" : "text-secondary"}`}>
                    {service.price}
                  </p>
                  <Link
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-300 ${
                      isBlue ? "text-white" : "text-foreground"
                    } opacity-0 group-hover:opacity-100`}
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
