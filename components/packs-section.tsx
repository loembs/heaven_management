import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

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
  },
]

export function PacksSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header - Big Sister style */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Offres Packagées
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Nos packs tout-en-un
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Combinez nos services et économisez. Paiement en 2 ou 3 fois disponible dès 300 000 FCFA.
          </p>
        </div>

        {/* Packs grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                pack.popular
                  ? "bg-secondary text-secondary-foreground hover:shadow-orange-500/30"
                  : "bg-white hover:shadow-secondary/30 border border-gray-100"
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-lg font-medium mb-4 ${pack.popular ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                  {pack.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl md:text-5xl font-bold ${pack.popular ? "text-white" : "text-foreground"}`}>
                    {pack.price}
                  </span>
                  <span className={`text-sm ${pack.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                    {pack.currency}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${pack.popular ? "text-primary" : "text-primary"}`} />
                    <span className={pack.popular ? "text-secondary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-sm font-medium transition-colors ${
                  pack.popular
                    ? "bg-white text-secondary hover:bg-white/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Choisir ce pack
                <span className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform ${
                  pack.popular
                    ? "bg-secondary text-white"
                    : "bg-background text-foreground"
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
