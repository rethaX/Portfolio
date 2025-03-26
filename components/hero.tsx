"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Terminal, Rocket, Moon, Star, Laptop } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Software Developer"
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setMounted(true)

    // Typing effect
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        // Add stars after typing is complete
        createStars()
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const createStars = () => {
    const container = document.querySelector(".stars-container")
    if (!container) return

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div")
      star.classList.add("star")

      // Random position
      const x = Math.random() * 100
      const y = Math.random() * 100

      // Random size
      const size = Math.random() * 3 + 1

      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${x}%`
      star.style.top = `${y}%`
      star.style.animationDelay = `${Math.random() * 2}s`

      container.appendChild(star)
    }
  }

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

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <Navbar />

      {/* Space background */}
      <div className="absolute inset-0 -z-10 bg-white stars-container">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-black"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Rocket size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-black"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        <Moon size={50} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/5 text-black"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <Star size={35} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/5 text-black"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.5,
        }}
      >
        <Laptop size={45} />
      </motion.div>

      {/* Fun shapes */}
      <motion.div
        className="absolute top-1/6 right-1/6 shape-circle"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/6 left-1/6 shape-square"
        animate={{
          rotate: [0, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 shape-triangle"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 pt-32 md:pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Intro text */}
          <motion.p
            className="text-lg md:text-xl text-black mb-4 font-mono"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm a
          </motion.p>

          {/* Main heading with typing effect */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-black font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="dev-text">{text}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-800 mb-8 font-mono"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm <span className="font-bold">Rethabile Mokwane</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            className="code-block mb-8 max-w-2xl mx-auto text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p>
              I specialize in building robust applications with Java, Python, and modern web technologies. Passionate
              about creating efficient, scalable, and user-friendly solutions.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-black hover:bg-gray-800 text-white font-mono"
            >
              <Code className="mr-2 h-4 w-4" /> View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-black text-black hover:bg-black/10 font-mono"
            >
              <Terminal className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-500 hover:text-black transition-colors font-mono"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

