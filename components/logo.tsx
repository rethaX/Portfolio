"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Animated Astronaut Logo */}
      <div className="relative w-14 h-14 mr-3">
        <motion.div
          className="absolute inset-0 bg-black rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Space background with stars */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
            <motion.div
              className="absolute top-1 left-2 text-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Star size={3} fill="white" />
            </motion.div>
            <motion.div
              className="absolute bottom-2 right-3 text-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <Star size={2} fill="white" />
            </motion.div>
            <motion.div
              className="absolute top-3 right-2 text-white"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Star size={2} fill="white" />
            </motion.div>
          </div>

          {/* Astronaut Helmet */}
          <motion.div
            className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.5)",
                "0 0 10px rgba(255,255,255,0.8)",
                "0 0 0px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {/* Helmet Visor */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-200 rounded-full"></div>

            {/* Floating RM text */}
            <motion.span
              className="text-black font-bold text-xs z-10"
              animate={{
                y: [-1, 1, -1],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              RM
            </motion.span>
          </motion.div>

          {/* Astronaut suit details */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gray-300 rounded-t-lg"></div>

          {/* Floating effect */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-80"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>

      {/* Name in cursive with animation */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden sm:block"
      >
        <motion.span className="font-cursive text-xl text-black" whileHover={{ scale: 1.05 }}>
          Rethabile Mokwane
        </motion.span>
      </motion.div>
    </div>
  )
}

