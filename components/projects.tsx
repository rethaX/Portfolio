"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { BackgroundPattern } from "./visual-elements"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = ["All", "Mobile", "Web", "Database"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Handy Man In One Hand",
      description:
        "A mobile app developed using Android Studio and Java to connect users with local services. Integrated Firebase for real-time data management.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      category: "Mobile",
      technologies: ["Android Studio", "Java", "Firebase", "UI/UX Design"],
      demoLink: "#",
      githubLink: "#",
      year: "2022",
    },
    {
      id: 2,
      title: "Mobile Cars Shop",
      description:
        "An e-commerce website built using HTML, CSS, and JavaScript for a car dealership. Designed a responsive interface for seamless user experience across devices.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      category: "Web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoLink: "#",
      githubLink: "#",
      year: "2022",
    },
    {
      id: 3,
      title: "Church Database System",
      description:
        "A database system designed using PHPMyAdmin to manage church records efficiently. Created an intuitive interface with HTML and CSS for easy data access.",
      image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop",
      category: "Database",
      technologies: ["PHPMyAdmin", "HTML", "CSS", "Database Design"],
      demoLink: "#",
      githubLink: "#",
      year: "2023",
    },
    {
      id: 4,
      title: "Data Comparison Tool",
      description:
        "Enhanced a data comparison tool to streamline database comparisons between DB2 and PostgreSQL, increasing migration efficiency.",
      image: "https://img.icons8.com/?size=100&id=18805&format=png&color=000000",
      category: "Database",
      technologies: ["SQL", "DB2", "PostgreSQL", "AWS"],
      demoLink: "#",
      githubLink: "#",
      year: "2024",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <BackgroundPattern pattern="diagonal" opacity={0.05} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution that
            I've developed.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full ${activeCategory === category ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700" : "border-primary text-primary hover:bg-primary/10"}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all group border border-gray-200 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${project.id === 4 ? "object-contain p-4" : ""}`}
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-white/20 hover:bg-white/40 border-white text-white"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-white/20 hover:bg-white/40 border-white text-white"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-600/10 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

