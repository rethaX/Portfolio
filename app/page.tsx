"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading"
import OptimizedSection from "@/components/optimized-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Shorter loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  // Preload critical assets
  useEffect(() => {
    const preloadImages = () => {
      // Preload any critical images here
      const imageUrls = ["https://www.freepnglogos.com/uploads/bmw-png-logo/bmw-logo-png-image-free-download-30.png"]

      imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
        img.crossOrigin = "anonymous"
      })
    }

    preloadImages()
  }, [])

  return (
    <main className="min-h-screen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Hero />
          <OptimizedSection id="about-section" className="bg-gray-50">
            <About />
          </OptimizedSection>
          <OptimizedSection id="skills-section" className="bg-white" delay={0.1}>
            <Skills />
          </OptimizedSection>
          <OptimizedSection id="projects-section" className="bg-gray-50" delay={0.2}>
            <Projects />
          </OptimizedSection>
          <OptimizedSection id="experience-section" className="bg-white" delay={0.3}>
            <Experience />
          </OptimizedSection>
          <OptimizedSection id="education-section" className="bg-gray-50" delay={0.4}>
            <Education />
          </OptimizedSection>
          <OptimizedSection id="certifications-section" className="bg-white" delay={0.5}>
            <Certifications />
          </OptimizedSection>
          <OptimizedSection id="contact-section" className="bg-gray-50" delay={0.6}>
            <Contact />
          </OptimizedSection>
          <Footer />
        </>
      )}
    </main>
  )
}

