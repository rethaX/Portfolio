"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Smartphone, Workflow } from "lucide-react"
import { BackgroundPattern, GradientBlob } from "./visual-elements"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-10 h-10 text-primary" />,
      items: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "Web Development",
      icon: <Layout className="w-10 h-10 text-purple-600" />,
      items: ["HTML", "CSS", "Angular", "Responsive Design"],
    },
    {
      category: "Back-End Development",
      icon: <Server className="w-10 h-10 text-primary" />,
      items: ["REST Services", "Spring Boot", "Back-End Frameworks"],
    },
    {
      category: "Cloud & DevOps",
      icon: <Workflow className="w-10 h-10 text-purple-600" />,
      items: ["AWS (Glue, Athena, EC2)", "Docker", "Git"],
    },
    {
      category: "Database Management",
      icon: <Database className="w-10 h-10 text-primary" />,
      items: ["Data Comparison", "DB2", "PostgreSQL", "Data Analysis"],
    },
    {
      category: "Testing & Automation",
      icon: <Smartphone className="w-10 h-10 text-purple-600" />,
      items: ["Testing Automation", "Chrome Driver", "Quality Assurance"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <BackgroundPattern pattern="circuit" opacity={0.05} />
      <GradientBlob
        className="w-1/3 h-1/3 -bottom-10 -right-10"
        colors={["from-primary/10", "via-purple-400/5", "to-indigo-500/10"]}
      />
      <GradientBlob
        className="w-1/4 h-1/4 -top-10 -left-10"
        colors={["from-purple-500/10", "via-indigo-400/5", "to-primary/10"]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Here are the technologies and tools I work with. I'm constantly learning and expanding my skill set to stay
            current with the latest industry trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-bold ml-3 text-gray-900">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

