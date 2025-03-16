"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  className?: string
  children: React.ReactNode
  delay?: number
  duration?: number
  amplitude?: number
  rotate?: boolean
}

export function FloatingElement({
  className = "",
  children,
  delay = 0,
  duration = 4,
  amplitude = 10,
  rotate = true,
}: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -amplitude, 0],
        rotate: rotate ? [0, 5, 0] : 0,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  )
}

interface BackgroundPatternProps {
  className?: string
  pattern?: "grid" | "circuit" | "diagonal" | "dots"
  opacity?: number
}

export function BackgroundPattern({ className = "", pattern = "grid", opacity = 0.05 }: BackgroundPatternProps) {
  const patternClass =
    pattern === "grid"
      ? "bg-grid-pattern"
      : pattern === "circuit"
        ? "bg-circuit-pattern"
        : pattern === "diagonal"
          ? "bg-diagonal-pattern"
          : "bg-grid-pattern"

  return <div className={`absolute inset-0 ${patternClass} opacity-${Math.round(opacity * 100)} z-0 ${className}`} />
}

interface GradientBlobProps {
  className?: string
  colors?: string[]
}

export function GradientBlob({
  className = "",
  colors = ["from-primary/20", "via-purple-400/10", "to-indigo-500/20"],
}: GradientBlobProps) {
  return <div className={`absolute rounded-full filter blur-3xl bg-gradient-to-br ${colors.join(" ")} ${className}`} />
}

interface WavyBackgroundProps {
  className?: string
  color?: string
  opacity?: number
}

export function WavyBackground({ className = "", color = "primary", opacity = 0.1 }: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw wavy pattern
      ctx.fillStyle = `hsl(270, 70%, 40%, ${opacity})`

      const amplitude = canvas.height / 20
      const frequency = 0.01
      const speed = 0.05

      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * frequency + time * speed) * amplitude + canvas.height / 2
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fill()

      time++
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [opacity])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

