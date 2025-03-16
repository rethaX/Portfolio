"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Terminal, Database, Server } from "lucide-react"
import Navbar from "./navbar"
import Particles from "./particles"
import { FloatingElement, BackgroundPattern, GradientBlob, WavyBackground } from "./visual-elements"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  if (!mounted) return null

  // Text animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Text reveal animation for the main heading
  const textReveal = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  }

  // Letter animation for "Software Developer"
  const titleLetters = "Software Developer".split("")

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <Navbar />

      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <Particles className="absolute inset-0" quantity={100} />
        <BackgroundPattern pattern="circuit" opacity={0.05} />
        <GradientBlob className="w-1/3 h-1/3 top-0 right-0" />
        <GradientBlob
          className="w-1/4 h-1/4 bottom-1/4 left-0"
          colors={["from-purple-500/10", "via-indigo-400/5", "to-primary/10"]}
        />
        <WavyBackground className="bottom-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-purple-50" />
      </div>

      {/* Floating icons with improved positioning */}
      <FloatingElement className="top-1/4 left-1/4 text-primary/20" duration={4}>
        <Code size={40} />
      </FloatingElement>

      <FloatingElement className="bottom-1/3 right-1/4 text-purple-400/20" duration={5} delay={0.5} amplitude={15}>
        <Terminal size={50} />
      </FloatingElement>

      <FloatingElement className="top-1/3 right-1/5 text-primary/10" duration={6} delay={1} amplitude={12}>
        <Database size={35} />
      </FloatingElement>

      <FloatingElement className="bottom-1/4 left-1/5 text-purple-500/10" duration={7} delay={1.5} amplitude={18}>
        <Server size={45} />
      </FloatingElement>

      <div className="container mx-auto px-4 py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto text-center">
          {/* Animated intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              className="text-lg md:text-xl text-primary mb-4 font-medium inline-block"
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              Hello, I'm a
            </motion.p>
          </motion.div>

          {/* Animated main heading with letter animation */}
          <motion.h1
            ref={textRef}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 relative overflow-hidden"
          >
            <motion.div
              className="flex justify-center flex-wrap"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.8,
                },
              }}
            >
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary"
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.8 + index * 0.04,
                    },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          {/* Animated subheading with reveal effect */}
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl md:text-3xl text-gray-700 mb-8"
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.5,
                },
              }}
            >
              Hi, I'm <span className="font-semibold">Rethabile Mokwane</span>
            </motion.h2>
          </div>

          {/* Animated paragraph with typing effect */}
          <div className="overflow-hidden">
            <motion.p
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1.2,
                  delay: 1.8,
                },
              }}
            >
              I specialize in building robust applications with Java, Python, and modern web technologies. Passionate
              about creating efficient, scalable, and user-friendly solutions.
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 2.2,
              },
            }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

