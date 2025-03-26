"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { BackgroundPattern, GradientBlob } from "./visual-elements"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "rethabilemokwane55@gmail.com",
      link: "mailto:rethabilemokwane55@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      value: "078 451 8941",
      link: "tel:+27784518941",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "7177 Blue Blossom Street, Rooihuiskraal North Centurion, Gauteng, South Africa",
      link: null, // No hyperlink
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
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
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
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Feel free to reach out to me through my
            contact information below.
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
            <MessageSquare className="w-12 h-12 text-black" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden border-none shadow-md bg-white h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <motion.div
                    className="mb-4 bg-gradient-to-br from-black/20 to-gray-600/20 p-4 rounded-full"
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
                    {info.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{info.title}</h3>
                    {info.link ? (
                      <motion.a
                        href={info.link}
                        className="text-gray-700 hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p className="text-gray-700">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="overflow-hidden border-none shadow-md bg-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4 text-gray-900 text-center">Follow Me</h3>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/rethaX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-black/20 to-gray-600/20 flex items-center justify-center text-primary hover:from-black hover:to-gray-600 hover:text-white transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BdCt%2F5rwsTpWO6lk4vsWLRw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-black/20 to-gray-600/20 flex items-center justify-center text-primary hover:from-black hover:to-gray-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

