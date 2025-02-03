import React, { useEffect, useState } from "react";
import "./Projects.css";
import projectImg1 from "../assets/Screenshot (11).png";
import { motion } from "motion/react";
import CursorHover from "../Components/CursorHover";



const Projects = ({innerRef}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [cursorVariant,setCursorVariant] = useState('none')
  const [cursorText, setCursorText] = useState('')
  useEffect(() => {

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

  }, [])


  const variants = {
    none:{
      opacity: 0,
      height:0,
      width:0,
      x: mousePosition.x ,
      y: mousePosition.y
    },
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "#e9ecef",
       mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
        x: { duration: 0 },  
        y: { duration: 0 },
        height: { duration: 0.2 },  
        width: { duration: 0.2 },
      }
    },
    project: {
      opacity: 0.9,
      backgroundColor: "#000",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mousePosition.x ,
      y: mousePosition.y ,
      transition: {
        type: "spring",
        mass: 0.6,
        x: { duration: 0 },  
        y: { duration: 0 },
        height: { duration: 0.3 },  
        width: { duration: 0.3 },
      }
    },


  }

const mouseEnter = ()=> setCursorVariant('default')
const mouseLeave = ()=> setCursorVariant('none')

const mouseEnterImg = ()=>{
  setCursorVariant('project')
  setCursorText('open')
} 

const mouseLeaveImg = ()=>{
  setCursorVariant('default')
  setCursorText('')

} 

 const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };

  return (
    <div>
      <div
      ref={innerRef}
        className="projects-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.1 }}
          className="title"
        >
          projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          viewport={{ once: true, amount: 0.1 }}
          className="card-projects"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >

          <img src={projectImg1} alt="zfg"
          onMouseEnter={mouseEnterImg}
          onMouseLeave={mouseLeaveImg}
          />


          <p>a e-commerce website with advanced filtering</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          viewport={{ once: true, amount: 0.1 }}
          className="card-projects second-card"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          
        >

          <img src={projectImg1} alt="zfg"
          onMouseEnter={mouseEnterImg}
          onMouseLeave={mouseLeaveImg}

          />


          <p>a e-commerce website with advanced filtering</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          viewport={{ once: true, amount: 0.1 }}
          className="card-projects"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >

          <img src={projectImg1} alt="zfg"
          onMouseEnter={mouseEnterImg}
          onMouseLeave={mouseLeaveImg}

          
          />


          <p>a e-commerce website with advanced filtering</p>
        </motion.div>
        <motion.div className='cursor'
          variants={variants}
          animate={cursorVariant}
          transition={spring}
        ><span className="text-cursor">{cursorText}</span></motion.div>
      </div>
    </div>
  );
};

export default Projects;
