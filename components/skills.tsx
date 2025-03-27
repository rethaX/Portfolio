"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Code, Database, Layout, Server, Smartphone, Workflow, Zap } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-10 h-10 text-black" />,
      items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "Maven"],
    },
    {
      category: "Web Development",
      icon: <Layout className="w-10 h-10 text-black" />,
      items: ["HTML", "CSS", "Angular", "Responsive Design"],
    },
    {
      category: "Back-End Development",
      icon: <Server className="w-10 h-10 text-black" />,
      items: ["REST Services", "API Integration", "Spring Boot", "Back-End Frameworks", "Jakarta"],
    },
    {
      category: "Cloud & DevOps",
      icon: <Workflow className="w-10 h-10 text-black" />,
      items: ["AWS (Glue, Athena, EC2)", "Docker", "Git", "Payara Server"],
    },
    {
      category: "Database Management",
      icon: <Database className="w-10 h-10 text-black" />,
      items: ["Data Comparison", "DB2", "PostgreSQL", "Data Analysis"],
    },
    {
      category: "Testing & Automation",
      icon: <Smartphone className="w-10 h-10 text-black" />,
      items: ["Selenium", "Cucumber"],
    },
    {
      category: "Project Management",
      icon: <Workflow className="w-10 h-10 text-black" />,
      items: ["Jira", "Confluence", "Airflow"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black font-mono">My Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Here are the technologies and tools I work with. I'm constantly learning and expanding my skill set to stay
            current with the latest industry trends.
          </p>

          <motion.div
            className="mt-8 flex justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Zap className="w-12 h-12 text-black" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border border-black bg-white">
                <CardContent className="p-6">
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
                        delay: index * 0.2,
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold ml-3 text-black font-mono">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <motion.li
                        key={item}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-black rounded-full mr-2"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: i * 0.2,
                          }}
                        />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
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

