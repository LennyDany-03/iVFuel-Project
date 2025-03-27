"use client"

import { motion } from "framer-motion"

const Card = ({ children, className = "", hover = true, delay = 0 }) => {
  return (
    <motion.div
      className={`bg-gray-900 rounded-xl shadow-lg border border-blue-900/50 p-6 transition-all duration-300 ${
        hover ? "hover:shadow-blue-500/10 hover:shadow-xl hover:-translate-y-2 hover:border-blue-800/70" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={hover ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  )
}

export default Card

