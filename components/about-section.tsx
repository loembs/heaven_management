"use client"

import { Eye, Shield, TrendingUp, Heart } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { CreativeCross, ParenthesizedElement, XXLText, FloatingElement, AnimatedLine, DecorativeGrid, HeavenWatermark } from "./creative-elements"

const values = [
  {
    icon: Eye,
    title: "CLARTÉ",
    subtitle: "Du jargon au simple",
    description: "Traduction du jargon en langage simple",
    image: "/value-clarity.jpg",
  },
  {
    icon: Shield,
    title: "PROTECTION",
    subtitle: "Sécurité avant tout",
    description: "Vos idées sécurisées avant tout",
    image: "/value-protection.jpg",
  },
  {
    icon: TrendingUp,
    title: "ÉLÉVATION",
    subtitle: "Outils de croissance",
    description: "Les outils pour grandir",
    image: "/value-elevation.jpg",
  },
  {
    icon: Heart,
    title: "ÉTHIQUE",
    subtitle: "Intégrité totale",
    description: "Intégrité et confidentialité absolues",
    image: "/value-ethics.jpg",
  },
]

const stats = [
  { value: 5, suffix: "", label: "Expertises" },
  { value: 1, suffix: "", label: "Interlocuteur" },
  { value: 360, suffix: "°", label: "Accompagnement" },
  { value: 30, suffix: "'", label: "Consult. Gratuite" },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-6xl lg:text-8xl font-black text-white mb-2 tabular-nums">
      {count}
      <span className="text-4xl">{suffix}</span>
    </div>
  )
}

export function AboutSection() {
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
    <section id="apropos" ref={sectionRef} className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <DecorativeGrid className="w-full h-full" />
      </div>

      {/* Floating decorative crosses */}
      <div className="absolute top-40 right-20 text-secondary/20">
        <CreativeCross className="w-48 h-48 rotate-12" delay={200} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/20">
        <CreativeCross className="w-40 h-40 -rotate-45" delay={400} />
      </div>

      {/* Large section number */}
      <div className="absolute bottom-10 left-10 text-foreground/5 font-black text-[180px] leading-none select-none -z-10">
        03
      </div>

      {/* Heaven watermark */}
      <div className="absolute top-10 right-10 text-primary/5 -z-10">
        <HeavenWatermark />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-2">
            <FloatingElement delay={100}>
              <div className="sticky top-32">
                <ParenthesizedElement>
                  <span className="text-primary tracking-widest text-xs font-bold uppercase">03</span>
                </ParenthesizedElement>
              </div>
            </FloatingElement>
          </div>

          <div className="lg:col-span-10">
            <FloatingElement delay={200}>
              <div className="mb-8">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  À Propos
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95] mb-8">
                Nous gérons votre
                <br />
                <span className="text-primary">entreprise</span>
                <br />
                pendant que vous vous concentrez
                <br />
                sur votre passion
              </h2>
              <div className="w-32 mb-8">
                <AnimatedLine />
              </div>

              {/* Mission statement */}
              <div className="max-w-3xl space-y-6">
                <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                  Chez Heaven Management, on ne croit pas au parcours du combattant administratif.
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Juristes, comptables, communicants : une équipe pluridisciplinaire réunie autour d'une conviction — chaque entrepreneur mérite un interlocuteur unique qui comprend son business dans sa globalité.
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Protection de vos idées, création d'entreprise, finances, image de marque : on centralise tout, avec clarté et transparence.
                </p>
                <p className="text-lg lg:text-xl text-primary font-bold">
                  Pas de jargon. Pas de prix opaques. Juste les bases solides pour durer et rayonner.
                </p>
              </div>
            </FloatingElement>
          </div>
        </div>

        {/* Values grid with creative cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <FloatingElement key={index} delay={index * 150}>
                <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer">
                  {/* Background image */}
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Decorative cross */}
                  <div className="absolute top-4 right-4 text-white/20">
                    <CreativeCross className="w-12 h-12" delay={index * 200} />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/90">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div>
                      <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-2">
                        {value.subtitle}
                      </p>
                      <h3 className="font-black text-white text-2xl mb-2">{value.title}</h3>
                      <p className="text-sm text-white/80">{value.description}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FloatingElement>
            )
          })}
        </div>

        {/* Stats section */}
        <FloatingElement delay={800}>
          <div className="relative rounded-[2rem] p-12 lg:p-20 overflow-hidden border-2 border-border/50 bg-muted">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />

            {/* Decorative cross */}
            <div className="absolute top-10 right-10 text-primary/10">
              <CreativeCross className="w-32 h-32" delay={1000} />
            </div>

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className="relative inline-block">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-foreground/70 text-sm font-bold tracking-widest uppercase mt-4">
                    {stat.label}
                  </p>
                  {/* Animated underline */}
                  <div className="mt-6 mx-auto h-1 bg-primary/20 overflow-hidden">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
