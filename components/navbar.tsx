"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={() => scrollToSection("home")}>
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-gray-800 hover:text-primary transition-colors font-medium relative",
                activeSection === link.href && "text-primary",
              )}
            >
              {link.name}
              {activeSection === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-gray-800 hover:text-primary transition-colors py-2 font-medium text-left",
                  activeSection === link.href && "text-primary",
                )}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

