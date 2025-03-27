"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image Container */}
            <motion.div
              className="w-48 h-48 relative mb-8 md:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg relative">
                {/* Profile Image */}
                <motion.img 
                  src="/RethabileMokwanePhoto.jpg" 
                  alt="Rethabile Mokwane" 
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                {/* Animated Orbit */}
                <motion.div
                  className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Orbiting Border Dots */}
                {[0, 120, 240].map((rotate) => (
                  <motion.div
                    key={rotate}
                    className="absolute inset-0"
                    animate={{ rotate: rotate + 360 }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: rotate / 120
                      }}
                    />
                  </motion.div>
                ))}

                {/* Floating Dots */}
                <motion.div
                  className="absolute top-3 right-3 w-3 h-3 bg-black rounded-full"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute bottom-5 left-3 w-2 h-2 bg-black rounded-full"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Who Am I</h3>
              <p className="text-gray-700 mb-6">
                Motivated Software Developer with 2 years of experience in Java, Python, SQL, AWS, Docker, and REST
                services. Proficient in web development (HTML, CSS, Angular) and back-end frameworks (Spring Boot,
                Jakarta). Delivered projects like Handy Man in One Hand app and BMW data migration, improving system
                performance and data accuracy. Skilled in data analysis, database management (DB2, PostgreSQL), and
                testing automation. Passionate about solving complex problems, optimizing code for scalability and
                security, and contributing to impactful software projects.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <h4 className="font-bold text-gray-900">Name:</h4>
                  <p className="text-gray-700">Rethabile Mokwane</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <h4 className="font-bold text-gray-900">Email:</h4>
                  <a href="mailto:rethabilemokwane55@gmail.com" className="text-gray-700 hover:text-blue-600">
                    rethabilemokwane55@gmail.com
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <h4 className="font-bold text-gray-900">Location:</h4>
                  <p className="text-gray-700">North Centurion, South Africa</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <h4 className="font-bold text-gray-900">Availability:</h4>
                  <p className="text-gray-700">Available for hire</p>
                </motion.div>
              </div>

              {/* Download CV Button - Updated with correct path */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-black hover:bg-gray-800 text-white font-mono group relative overflow-hidden"
                    size="lg"
                    asChild
                  >
                    <a href="/RethabileMokwaneSoftwareDeveloper.pdf" download="RethabileMokwane_SoftwareDeveloper_CV.pdf">
                      <motion.span
                        className="absolute inset-0 w-full h-full bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                        initial={false}
                      />
                      <span className="relative flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        <span>Download CV</span>
                        <motion.span
                          className="ml-2"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Download className="h-4 w-4" />
                        </motion.span>
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}