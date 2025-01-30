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

    console.log(mousePosition)

    const variants={
        default:{
            x:mousePosition.x-10,
            y:mousePosition.y-10,
            transition: {
                type: "smooth",
                duration: 0,
              },
        }
        
    }

  return (
    <div>
      <motion.div className='cursor'
      variants={variants}
        animate='default'
        // style={{display:'none'}}
      >go to project</motion.div>
    </div>
  )
}

export default CursorHover
