import React, { useEffect, useState } from 'react'
import { motion} from "motion/react";


const CursorHover = () => {

    const [mousePosition, setMousePosition]=useState({
        x: 0,
        y:0
    })

    useEffect(()=>{

        const mouseMove=(e)=>{
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove)

    }, [])

    const variants={
        default:{
            x:mousePosition.x-100,
            y:mousePosition.y-100,
            transition: {
                type: "smooth",
                duration: 0,
              },
        }
        
    }

  return (
    <div>
      <motion.div className='under-cursor'
      variants={variants}
        animate='default'
      ></motion.div>
    </div>
  )
}

export default CursorHover
