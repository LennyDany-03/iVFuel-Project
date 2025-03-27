"use client"

import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Always apply dark mode to document
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")

    // Store in localStorage for consistency
    localStorage.setItem("theme", "dark")
  }, [])

  const toggleTheme = () => {
    // Keep dark mode enabled, but allow the toggle function to exist
    // for future functionality if needed
    setIsDarkMode(true)
    localStorage.setItem("theme", "dark")
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

