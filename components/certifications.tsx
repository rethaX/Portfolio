"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, Trophy, Medal, ArrowDown } from "lucide-react"
import { BackgroundPattern, GradientBlob } from "./visual-elements"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "Microsoft Certified: Data Analyst Associate with Power BI",
      year: "2023",
      type: "professional",
    },
    {
      title: "Digilink Software Developer Skills Programme",
      year: "2025",
      type: "professional",
    },
    {
      title: "Full Stack Java, JSP, Hibernate, Spring, Web-services/Restful API",
      year: "2025",
     type: "professional",
    },
  ]

  const awards = [
    {
      title: "Academic Excellence Award",
      year: "2021",
      type: "academic",
    },
    {
      title: "Creative Excellence in Visual Arts",
      year: "2018",
      type: "academic",
    },
    {
      title: "Leadership & Personal Development Recognition",
      year: "2018",
      type: "academic",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="certifications" className="py-20 bg-white relative overflow-hidden">
      <BackgroundPattern pattern="circuit" opacity={0.05} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Certifications & Awards</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Professional certifications and academic achievements that highlight my expertise and recognition.
          </p>

          <motion.div
            className="mt-8 flex justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Medal className="w-12 h-12 text-black" />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Certifications */}
          <motion.div className="mb-12" variants={containerVariants} initial="hidden" animate="visible" ref={ref}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="mr-2 text-primary" />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden border-none shadow-md bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="bg-gradient-to-br from-black/20 to-gray-600/20 p-3 rounded-full"
                          animate={{
                            rotate: [0, 10, 0, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeInOut",
                          }}
                        >
                          <Award className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                            <p className="text-primary font-medium mt-1 md:mt-0 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {cert.year}
                            </p>
                          </div>
                          <p className="text-gray-700">{cert.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Awards */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" ref={ref}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Trophy className="mr-2 text-primary" />
              Academic Awards
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden border-none shadow-md bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="bg-gradient-to-br from-black/20 to-gray-600/20 p-3 rounded-full"
                          animate={{
                            rotate: [0, 10, 0, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        >
                          <Trophy className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                            <p className="text-primary font-medium mt-1 md:mt-0 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {award.year}
                            </p>
                          </div>
                          <p className="text-gray-700">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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

