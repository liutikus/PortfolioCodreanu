import React, { useState } from 'react'
import { CiHome, CiDesktop, CiCircleInfo } from "react-icons/ci";


const HamMenu = ({burgerToggle}) => {

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
                    <a href="#"><CiHome /></a>
                </div>
                <div className={handleToggle('second-icon')}>
                  <a href="#"><CiDesktop/></a>
                </div>
                <div className={handleToggle('third-icon')}>
                  <a href="#"><CiCircleInfo /></a>
                </div>
                
                </div>
        </div>
      
    </div>
  )
}

export default HamMenu
