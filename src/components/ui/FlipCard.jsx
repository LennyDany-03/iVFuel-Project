"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const FlipCard = ({ front, back, className = "", delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      className={`relative h-full w-full perspective-1000 cursor-pointer ${className}`}
      onClick={toggleFlip}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        type: "spring",
        stiffness: 100,
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FlipCard

