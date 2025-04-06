"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, Code, Server, Database, ArrowDown } from "lucide-react"
import { BackgroundPattern, GradientBlob } from "./visual-elements"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Digilink (Client: BMW)",
      location: "Johannesburg",
      period: "April 2024 - Present",
      icon: <Code className="h-6 w-6" />,
      color: "bg-black",
      responsibilities: [
        "Enhanced a data comparison tool using Java backend coding to improve report generation in Excel files, reducing processing time through optimized data handling.",
        "Established connections from the Java backend to source and target databases for efficient report data retrieval, ensuring data integrity and security using JDBC.",
        "Deployed the report generation process on Payara server, utilizing its APIs for seamless operation and leveraging clustering for high availability.",
        "Integrated Amazon Athena with Java to retrieve database information locally, enhancing data access capabilities for analysis and reporting, demonstrating proficiency in cloud data services.",
      ],
    },    
    {
      title: "Java Programmer Intern",
      company: "HexSoftwares",
      location: "Remote",
      period: "March 2025 - March 2025",
      icon: <Code className="h-6 w-6" />,
      color: "bg-black",
      responsibilities: [
        "Completed an intensive Advanced Java programming course, mastering concepts which were multithreading, JDBC, and Java Collections Framework.",
        "Developed hands-on projects using Java 17 features (Records, Stream API) to optimize performance and code readability.",
        "Practiced design patterns (Singleton, Factory) and Spring Boot integrations to build scalable microservice prototypes.",
        "Built a Spring Boot microservice with JWT authentication, deployed via Docker containers.",
      ],
    },
    {
      title: "ICT Support Intern",
      company: "Northridge Primary School",
      location: "Pretoria",
      period: "February 2023 - February 2023",
      icon: <Server className="h-6 w-6" />,
      color: "bg-gray-800",
      responsibilities: [
        "Technical Troubleshooting: Resolved hardware/software issues for users, improving system uptime.",
        "Software Deployment: Assisted in deploying and configuring educational applications, ensuring compatibility across devices.",
        "User Training: Conducted training sessions on productivity tools (Microsoft Office, LMS platforms).",
      ],
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
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <BackgroundPattern pattern="grid" opacity={0.05} />
      <GradientBlob
        className="w-1/3 h-1/3 -bottom-10 -right-10"
        colors={["from-black/10", "via-gray-400/5", "to-gray-500/10"]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Work Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side with timeline */}
                    <div className="w-full lg:w-1/3 p-6 relative">
                      <div className={`${exp.color} text-white p-4 rounded-lg shadow-md`}>
                        <div className="flex items-center mb-4">
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
                            <Briefcase className="h-6 w-6" />
                          </motion.div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 opacity-80" />
                            <p>{exp.period}</p>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 opacity-80" />
                            <p>{exp.location}</p>
                          </div>
                          <div className="flex items-center">
                            <Database className="h-4 w-4 mr-2 opacity-80" />
                            <p className="font-medium">{exp.company}</p>
                          </div>
                        </div>

                        {/* Animated icon */}
                        <motion.div
                          className="absolute bottom-4 right-4 text-white/20"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          {exp.icon}
                        </motion.div>
                      </div>
                    </div>

                    {/* Right side with responsibilities */}
                    <div className="p-6 lg:p-8 flex-1 border-t lg:border-t-0 lg:border-l border-gray-100">
                      <h4 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                        <motion.div
                          animate={{
                            x: [0, 3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                          className="mr-2"
                        >
                          <Code className="h-5 w-5 text-black" />
                        </motion.div>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3 list-disc pl-5">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            whileHover={{ x: 5 }}
                          >
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
