import React from 'react'
import { motion, useScroll } from "motion/react"


const Testprojects = () => {
    const { scrollYProgress } = useScroll()

    

  return (
    <div>
      <div className="main-test-container">
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#e9ecef",
                }}
            />
            <motion.div/>
      </div>
    </div>
  )
}

export default Testprojects
