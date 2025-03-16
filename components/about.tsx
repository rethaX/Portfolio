"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary/50 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
            <Image
  src="https://drive.google.com/uc?id=14jfVKtJkaa3MNq1-iqSVyKusnerGUvpO"
  alt="Rethabile Mokwane"
  fill
  className="object-cover"
  priority
/>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I Motivated Software Developer with 2 years of experience in Java, Python, SQL, AWS, Docker, and REST
              services. Proficient in web development (HTML, CSS, Angular) and back-end frameworks (Spring Boot,
              Jakarta). Delivered projects like Handy Man in One Hand app and BMW data migration, improving system
              performance and data accuracy. Skilled in data analysis, database management (DB2, PostgreSQL), and
              testing automation. Passionate about solving complex problems, optimizing code for scalability and
              security, and contributing to impactful software projects.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-gray-900">Name:</h4>
                <p className="text-gray-700">Rethabile Mokwane</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email:</h4>
                <p className="text-gray-700">rethabilemokwane55@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Location:</h4>
                <p className="text-gray-700">7177 Blue Blossom Street, WierdaCrest, 
                  Rooihuiskraal North Centurion, 
                  0157, 
                  South Africa</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Availability:</h4>
                <p className="text-gray-700">Available for hire</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}