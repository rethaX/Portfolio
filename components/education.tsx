"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
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
      details: [
        "Completed a comprehensive undergraduate program focused on software development, system design, and IT solutions.",
        "Gained proficiency in programming languages such as Java, Python, and C#, and developed web and mobile application development skills.",
        "Studied key concepts including software development lifecycle (SDLC), object-oriented programming (OOP), database management, and agile methodologies.",
        "Completed hands-on projects and a capstone project, applying theoretical knowledge to real-world software engineering challenges.",
        "Developed strong problem-solving, teamwork, and project management skills, preparing for a software engineering and IT career.",
      ],
    },
    {
      degree: "Matriculated – Bachelor's Degree Pass",
      institution: "Clapham High School",
      location: "Pretoria",
      period: "2015 - 2019",
      details: [
        "Achieved a Bachelor's Degree Pass in Matric, meeting the requirements for tertiary education.",
        "Developed foundational skills in mathematics and technology, which laid the groundwork for further studies in IT and software engineering.",
      ],
    },
  ]

  const achievements = [
    {
      title: "Microsoft Certified: Data Analyst Associate",
      year: "2023",
      description:
        "Professional certification validating expertise in data analysis and visualization using Microsoft Power BI, demonstrating ability to transform complex data into actionable insights.",
    },
    {
      title: "Academic Excellence Award",
      year: "2021",
      description:
        "Recognized as a top performer at Eduvos University for outstanding academic achievement in software engineering coursework and practical applications.",
    },
    {
      title: "Creative Excellence in Visual Arts",
      year: "2018",
      description:
        "Awarded for exceptional creativity and technical skill in Visual Arts, showcasing innovative thinking and attention to detail.",
    },
    {
      title: "Leadership & Personal Development Recognition",
      year: "2018",
      description:
        "Acknowledged for excellence in Life Orientation, demonstrating strong leadership qualities, interpersonal skills, and commitment to personal growth.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      <BackgroundPattern pattern="diagonal" opacity={0.05} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My academic background and notable achievements that have shaped my professional journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-md bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-primary to-purple-600 p-4 text-white">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center text-gray-700 mb-2 md:mb-0">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <p>{edu.institution}</p>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 mr-1 text-primary" />
                          <p>{edu.period}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 list-disc pl-5 mt-4">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="text-gray-700">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="mr-2 text-primary" />
              Professional Certifications
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 p-3 rounded-full">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                          <p className="text-primary font-medium mt-1 md:mt-0 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {achievement.year}
                          </p>
                        </div>
                        <p className="text-gray-700">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

