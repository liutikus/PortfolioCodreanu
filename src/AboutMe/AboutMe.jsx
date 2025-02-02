import React from 'react'
import './AboutMe.css'
import { motion, useMotionValue, useTransform } from "framer-motion";


const AboutMe = () => {
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);
    const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
    const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
    const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
    const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values
  
    const handleMouseMove = (event) => {
      const offsetX = event.clientX - window.innerWidth / 2;
      const offsetY = event.clientY - window.innerHeight / 2;
  
      cardX.set(offsetX);
      cardY.set(offsetY);
    };
  
    const handleMouseLeave = () => {
      cardX.set(0);
      cardY.set(0);
    };
  
    return (
    <div>
      <motion.div
      className='main-card-container'

        style={{
            overflowY:'hidden',

          perspective: 800,
        //   display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* this div can be used as the 'dotted grid' */}
        <motion.div
        className='about-card-container'
          style={{
            overflowY:'hidden',
            margin: "auto",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            perspective: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rotateX,
            rotateY
          }}
          transition={{ velocity: 0 }}
        >
          <motion.div
          className='about-card'
            key="card"
            style={{
              boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
              borderRadius: 10,
              overflowY:'hidden',
            color:'white',
            paddingInline:'2em',
              transformStyle: "preserve-3d",
              perspective: 800, // Set perspective on the card
              cardRotateX,
              cardRotateY
            }}
            transition={{ velocity: 0 }}
          >
            <p>i'm a passionate frontend developer with 2 years of hands-on experience in crafting dynamic and engaging websites. specializing in react and also well-versed in vanilla javascript, I bring your brand's vision to life through beautifully animated, responsive, and user-friendly web designs.</p>
            {/* <p>My work is defined by elegant, clean code and a keen eye for detail, ensuring that every project not only looks stunning but also performs flawlessly. Whether you're looking to revitalize your online presence or launch a completely new digital experience, I am here to help your brand shine in the digital landscape.</p> */}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
      className='main-card-container'

        style={{
            overflowY:'hidden',

          perspective: 800,

        //   display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* this div can be used as the 'dotted grid' */}
        <motion.div
        className='about-card-container'
          style={{
            overflowY:'hidden',
            margin: "auto",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            perspective: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rotateX,
            rotateY
          }}
          transition={{ velocity: 0 }}
        >
          <motion.div
          className='about-card'
            key="card"
            style={{
              boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
              borderRadius: 10,
              overflowY:'hidden',
            color:'white',
            paddingInline:'2em',
              transformStyle: "preserve-3d",
              perspective: 800, // Set perspective on the card
              cardRotateX,
              cardRotateY
            }}
            transition={{ velocity: 0 }}
          >
            <p>my work is defined by elegant, clean code and a keen eye for detail, ensuring that every project not only looks stunning but also performs flawlessly. whether you're looking to revitalize your online presence or launch a completely new digital experience, i am here to help your brand shine in the digital landscape.</p>
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
    );
}

export default AboutMe
