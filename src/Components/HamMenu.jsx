import React from 'react'

const HamMenu = ({burgerToggle}) => {

  return (
    <div>
        <div className={burgerToggle ? 'menu active' : 'menu'}>
            <div className="blur">
                <div className="menu-content">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HamMenu
