"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/layout/Navbar"
import Card from "../components/ui/Card"
import Toggle from "../components/ui/Toggle"
import { Wifi, RefreshCw, Settings, Save } from "lucide-react"

const DeviceSetup = ({ onLogout }) => {
  const [wifiStatus, setWifiStatus] = useState(true)
  const [calibrationFactor, setCalibrationFactor] = useState("1.0")
  const [deviceInfo, setDeviceInfo] = useState({
    ipAddress: "192.168.1.100",
    ssid: "iVFuel_Network",
    macAddress: "00:1B:44:11:3A:B7",
    firmwareVersion: "1.2.3",
  })
  const [isRestarting, setIsRestarting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleWifiToggle = () => {
    setWifiStatus(!wifiStatus)
  }

  const handleRestart = () => {
    setIsRestarting(true)

    // Simulate API call to restart device
    setTimeout(() => {
      setIsRestarting(false)
    }, 3000)
  }

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call to save calibration factor
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)

      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 1500)
  }

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
            Device Setup
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Device Info Card */}
            <Card delay={1}>
              <div className="flex items-center mb-6">
                <Settings className="w-6 h-6 text-blue-400 mr-2" />
                <h2 className="text-xl font-bold text-white">Device Information</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">IP Address:</span>
                  <span className="font-medium text-white">{deviceInfo.ipAddress}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Connected SSID:</span>
                  <span className="font-medium text-white">{deviceInfo.ssid}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">MAC Address:</span>
                  <span className="font-medium text-white">{deviceInfo.macAddress}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Firmware Version:</span>
                  <span className="font-medium text-white">{deviceInfo.firmwareVersion}</span>
                </div>
              </div>

              <div className="mt-8">
                <motion.button
                  className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 shadow-md"
                  onClick={handleRestart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isRestarting}
                >
                  {isRestarting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Restarting...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-5 h-5" />
                      Restart Sensor
                    </>
                  )}
                </motion.button>
              </div>
            </Card>

            {/* Connectivity Card */}
            <Card delay={2}>
              <div className="flex items-center mb-6">
                <Wifi className="w-6 h-6 text-blue-400 mr-2" />
                <h2 className="text-xl font-bold text-white">Connectivity</h2>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6 py-4">
                <Toggle
                  isOn={wifiStatus}
                  onToggle={handleWifiToggle}
                  label={wifiStatus ? "Wi-Fi Connected" : "Wi-Fi Disconnected"}
                />

                <div className="text-center">
                  <p className="text-gray-400 mb-2">Status:</p>
                  <div className="flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${wifiStatus ? "bg-green-500" : "bg-red-500"}`}></div>
                    <span className="font-medium text-white">{wifiStatus ? "Online" : "Offline"}</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 mb-2">Signal Strength:</p>
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className={`w-2 rounded-sm ${wifiStatus && bar <= 3 ? "bg-blue-400" : "bg-gray-600"}`}
                        style={{ height: `${bar * 5}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Calibration Card */}
            <Card delay={3} className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Settings className="w-6 h-6 text-blue-400 mr-2" />
                <h2 className="text-xl font-bold text-white">Calibration Settings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="calibration" className="block text-sm font-medium text-gray-300 mb-2">
                    Calibration Factor
                  </label>
                  <input
                    type="number"
                    id="calibration"
                    step="0.01"
                    min="0.1"
                    max="10"
                    className="w-full px-4 py-2 rounded-lg border border-blue-900/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                    value={calibrationFactor}
                    onChange={(e) => setCalibrationFactor(e.target.value)}
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Adjust this value to calibrate the flow sensor. Default is 1.0
                  </p>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="relative">
                    <motion.button
                      className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 shadow-md"
                      onClick={handleSave}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSaving}
                    >
                      {isSaving ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5" />
                          Save Calibration
                        </>
                      )}
                    </motion.button>

                    {showSuccess && (
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span className="text-white font-medium">Saved Successfully!</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DeviceSetup

