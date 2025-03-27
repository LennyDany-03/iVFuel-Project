"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Moon } from "lucide-react"

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showVehiclePopup, setShowVehiclePopup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      setShowVehiclePopup(true)
    }
  }

  const handleVehicleSelect = (type) => {
    localStorage.setItem("vehicleType", type)
    onLogin()
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-md transition-colors"
        aria-label="Dark mode enabled"
      >
        <Moon className="w-5 h-5 text-blue-400" />
      </button>

      <motion.div
        className="w-full max-w-md"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="bg-gray-900 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm border border-blue-900/50"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)" }}
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <motion.div
                className="inline-block w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-2xl">iV</span>
              </motion.div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                iVFuel
              </h2>
              <p className="text-gray-400 mt-2">Real-time Fuel Monitoring, Redefined.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-blue-900/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg border border-blue-900/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-blue-400 hover:underline text-sm">
                Forgot Password?
              </a>
              <p className="mt-4 text-gray-400 text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Vehicle Selection Popup */}
      {showVehiclePopup && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-xl p-8 max-w-md w-full shadow-2xl border border-blue-900/50"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-white">Select Vehicle Type</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                className="p-6 rounded-xl flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg"
                onClick={() => handleVehicleSelect("two-wheeler")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="18" cy="17" r="3" />
                  <circle cx="6" cy="17" r="3" />
                  <path d="M6 17H2v-4l8-8 1 1h5l2 6h-6" />
                </svg>
                <span className="font-medium">Two Wheeler</span>
              </motion.button>

              <motion.button
                className="p-6 rounded-xl flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-lg"
                onClick={() => handleVehicleSelect("four-wheeler")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>
                <span className="font-medium">Four Wheeler</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Login

