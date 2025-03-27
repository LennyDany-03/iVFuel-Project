"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Home } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-950">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <span className="text-white font-bold text-4xl">404</span>
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 text-white">Oops! Page Not Found</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <motion.button
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 mx-auto shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound

