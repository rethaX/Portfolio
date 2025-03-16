"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  )
}

