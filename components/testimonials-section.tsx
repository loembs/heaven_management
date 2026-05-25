import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Heaven Management a transformé mon idée confuse en vraie entreprise structurée. Maintenant je dors tranquille.",
    author: "Fatou D.",
    role: "Créatrice de mode",
    initials: "FD",
  },
  {
    quote: "En 3 mois, ma marque était protégée, mes contrats rédigés et ma comptabilité organisée. Efficacité redoutable.",
    author: "Mamadou S.",
    role: "Développeur freelance",
    initials: "MS",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header - Big Sister style */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Témoignages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Ce que disent nos clients
          </h2>
        </div>

        {/* Testimonials - Big Sister card style */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-3xl p-8 lg:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-semibold text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Chaque entrepreneur mérite un accompagnement complet, clair et humain.
            <br />
            <span className="font-semibold text-foreground">C&apos;est notre engagement.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
