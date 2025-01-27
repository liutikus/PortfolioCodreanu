import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import './SideBar.css'


const SideBar = () => {
  return (
    <div>
        <div className="sidebar-container">
            <a href="#"><VscGithubInverted /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><BiLogoGmail /></a>

        </div>
      
    </div>
  )
}

export default SideBar
