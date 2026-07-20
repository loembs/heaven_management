"use client"

import { Star, Quote } from "lucide-react"
import { CreativeCross, ParenthesizedElement, FloatingElement, AnimatedLine } from "./creative-elements"
import { useState } from "react"

const testimonials = [
  {
    quote: "Heaven Management a transformé mon idée confuse en vraie entreprise structurée. Maintenant je dors tranquille.",
    author: "Fatou D.",
    role: "Créatrice de mode",
    initials: "FD",
    color: "primary",
  },
  {
    quote: "En 7 mois, ma marque était protégée, mes contrats rédigés et ma comptabilité organisée. Efficacité redoutable.",
    author: "Mamadou S.",
    role: "Développeur freelance",
    initials: "MS",
    color: "secondary",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-32 lg:py-48 bg-muted relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Floating decorative crosses */}
      <div className="absolute top-40 left-20 text-secondary/20">
        <CreativeCross className="w-40 h-40 rotate-90" />
      </div>
      <div className="absolute bottom-40 right-20 text-primary/20">
        <CreativeCross className="w-48 h-48 -rotate-45" />
      </div>

      {/* Large section number */}
      <div className="absolute bottom-10 left-10 text-foreground/5 font-black text-[140px] leading-none select-none -z-10">
        05
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-2">
            <FloatingElement delay={100}>
              <div className="sticky top-32">
                <ParenthesizedElement>
                  <span className="text-primary tracking-widest text-xs font-bold uppercase">05</span>
                </ParenthesizedElement>
              </div>
            </FloatingElement>
          </div>

          <div className="lg:col-span-10">
            <FloatingElement delay={200}>
              <div className="mb-8">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  Témoignages
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95] mb-8">
                Ce que disent nos
                <br />
                <span className="text-primary">clients</span>
              </h2>
              <div className="w-32 mb-8">
                <AnimatedLine />
              </div>
            </FloatingElement>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FloatingElement key={index} delay={index * 200}>
              <div
                className={`group relative rounded-[2rem] p-12 transition-all duration-500 hover:scale-[1.02] ${
                  testimonial.color === "primary"
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground border-2 border-border"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Decorative quote icon */}
                <div
                  className={`absolute top-8 right-8 opacity-10 ${
                    testimonial.color === "primary"
                      ? "text-background"
                      : "text-foreground"
                  }`}
                >
                  <Quote className="w-24 h-24" />
                </div>

                {/* Decorative cross */}
                <div
                  className={`absolute -bottom-8 -right-8 opacity-10 transition-transform duration-500 group-hover:rotate-90 ${
                    testimonial.color === "primary"
                      ? "text-background"
                      : "text-foreground"
                  }`}
                >
                  <CreativeCross className="w-32 h-32" delay={index * 300} />
                </div>

                {/* Stars */}
                <div className="flex gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        testimonial.color === "primary"
                          ? "fill-background text-background"
                          : "fill-primary text-primary"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className={`text-2xl font-bold leading-relaxed mb-10 ${
                    testimonial.color === "primary"
                      ? "text-background"
                      : "text-foreground"
                  }`}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      testimonial.color === "primary"
                        ? "bg-background/20"
                        : "bg-secondary"
                    }`}
                  >
                    <span
                      className={`font-black text-xl ${
                        testimonial.color === "primary"
                          ? "text-background"
                          : "text-secondary-foreground"
                      }`}
                    >
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className={`font-black ${
                        testimonial.color === "primary"
                          ? "text-background"
                          : "text-foreground"
                      }`}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className={`text-sm ${
                        testimonial.color === "primary"
                          ? "text-background/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </FloatingElement>
          ))}
        </div>

        {/* Bottom statement */}
        <FloatingElement delay={600}>
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <div className="relative inline-block">
              <div className="absolute -left-16 top-0 text-primary/20">
                <CreativeCross className="w-20 h-20 -rotate-45" />
              </div>
              <div className="absolute -right-16 top-0 text-secondary/20">
                <CreativeCross className="w-20 h-20 rotate-45" />
              </div>

              <p className="text-2xl text-muted-foreground leading-relaxed relative z-10">
                Chaque entrepreneur mérite un accompagnement
                <span className="text-foreground font-black"> complet</span>,
                <span className="text-foreground font-black"> clair</span> et
                <span className="text-foreground font-black"> humain</span>.
                <br />
                <span className="text-foreground font-black text-3xl">
                  C'est notre engagement.
                </span>
              </p>
            </div>
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
