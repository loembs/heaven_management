"use client"

import { Eye, Shield, TrendingUp, Heart } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const values = [
  {
    icon: Eye,
    title: "Clarté",
    description: "Traduction du jargon en langage simple",
    image: "/value-clarity.jpg",
  },
  {
    icon: Shield,
    title: "Protection",
    description: "Vos idées sécurisées avant tout",
    image: "/value-protection.jpg",
  },
  {
    icon: TrendingUp,
    title: "Élévation",
    description: "Les outils pour grandir",
    image: "/value-elevation.jpg",
  },
  {
    icon: Heart,
    title: "Éthique",
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
      { threshold: 0.3 }
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
      
      // Easing function for smooth animation
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
    <div ref={ref} className="text-5xl lg:text-7xl font-bold text-white mb-2 tabular-nums">
      {count}{suffix}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              À Propos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight text-balance">
            Nous gérons votre entreprise pendant que vous vous concentrez sur votre passion
          </h2>
        </div>

        {/* Values grid with zoom effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Background image with zoom */}
              <Image
                src={value.image}
                alt={value.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">{value.title}</h3>
                  <p className="text-sm text-white/80">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section - Modern with animated counters */}
        <div className="relative bg-secondary rounded-3xl p-10 lg:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default"
              >
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-secondary-foreground/70 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
                {/* Animated underline */}
                <div className="mt-3 mx-auto w-0 h-0.5 bg-primary group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
