"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Droplet } from "lucide-react"

const FlowRateCard = () => {
  const [flowRate, setFlowRate] = useState(0)

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      // Random flow rate between 0.5 and 5.5 L/min
      const newRate = (Math.random() * 5 + 0.5).toFixed(2)
      setFlowRate(newRate)

      // Store in localStorage for offline fallback
      localStorage.setItem("lastFlowRate", newRate)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg border border-blue-900/50 p-6 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl hover:-translate-y-2 hover:border-blue-800/70 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <Droplet className="w-6 h-6 text-blue-400 mr-2" />
          <h3 className="text-xl font-bold text-white">Flow Rate</h3>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 mb-2"
            key={flowRate}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {flowRate}
          </motion.div>
          <p className="text-gray-400 text-lg">Litres/minute</p>
        </div>

        <div className="mt-4 pt-4 border-t border-blue-900/30">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  )
}

export default FlowRateCard

