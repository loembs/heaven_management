"use client"

import { useEffect, useRef, useState } from "react"

// Croix décorative animée - Style Pipole
export function CreativeCross({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-180"} ${className}`}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 0V60M0 30H60" stroke="currentColor" strokeWidth="3" />
      </svg>
    </div>
  )
}

// Élément entre parenthèses - Style Pipole
export function ParenthesizedElement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 text-sm ${className}`}>
      <span className="text-primary font-bold">{'('}</span>
      {children}
      <span className="text-primary font-bold">{')'}</span>
    </div>
  )
}

// Typographie expressive avec mot en évidence
export function ExpressiveText({
  text,
  highlightWord,
  className = ""
}: {
  text: string;
  highlightWord: string;
  className?: string;
}) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block ${word.toLowerCase().includes(highlightWord.toLowerCase())
            ? "text-primary font-black"
            : "font-medium"
          }`}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  )
}

// Texte XXL animé au scroll
export function XXLText({ children, className = "" }: { children: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <h2
      ref={ref}
      className={`text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none tracking-tighter ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} transition-all duration-1000 ease-out ${className}`}
    >
      {children}
    </h2>
  )
}

// Flèche directionnelle animée
export function DirectionalArrow({ direction = "down", className = "" }: { direction?: "up" | "down" | "left" | "right"; className?: string }) {
  return (
    <div className={`animate-bounce ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {direction === "down" && (
          <path d="M20 5V35M10 25L20 35L30 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
        {direction === "right" && (
          <path d="M5 20H35M25 10L35 20L25 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </div>
  )
}

// Cercle pulsant
export function PulsingCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
      <div className="relative w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-primary rounded-full" />
      </div>
    </div>
  )
}

// Ligne décorative avec mouvement
export function AnimatedLine({ className = "" }: { className?: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(100), 200)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`h-px bg-primary/30 ${className}`}>
      <div
        className="h-full bg-primary transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

// Grille décorative
export function DecorativeGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-6 gap-1 ${className}`}>
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-primary/20 hover:bg-primary/40 transition-colors duration-300"
        />
      ))}
    </div>
  )
}

// Élément flottant
export function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} animate-float`}
    >
      {children}
    </div>
  )
}

// Filigrane Heaven Management
export function HeavenWatermark({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <span className="text-[100px] md:text-[140px] font-black leading-none opacity-[0.08]">
        HEAVEN
        <br />
        MANAGEMENT
      </span>
    </div>
  )
}

// Bouton téléphone orange CTA
export function PhoneCTA({ phone = "+221 788 909 451" }: { phone?: string }) {
  return (
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-full text-lg font-black tracking-widest uppercase hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30"
    >
      <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <span className="relative z-10">Appeler</span>
    </a>
  )
}
