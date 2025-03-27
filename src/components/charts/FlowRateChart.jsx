"use client"

import { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const FlowRateChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Flow Rate (L/min)",
        data: [],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  })

  useEffect(() => {
    // Initialize with empty data
    const initialLabels = Array.from({ length: 30 }, (_, i) => {
      const time = new Date()
      time.setSeconds(time.getSeconds() - (29 - i))
      return time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    })

    const initialData = Array(30).fill(0)

    setChartData({
      labels: initialLabels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: initialData,
        },
      ],
    })

    // Update chart every second with new data
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newLabels = [...prevData.labels.slice(1)]
        const now = new Date()
        newLabels.push(
          now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        )

        const newData = [...prevData.datasets[0].data.slice(1)]
        // Random flow rate between 0.5 and 5.5 L/min
        newData.push((Math.random() * 5 + 0.5).toFixed(2))

        return {
          labels: newLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(59, 130, 246, 0.1)",
        },
        ticks: {
          color: "rgb(156, 163, 175)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgb(156, 163, 175)",
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(209, 213, 219)",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        titleColor: "rgb(255, 255, 255)",
        bodyColor: "rgb(209, 213, 219)",
        borderColor: "rgba(59, 130, 246, 0.3)",
        borderWidth: 1,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    animation: {
      duration: 300,
    },
  }

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg border border-blue-900/50 p-6 h-full">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold mb-4 text-white">Flow Rate Trend (Last 30 seconds)</h3>
        <div className="flex-1 w-full h-[300px]">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  )
}

export default FlowRateChart

