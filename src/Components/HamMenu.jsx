import React from 'react'

const HamMenu = ({burgerToggle}) => {

  return (
    <div>
        <div className={burgerToggle ? 'menu active' : 'menu'}>
            <div className="blur">
                <div className="menu-content">
                <a href="#">home</a>
                <a href="#">about me</a>
                <a href="#">projects</a>
                <a href="#">contact</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HamMenu
