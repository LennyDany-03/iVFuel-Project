"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/layout/Navbar"
import FlowRateCard from "../components/dashboard/FlowRateCard"
import TotalVolumeCard from "../components/dashboard/TotalVolumeCard"
import FlowRateChart from "../components/charts/FlowRateChart"
import FlipCard from "../components/ui/FlipCard"
import { Fuel, Clock, User } from "lucide-react"

const Dashboard = ({ onLogout }) => {
  const [vehicleType, setVehicleType] = useState("")

  useEffect(() => {
    const storedType = localStorage.getItem("vehicleType") || "Not Selected"
    setVehicleType(storedType)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar onLogout={onLogout} />

      <main className="flex-1 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <motion.h1
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Fuel Flow Dashboard
            </motion.h1>

            <motion.div
              className="mt-4 md:mt-0 px-4 py-2 bg-gray-900 rounded-full border border-blue-900/50 flex items-center shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <User className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-400">Vehicle Type:</span>
              <span className="ml-2 font-medium text-white">{vehicleType.replace("-", " ")}</span>
            </motion.div>
          </div>

          {/* Main Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FlowRateCard />
            <TotalVolumeCard />
          </div>

          {/* Chart */}
          <div className="mb-6">
            <FlowRateChart />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recent Fuel Card */}
            <div className="h-full">
              <FlipCard
                delay={1}
                front={
                  <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-900/50">
                    <Fuel className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">Recent Fuel Up</h3>
                    <p className="text-gray-400 text-sm">Click to view details</p>
                  </div>
                }
                back={
                  <div className="h-full flex flex-col p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-900/50">
                    <h3 className="text-xl font-bold mb-4 text-center text-white">Recent Fuel Up</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Last Refuel:</span>
                        <span className="font-medium text-white">23 Mar 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Amount:</span>
                        <span className="font-medium text-white">₹500</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Quantity:</span>
                        <span className="font-medium text-white">5.2 L</span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            {/* Fuel Details Card */}
            <div className="h-full">
              <FlipCard
                delay={2}
                front={
                  <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-900/50">
                    <Clock className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">Fuel Details</h3>
                    <p className="text-gray-400 text-sm">Click to view details</p>
                  </div>
                }
                back={
                  <div className="h-full flex flex-col p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-900/50">
                    <h3 className="text-xl font-bold mb-4 text-center text-white">Fuel Details</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Average Mileage:</span>
                        <span className="font-medium text-white">45 km/L</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Distance:</span>
                        <span className="font-medium text-white">1250 km</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Fuel Efficiency:</span>
                        <span className="font-medium text-white">Good</span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            {/* User Details Card */}
            <div className="h-full">
              <FlipCard
                delay={3}
                front={
                  <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-900/50">
                    <User className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">User Details</h3>
                    <p className="text-gray-400 text-sm">Click to view details</p>
                  </div>
                }
                back={
                  <div className="h-full flex flex-col p-6 bg-gray-900 rounded-xl shadow-lg border border-blue-900/50">
                    <h3 className="text-xl font-bold mb-4 text-center text-white">User Details</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Name:</span>
                        <span className="font-medium text-white">John Doe</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Vehicle Type:</span>
                        <span className="font-medium text-white">{vehicleType.replace("-", " ")}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Member Since:</span>
                        <span className="font-medium text-white">March 2024</span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

