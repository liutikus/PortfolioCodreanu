import React, { useState } from 'react'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import './Nav.css'
import HamMenu from '../Components/HamMenu'
import { FaConnectdevelop } from "react-icons/fa";
import { Spin as Hamburger, Spin } from 'hamburger-react'



const Nav = ({handleHomeScroll,handleProjectsScroll,handleContactScroll, innerRef}) => {

    const [burgerToggle, setBurgerToggle] =useState(false)

    const handleToggle = e=>setBurgerToggle(!burgerToggle)

  return (
    <div>
      <div ref={innerRef} className="nav-container">
        <div className="logo">
        <span><FaConnectdevelop/></span>
            <p>nicolae codreanu</p>
        </div>
        <div className="info-links">

            <button onClick={handleHomeScroll} >home</button>
            <button onClick={handleProjectsScroll} >projects</button>
            <button onClick={handleContactScroll} >contacts</button>


        </div>
        <div className="burger-icon"onClick={handleToggle}>
          <Spin/>
        </div>
 
      </div>
    <HamMenu burgerToggle={burgerToggle}
     handleHomeScroll={handleHomeScroll}
     handleProjectsScroll={handleProjectsScroll}
     handleContactScroll={handleContactScroll}
     />

      
    </div>
  )
}

export default Nav
