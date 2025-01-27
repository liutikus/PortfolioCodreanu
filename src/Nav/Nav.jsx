import React, { useState } from 'react'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import './Nav.css'
import HamMenu from '../Components/HamMenu'
import { FaConnectdevelop } from "react-icons/fa";



const Nav = () => {

    const [burgerToggle, setBurgerToggle] =useState(false)

    const handleToggle = e=>setBurgerToggle(!burgerToggle)

  return (
    <div>
      <div className="nav-container">
        <div className="logo">
        <span><FaConnectdevelop/></span>
            <p>Nicolae Codreanu</p>
        </div>
        <div className="info-links">

            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </div>
        <div className="burger-icon">
    <Burger isOpen={burgerToggle} onClick={handleToggle}/>
        </div>
      </div>
    <HamMenu burgerToggle={burgerToggle}/>

      
    </div>
  )
}

export default Nav
