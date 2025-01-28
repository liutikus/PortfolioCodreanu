import React from 'react'
import './Projects.css'
import { motion } from "motion/react"


const Projects = () => {


  return (
    <div>
    
      <div className="projects-container">
        <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: true, amount:1}}
            className="title">
            projects
        </motion.div>
        <motion.div 
             initial={{opacity: 0, y: 50}}
             whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
             viewport={{once: true, amount:0.5}}
        className="card-projects">
        <img src="src\assets\Screenshot (11).png" alt="zfg" />
      <p>asdfasdfsadfasddfsad</p>

        </motion.div>
        <motion.div 
             initial={{opacity: 0, y: 50}}
             whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
             viewport={{once: true, amount:0.4}}
        className="card-projects">
      <p>asdfasdfsadfasddfsad</p>
        <img src="src\assets\Screenshot (11).png" alt="zfg" />

        </motion.div>
        <motion.div 
             initial={{opacity: 0, y: 50}}
             whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
             viewport={{once: true, amount:0.3}}
        className="card-projects">
        <img src="src\assets\Screenshot (11).png" alt="zfg" />
      <p>asdfasdfsadfasddfsad</p>

        </motion.div>
      </div>
      
    </div>
  )
}

export default Projects
