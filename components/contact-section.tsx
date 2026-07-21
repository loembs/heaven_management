"use client"

import { Phone, MapPin, Clock, Calendar, Mail } from "lucide-react"
import Link from "next/link"
import { CreativeCross, ParenthesizedElement, FloatingElement, AnimatedLine, HeavenWatermark } from "./creative-elements"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Combien coûte une création d'entreprise ?",
    answer: "Le pack création complet est à 50 000 FCFA .",
  },
  {
    question: "Combien de temps pour protéger ma marque ?",
    answer: "6 à 10 mois pour l'enregistrement complet à l'OAPI.",
  },
  {
    question: "Travaillez-vous avec des clients hors Dakar ?",
    answer: "Oui, nous accompagnons des entrepreneurs et entreprises au Sénégal et partout dans le monde.",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,0,0,0.1)_0deg,transparent_360deg)] animate-spin" style={{ animationDuration: "60s" }} />
      </div>

      {/* Floating decorative crosses */}
      <div className="absolute top-40 right-20 text-primary/20">
        <CreativeCross className="w-48 h-48 rotate-12" />
      </div>
      <div className="absolute bottom-40 left-20 text-secondary/20">
        <CreativeCross className="w-40 h-40 -rotate-90" />
      </div>

      {/* Large section number */}
      <div className="absolute top-10 right-10 text-foreground/5 font-black text-[140px] leading-none select-none -z-10">
        06
      </div>

      {/* Heaven watermark */}
      <div className="absolute bottom-10 left-10 text-primary/5 -z-10">
        <HeavenWatermark />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-2">
            <FloatingElement delay={100}>
              <div className="sticky top-32">
                <ParenthesizedElement>
                  <span className="text-primary tracking-widest text-xs font-bold uppercase">06</span>
                </ParenthesizedElement>
              </div>
            </FloatingElement>
          </div>

          <div className="lg:col-span-10">
            <FloatingElement delay={200}>
              <div className="mb-8">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95] mb-8">
                Parlons de votre
                <br />
                <span className="text-primary">projet</span>
              </h2>
              <div className="w-32 mb-8">
                <AnimatedLine />
              </div>
              <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Consultation gratuite de 30 minutes, on définit ensemble votre feuille de route.
              </p>
            </FloatingElement>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Contact info & FAQ */}
          <FloatingElement delay={300}>
            <div>
              {/* Contact cards */}
              <div className="space-y-5 mb-16">
                <div className="group flex items-center gap-5 p-6 bg-muted rounded-2xl hover:bg-foreground hover:text-background transition-all duration-500 cursor-default">
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-background/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-1">Téléphone</p>
                    <p className="font-black text-xl">+221 788 909 451</p>
                  </div>
                </div>

                <a
                  href="mailto:contact@heaven-management.com"
                  className="group flex items-center gap-5 p-6 bg-muted rounded-2xl hover:bg-foreground hover:text-background transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-background/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-1">Email</p>
                    <p className="font-black text-xl">contact@heaven-management.com</p>
                  </div>
                </a>

                <div className="group flex items-center gap-5 p-6 bg-muted rounded-2xl hover:bg-foreground hover:text-background transition-all duration-500 cursor-default">
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-background/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-1">Adresse</p>
                    <p className="font-black text-xl">Mamelles Cité Mbackiyou Faye, Dakar Sénégal</p>
                  </div>
                </div>

                <div className="group flex items-center gap-5 p-6 bg-muted rounded-2xl hover:bg-foreground hover:text-background transition-all duration-500 cursor-default">
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-background/20 group-hover:scale-110 transition-all duration-300">
                    <Clock className="h-6 w-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-1">Horaires</p>
                    <p className="font-black text-xl">Lun-Ven, 9h-17h</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-black text-foreground text-2xl mb-8 flex items-center gap-4">
                  <ParenthesizedElement>
                    <span className="text-primary text-sm">FAQ</span>
                  </ParenthesizedElement>
                  Questions fréquentes
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-border/50 rounded-2xl px-6 mb-3 bg-muted"
                    >
                      <AccordionTrigger className="text-foreground text-left hover:no-underline py-5 font-bold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </FloatingElement>

          {/* Right column - Calendly Booking */}
          <FloatingElement delay={500}>
            <div className="bg-muted rounded-[2rem] p-10 lg:p-12 relative overflow-hidden h-full flex flex-col justify-center">
              {/* Decorative cross */}
              <div className="absolute -bottom-10 -right-10 text-foreground/5">
                <CreativeCross className="w-48 h-48" delay={700} />
              </div>

              <div className="relative z-10 text-center space-y-8">
                {/* Calendar icon */}
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>

                <h3 className="text-3xl font-black text-foreground">
                  Réservez votre appel
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choisissez le créneau qui vous convient le mieux. Une consultation gratuite de 30 minutes pour discuter de votre projet.
                </p>

                <Link
                  href="https://calendly.com/heavenmanagement74/30min"
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-6 rounded-full text-lg font-bold hover:bg-secondary hover:text-white transition-all duration-500 group"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver un appel 30min
                  <span className="w-12 h-12 bg-primary-foreground text-primary rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
                    →
                  </span>
                </Link>

                <p className="text-sm text-muted-foreground">
                  Pas de création de compte requise • Confirmation instantanée
                </p>
              </div>
            </div>
          </FloatingElement>
        </div>

        {/* Social links */}
        <FloatingElement delay={800}>
          <div className="mt-24 text-center space-y-6">
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Suivez-nous</p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              <Link
                href="https://www.instagram.com/heaven_management_74/"
                target="_blank"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-bold">@heaven_management_74</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/heaven-management/"
                target="_blank"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-bold">Heaven Management</span>
              </Link>
            </div>
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
