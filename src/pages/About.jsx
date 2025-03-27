"use client"

import { motion } from "framer-motion"
import Navbar from "../components/layout/Navbar"
import Card from "../components/ui/Card"
import { Github, Mail, Linkedin, Globe } from "lucide-react"

const About = ({ onLogout }) => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "IoT specialist with 5+ years of experience in fuel monitoring systems.",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Jane Smith",
      role: "Hardware Engineer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Electronics expert specializing in sensor calibration and precision measurement.",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Alex Johnson",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Creating intuitive interfaces for complex monitoring systems.",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar onLogout={onLogout} />

      <main className="flex-1 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About iVFuel
          </motion.h1>

          <div className="grid grid-cols-1 gap-8">
            {/* Project Overview */}
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-400 mb-4">
                iVFuel was created to revolutionize how fuel flow is monitored in real-time. Our system provides
                accurate, reliable measurements that help users optimize fuel consumption and reduce waste.
              </p>
              <p className="text-gray-400 mb-4">
                We believe that precise monitoring leads to better decision-making. Whether you're managing a fleet of
                vehicles or monitoring a single engine, iVFuel gives you the data you need to make informed choices
                about fuel usage.
              </p>
              <p className="text-gray-400">
                Our technology combines advanced flow sensors with intuitive software to deliver a seamless monitoring
                experience. The system is designed to be easy to install, simple to use, and reliable in all conditions.
              </p>
            </Card>

            {/* Technology Stack */}
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-800 border border-blue-900/30 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-white">Hardware</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>High-precision flow sensors</li>
                    <li>ESP32 microcontroller</li>
                    <li>Custom PCB design</li>
                    <li>Low-power components</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-800 border border-blue-900/30 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-white">Backend</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Node.js server</li>
                    <li>WebSocket for real-time updates</li>
                    <li>Redis for caching</li>
                    <li>Supabase for data storage</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-800 border border-blue-900/30 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-white">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>React with Vite</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>Chart.js for visualizations</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Team Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 rounded-xl shadow-lg border border-blue-900/50 p-6 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="aspect-square overflow-hidden bg-blue-900/20 rounded-lg mb-4">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <p className="text-gray-400 mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-300" />
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-gray-300" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 mb-4">
                    Have questions about iVFuel? We'd love to hear from you! Reach out to us using any of the methods
                    below.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <a href="mailto:info@ivfuel.com" className="text-blue-400 hover:underline">
                        info@ivfuel.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="w-5 h-5 text-blue-400 mr-3" />
                      <a
                        href="https://github.com/ivfuel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        github.com/ivfuel
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-blue-400 mr-3" />
                      <a
                        href="https://ivfuel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        ivfuel.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 border border-blue-900/30 rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2 text-white">Open Source</h3>
                  <p className="text-gray-400 mb-4">
                    iVFuel is an open-source project. We welcome contributions from the community!
                  </p>
                  <a
                    href="https://github.com/ivfuel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium inline-flex items-center gap-2 shadow-md"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About

