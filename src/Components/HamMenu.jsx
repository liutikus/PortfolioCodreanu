import React, { useState } from 'react'
import { CiHome, CiDesktop, CiCircleInfo } from "react-icons/ci";
import * as motion from "motion/react-client";



const HamMenu = ({burgerToggle,handleContactScroll, handleProjectsScroll, handleHomeScroll}) => {

function handleToggle (input){
  const name = burgerToggle? `${input} active` : `${input}`

// const handleClick = e=>{

// }

  return name;
}
  return (
    <div>
        <div className='menu'>
                <div className="menu-content">
                  <div className={handleToggle('first-icon')}
                  // onClick={handleClick}
                  >
                    <motion.button onClick={handleHomeScroll}
                     whileHover={{ scale: 0.9 }}
                     whileTap={{ scale:1}}
                    ><CiHome /></motion.button>
                </div>
                <div className={handleToggle('second-icon')}>
                  <motion.button onClick={handleProjectsScroll}
                   whileHover={{ scale: 0.9 }}
                   whileTap={{ scale:1}}
                  ><CiDesktop/></motion.button>
                </div>
                <div className={handleToggle('third-icon')}>
                  <motion.button onClick={handleContactScroll}
                   whileHover={{ scale: 0.9 }}
                   whileTap={{ scale:1}}
                  ><CiCircleInfo /></motion.button>
                </div>
                
                </div>
        </div>
      
    </div>
  )
}

export default HamMenu
