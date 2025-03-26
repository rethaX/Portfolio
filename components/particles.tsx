"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<any[]>([])
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const mouseIsMoving = useRef<boolean>(false)
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = []
      canvasRef.current.width = canvasContainerRef.current.clientWidth
      canvasRef.current.height = canvasContainerRef.current.clientHeight
      initCanvas()
    }
  }

  const initCanvas = () => {
    if (canvasRef.current && context.current) {
      const isDarkMode = currentTheme === "dark"

      for (let i = 0; i < quantity; i++) {
        const x = Math.floor(Math.random() * canvasRef.current.width)
        const y = Math.floor(Math.random() * canvasRef.current.height)
        const radius = Math.random() * 1.5
        const color = isDarkMode
          ? `rgba(255, 255, 255, ${Math.random() * 0.1})`
          : `rgba(8, 126, 164, ${Math.random() * 0.1})`

        circles.current.push({
          x,
          y,
          radius,
          originalRadius: radius,
          color,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
          origVx: 0,
          origVy: 0,
        })
      }

      drawCircles()
    }
  }

  const drawCircles = () => {
    if (context.current && canvasRef.current) {
      context.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      circles.current.forEach((circle) => {
        context.current!.beginPath()
        context.current!.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
        context.current!.fillStyle = circle.color
        context.current!.fill()
      })
    }
  }

  const animate = () => {
    if (mouseIsMoving.current) {
      circles.current.forEach((circle) => {
        const distanceX = mousePosition.current.x - circle.x
        const distanceY = mousePosition.current.y - circle.y
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
        const force = (staticity / distance) * 2

        if (distance < staticity) {
          const angle = Math.atan2(distanceY, distanceX)
          const acceleration = -force / 7

          circle.vx = Math.cos(angle) * acceleration
          circle.vy = Math.sin(angle) * acceleration

          circle.radius += 0.2
          if (circle.radius > circle.originalRadius * 2) {
            circle.radius = circle.originalRadius * 2
          }
        } else {
          circle.vx = 0
          circle.vy = 0

          if (circle.radius > circle.originalRadius) {
            circle.radius -= 0.2
          } else {
            circle.radius = circle.originalRadius
          }
        }

        circle.x += circle.vx
        circle.y += circle.vy

        if (
          circle.x < 0 ||
          circle.x > canvasRef.current!.width ||
          circle.y < 0 ||
          circle.y > canvasRef.current!.height
        ) {
          circle.x = circle.originalX
          circle.y = circle.originalY
        }

        const distanceToOriginal = Math.sqrt((circle.x - circle.originalX) ** 2 + (circle.y - circle.originalY) ** 2)

        if (distanceToOriginal > 1 && !mouseIsMoving.current) {
          const angle = Math.atan2(circle.originalY - circle.y, circle.originalX - circle.x)
          circle.vx = Math.cos(angle) * (distanceToOriginal / ease)
          circle.vy = Math.sin(angle) * (distanceToOriginal / ease)

          circle.x += circle.vx
          circle.y += circle.vy
        }
      })
    } else {
      circles.current.forEach((circle) => {
        const distanceToOriginal = Math.sqrt((circle.x - circle.originalX) ** 2 + (circle.y - circle.originalY) ** 2)

        if (distanceToOriginal > 1) {
          const angle = Math.atan2(circle.originalY - circle.y, circle.originalX - circle.x)
          circle.vx = Math.cos(angle) * (distanceToOriginal / ease)
          circle.vy = Math.sin(angle) * (distanceToOriginal / ease)

          circle.x += circle.vx
          circle.y += circle.vy
        } else {
          circle.x = circle.originalX
          circle.y = circle.originalY
        }

        if (circle.radius > circle.originalRadius) {
          circle.radius -= 0.2
        } else {
          circle.radius = circle.originalRadius
        }
      })
    }

    drawCircles()
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")

      if (context.current) {
        initCanvas()
        animate()

        window.addEventListener("resize", resizeCanvas)

        return () => {
          window.removeEventListener("resize", resizeCanvas)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (refresh) {
      resizeCanvas()
    }
  }, [refresh, currentTheme])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (canvasContainerRef.current) {
        const rect = canvasContainerRef.current.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        mousePosition.current = { x, y }
        mouseIsMoving.current = true

        setTimeout(() => {
          mouseIsMoving.current = false
        }, 100)
      }
    }

    if (canvasContainerRef.current) {
      canvasContainerRef.current.addEventListener("mousemove", handleMouseMove)

      return () => {
        if (canvasContainerRef.current) {
          canvasContainerRef.current.removeEventListener("mousemove", handleMouseMove)
        }
      }
    }
  }, [])

  return (
    <div ref={canvasContainerRef} className={`absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

