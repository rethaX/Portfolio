"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { BackgroundPattern, GradientBlob } from "./visual-elements"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Developer",
      company: "Digilink (Client: BMW)",
      location: "Johannesburg",
      period: "April 2024 - Present",
      responsibilities: [
        "Designed and optimized SQL queries for DB2 and PostgreSQL databases, ensuring accurate data migration and functionality.",
        "Analyzed and aligned datasets between DB2 and PostgreSQL, resolving duplications and improving data quality.",
        "Enhanced a data comparison tool to streamline database comparisons, increasing migration efficiency.",
        "Utilized AWS tools (Glue, Athena, EC2) for data integration and migration preparation, ensuring seamless processing.",
        "Developed and deployed a Docker container for the data comparison tool, enabling smooth integration with REST services on the Payara server.",
        "Created scripts for Payara server and database connections, improving system reliability and performance.",
        "Optimized code for better security, scalability, and performance, ensuring sustainable system operations.",
      ],
    },
    {
      title: "ICT Teacher's Assistant",
      company: "Northridge Primary School",
      location: "Pretoria",
      period: "February 2023 - December 2023",
      responsibilities: [
        "Provided technical support for IT equipment, ensuring functionality for teachers and learners.",
        "Assisted in implementing coding and robotics curricula and managed educational applications on devices.",
        "Captured and maintained learner data on the SA-SAMS/CEMIS platform.",
        "Maintained a register of ICT resources, including device details and support needs.",
        "Distributed ICT resources and supported administrative tasks with organized filing systems.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <BackgroundPattern pattern="grid" opacity={0.05} />
      <GradientBlob
        className="w-1/3 h-1/3 -bottom-10 -right-10"
        colors={["from-primary/10", "via-purple-400/5", "to-indigo-500/10"]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600 z-0"></div>
                )}

                <Card className="relative z-10 overflow-hidden border-none shadow-lg bg-white">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Left side with icon */}
                      <div className="w-full md:w-64 bg-gradient-to-br from-primary to-purple-600 p-6 text-white">
                        <div className="flex items-center mb-4">
                          <Briefcase className="h-6 w-6 mr-2" />
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                        </div>
                        <div className="space-y-3 text-white/90">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <p>{exp.period}</p>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <p>{exp.location}</p>
                          </div>
                          <p className="font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Right side with responsibilities */}
                      <div className="p-6 flex-1">
                        <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Responsibilities</h4>
                        <ul className="space-y-2 list-disc pl-5">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-gray-700">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

