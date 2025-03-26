"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface OptimizedSectionProps {
  id: string
  className?: string
  children: ReactNode
  delay?: number
}

export default function OptimizedSection({ id, className = "", children, delay = 0 }: OptimizedSectionProps) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}

