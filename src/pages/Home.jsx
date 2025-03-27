"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import { ArrowRight } from "lucide-react"

const Home = ({ onLogout }) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const benefits = [
    {
      title: "Real-time Monitoring",
      description: "Track fuel flow rates and volume in real-time with millisecond precision.",
      icon: "📊",
    },
    {
      title: "IoT Ready",
      description: "Seamlessly connects with your existing IoT infrastructure.",
      icon: "🔌",
    },
    {
      title: "Accurate Logs",
      description: "Maintain detailed logs of all fuel consumption for analysis.",
      icon: "📝",
    },
    {
      title: "Mobile Friendly",
      description: "Monitor your fuel flow from anywhere on any device.",
      icon: "📱",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar onLogout={onLogout} />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-12 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                    Real-time Fuel
                  </span>{" "}
                  Monitoring, Redefined.
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-8">
                  iVFuel provides accurate, real-time monitoring of fuel flow rates and volume, helping you optimize
                  fuel usage and reduce costs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/dashboard">
                    <motion.button
                      className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Go to Dashboard
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link to="/about">
                    <motion.button
                      className="px-8 py-3 rounded-lg bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-full h-[400px] bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl flex items-center justify-center border border-blue-900/50"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(59, 130, 246, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.6)",
                        "0 0 0 rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="text-white text-4xl font-bold">iV</span>
                    </motion.div>

                    {/* Animated flow lines */}
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">iVFuel</span>
              ?
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 rounded-xl shadow-lg border border-blue-900/50 p-6 hover:border-blue-800/70 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border border-blue-900/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Monitor Your Fuel Flow?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get started with iVFuel today and gain valuable insights into your fuel consumption patterns.
              </p>
              <Link to="/dashboard">
                <motion.button
                  className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Dashboard
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} iVFuel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

