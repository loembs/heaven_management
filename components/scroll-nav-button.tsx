"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ScrollNavButton() {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Show button after scrolling a bit
      setIsVisible(scrollTop > 100)

      // Check if at bottom (with small threshold)
      const atBottom = scrollTop + windowHeight >= docHeight - 50
      setIsAtBottom(atBottom)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Scroll to bottom
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label={isAtBottom ? "Remonter en haut" : "Descendre en bas"}
    >
      {isAtBottom ? (
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      ) : (
        <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
      )}
      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-full bg-primary-foreground/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
    </button>
  )
}
