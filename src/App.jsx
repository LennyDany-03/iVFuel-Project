"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import DeviceSetup from "./pages/DeviceSetup"
import Logs from "./pages/Logs"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true")
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false")
    setIsLoggedIn(false)
  }

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            {!isLoggedIn ? (
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<Home onLogout={handleLogout} />} />
                <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
                <Route path="/setup" element={<DeviceSetup onLogout={handleLogout} />} />
                <Route path="/logs" element={<Logs onLogout={handleLogout} />} />
                <Route path="/about" element={<About onLogout={handleLogout} />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  )
}

export default App

