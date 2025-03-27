"use client"

import { motion } from "framer-motion"

const Toggle = ({ isOn, onToggle, label }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <label className="relative inline-block w-16 h-8 cursor-pointer">
        <input type="checkbox" className="opacity-0 w-0 h-0" checked={isOn} onChange={onToggle} />
        <motion.span
          className={`absolute top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-300 ${
            isOn ? "bg-blue-500" : "bg-gray-700"
          }`}
          layout
        >
          <motion.span
            className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md"
            animate={{ x: isOn ? 32 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.span>
      </label>
      {label && <span className="text-sm font-medium text-gray-300">{label}</span>}
    </div>
  )
}

export default Toggle

