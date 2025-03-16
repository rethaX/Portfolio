"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CodepenIcon } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
    }, 2500)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10
        return newProgress > 100 ? 100 : newProgress
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="relative flex items-center justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute w-20 h-20 bg-primary/20 rounded-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute w-20 h-20 bg-primary/40 rounded-lg"
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 0.2,
              }}
            />
            <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <CodepenIcon className="w-10 h-10" />
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Rethabile Mokwane
          </motion.h1>

          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

