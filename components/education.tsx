"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, BookOpen, School, ArrowDown } from "lucide-react"
import { BackgroundPattern, GradientBlob } from "./visual-elements"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "Bachelor of Information Technology in Software Engineering",
      institution: "Eduvos University (Previously called Pearson Institute of Higher Education)",
      location: "Pretoria",
      period: "2020 - 2022",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      degree: "Matriculated – Bachelor's Degree Pass",
      institution: "Clapham High School",
      location: "Pretoria",
      period: "2015 - 2019",
      icon: <School className="h-5 w-5" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      <BackgroundPattern pattern="diagonal" opacity={0.05} />
      <GradientBlob
        className="w-1/3 h-1/3 -bottom-10 -right-10"
        colors={["from-black/10", "via-gray-400/5", "to-gray-500/10"]}
      />
      <GradientBlob
        className="w-1/4 h-1/4 -top-10 -left-10"
        colors={["from-gray-500/10", "via-gray-400/5", "to-black/10"]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My academic background that has shaped my professional journey.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                  <CardContent className="p-0">
                    <div className="bg-black p-4 text-white flex items-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                        className="mr-3"
                      >
                        <GraduationCap className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded-full mr-3">{edu.icon}</div>
                        <p className="font-medium text-gray-900">{edu.institution}</p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-black" />
                          <p className="text-gray-700">{edu.period}</p>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-black" />
                          <p className="text-gray-700">{edu.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Centered Arrow Down at the bottom of the section */}
        <div className="flex justify-center mt-11">
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="h-7 w-8 text-gray-700" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

