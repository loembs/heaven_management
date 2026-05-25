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
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

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
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section - Big statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight text-balance">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            Consultation gratuite de 30 minutes — on définit ensemble votre feuille de route.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Contact info & FAQ */}
          <div>
            {/* Contact cards */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 p-5 bg-muted rounded-2xl">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="font-semibold text-foreground">+221 788 909 451</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-muted rounded-2xl">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="font-semibold text-foreground">Sacré-Coeur 3, Dakar</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-muted rounded-2xl">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horaires</p>
                  <p className="font-semibold text-foreground">Lun-Ven, 9h-17h</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-bold text-foreground text-xl mb-6">
                Questions fréquentes
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-foreground text-left hover:no-underline py-5">
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

          {/* Right column - Form */}
          <div className="bg-muted rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-primary"
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
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Message envoyé !
                </h3>
                <p className="text-muted-foreground mb-8">
                  Nous vous recontacterons dans les 24h.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground text-sm font-medium">
                    Nom & Prénom
                  </Label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 bg-background border-0 rounded-xl h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground text-sm font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+221 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2 bg-background border-0 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 bg-background border-0 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground text-sm font-medium">
                    Service souhaité
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="mt-2 bg-background border-0 rounded-xl h-12">
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
                  <Label htmlFor="message" className="text-foreground text-sm font-medium">
                    Votre message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="mt-2 bg-background border-0 rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande
                      <span className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Instagram link */}
        <div className="mt-20 text-center">
          <Link 
            href="https://www.instagram.com/heaven_management_74/" 
            target="_blank"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @heaven_management_74
          </Link>
        </div>
      </div>
    </section>
  )
}
