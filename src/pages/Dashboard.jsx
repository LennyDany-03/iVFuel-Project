"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Fuel } from "lucide-react"

const FlowRateCard = () => {
  const [flow, setFlow] = useState<number | null>(null)
  const [total, setTotal] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch("http://192.168.101.15/api/flow-data") // replace with Arduino IP
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        
        const data = await res.json()
        setFlow(data.flow)
        setTotal(data.total)
        setError(null)
      } catch (err) {
        console.error("Failed to fetch:", err)
        setError("Failed to fetch flow data")
        setFlow(null)
        setTotal(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-blue-900/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <Fuel className="w-6 h-6 text-blue-400 mr-2" />
          Fuel Flow
        </h2>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <span className="text-gray-400 animate-pulse">Loading flow data...</span>
        </div>
      ) : error ? (
        <div className="text-red-400 text-center">
          {error}
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Flow Rate:</span>
            <span className="font-medium text-white">
              {flow !== null ? `${flow.toFixed(2)} L/min` : "N/A"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Total Volume:</span>
            <span className="font-medium text-white">
              {total !== null ? `${total.toFixed(2)} L` : "N/A"}
            </span>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500 text-center">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </motion.div>
  )
}

export default FlowRateCard