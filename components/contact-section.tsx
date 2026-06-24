"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Phone, MapPin, Clock, Mail } from "lucide-react"
import Link from "next/link"
import { CreativeCross, ParenthesizedElement, FloatingElement, AnimatedLine, HeavenWatermark } from "./creative-elements"

const faqs = [
  {
    question: "Combien coûte une création d'entreprise ?",
    answer: "Le pack création complet est à 125 000 FCFA (formalités + accompagnement).",
  },
  {
    question: "Combien de temps pour protéger ma marque ?",
    answer: "4 à 6 mois pour l'enregistrement complet à l'OAPI.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, paiement en 2 ou 3 fois pour les packs supérieurs à 300 000 FCFA.",
  },
  {
    question: "Travaillez-vous avec des clients hors Dakar ?",
    answer: "Oui, nous accompagnons des entrepreneurs dans tout le Sénégal en distanciel.",
  },
]

const services = [
  "Propriété intellectuelle",
  "Création d'entreprise",
  "Juridique & contrats",
  "Comptabilité & gestion",
  "Communication & branding",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", phone: "", email: "", service: "", message: "" })
  }

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
                Consultation gratuite de 30 minutes — on définit ensemble votre feuille de route.
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

                <div className="group flex items-center gap-5 p-6 bg-muted rounded-2xl hover:bg-foreground hover:text-background transition-all duration-500 cursor-default">
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-background/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-1">Adresse</p>
                    <p className="font-black text-xl">Sacré-Coeur 3, Dakar</p>
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

          {/* Right column - Form */}
          <FloatingElement delay={500}>
            <div className="bg-muted rounded-[2rem] p-10 lg:p-12 relative overflow-hidden">
              {/* Decorative cross */}
              <div className="absolute -bottom-10 -right-10 text-foreground/5">
                <CreativeCross className="w-48 h-48" delay={700} />
              </div>

              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-foreground mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-muted-foreground text-lg mb-10">
                    Nous vous recontacterons dans les 24h.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline text-lg"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
                  <div>
                    <Label htmlFor="name" className="text-foreground text-sm font-bold tracking-widest uppercase">
                      Nom & Prénom
                    </Label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-3 bg-background border-0 rounded-2xl h-14 text-base"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone" className="text-foreground text-sm font-bold tracking-widest uppercase">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+221 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-3 bg-background border-0 rounded-2xl h-14 text-base"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground text-sm font-bold tracking-widest uppercase">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-3 bg-background border-0 rounded-2xl h-14 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-foreground text-sm font-bold tracking-widest uppercase">
                      Service souhaité
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="mt-3 bg-background border-0 rounded-2xl h-14 text-base">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground text-sm font-bold tracking-widest uppercase">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="mt-3 bg-background border-0 rounded-2xl resize-none text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-4 bg-foreground text-background px-8 py-5 rounded-full text-base font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer ma demande
                        <span className="w-12 h-12 bg-background text-foreground rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FloatingElement>
        </div>

        {/* Instagram link */}
        <FloatingElement delay={800}>
          <div className="mt-24 text-center">
            <Link
              href="https://www.instagram.com/heaven_management_74/"
              target="_blank"
              className="inline-flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors text-lg"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-bold">@heaven_management_74</span>
            </Link>
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
