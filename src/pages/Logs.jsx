"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/layout/Navbar"
import Card from "../components/ui/Card"
import { Download, RefreshCw, Clock, Filter } from "lucide-react"

const Logs = ({ onLogout }) => {
  const [logs, setLogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [dateFilter, setDateFilter] = useState("all")

  useEffect(() => {
    // Simulate API call to fetch logs
    fetchLogs()
  }, [dateFilter])

  const fetchLogs = () => {
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      // Generate random logs
      const today = new Date()
      const newLogs = []

      for (let i = 0; i < 20; i++) {
        const date = new Date(today)
        date.setHours(date.getHours() - i * 2)

        const flowRate = (Math.random() * 5 + 0.5).toFixed(2)
        const volume = (Number.parseFloat(flowRate) * (Math.random() * 10 + 5)).toFixed(2)

        newLogs.push({
          id: i + 1,
          timestamp: date,
          flowRate: flowRate,
          totalVolume: volume,
        })
      }

      // Apply date filter
      let filteredLogs = newLogs
      if (dateFilter === "today") {
        const todayStart = new Date(today.setHours(0, 0, 0, 0))
        filteredLogs = newLogs.filter((log) => log.timestamp >= todayStart)
      } else if (dateFilter === "week") {
        const weekStart = new Date(today)
        weekStart.setDate(weekStart.getDate() - 7)
        filteredLogs = newLogs.filter((log) => log.timestamp >= weekStart)
      }

      setLogs(filteredLogs)
      setIsLoading(false)
    }, 1000)
  }

  const handleExportCSV = () => {
    // Create CSV content
    const headers = ["ID", "Timestamp", "Flow Rate (L/min)", "Total Volume (L)"]
    const csvContent = logs.map((log) => [log.id, log.timestamp.toLocaleString(), log.flowRate, log.totalVolume])

    // Combine headers and content
    const csv = [headers.join(","), ...csvContent.map((row) => row.join(","))].join("\n")

    // Create download link
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.setAttribute("href", url)
    a.setAttribute("download", `fuel-logs-${new Date().toISOString().split("T")[0]}.csv`)
    a.click()
  }

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
              Fuel Flow Logs
            </motion.h1>

            <motion.div
              className="mt-4 md:mt-0 flex items-center gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-blue-400 mr-2" />
                <select
                  className="px-3 py-1 rounded-lg border border-blue-900/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">Last 7 Days</option>
                </select>
              </div>

              <motion.button
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 shadow-md"
                onClick={fetchLogs}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </motion.button>

              <motion.button
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-2 shadow-md"
                onClick={handleExportCSV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading || logs.length === 0}
              >
                <Download className="w-5 h-5" />
                Export CSV
              </motion.button>
            </motion.div>
          </div>

          <Card>
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
                  <span className="ml-2 text-lg text-white">Loading logs...</span>
                </div>
              ) : logs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No logs found for the selected period.</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-900/30">
                      <th className="px-4 py-3 text-left text-white">ID</th>
                      <th className="px-4 py-3 text-left text-white">Timestamp</th>
                      <th className="px-4 py-3 text-right text-white">Flow Rate (L/min)</th>
                      <th className="px-4 py-3 text-right text-white">Total Volume (L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((log) => (
                      <tr key={log.id} className="border-b border-blue-900/20 hover:bg-blue-900/10 transition-colors">
                        <td className="px-4 py-3 text-gray-300">{log.id}</td>
                        <td className="px-4 py-3 flex items-center text-gray-300">
                          <Clock className="w-4 h-4 text-blue-400 mr-2" />
                          {log.timestamp.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-right font-medium text-gray-300">{log.flowRate}</td>
                        <td className="px-4 py-3 text-right font-medium text-gray-300">{log.totalVolume}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Logs