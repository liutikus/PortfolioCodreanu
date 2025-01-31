import React from 'react'
import Nav from './Nav/Nav'
import './index.css'
import VideoBack from './Components/VideoBack'
import SideBar from './SideBar/SideBar'
import Info from './Info/Info'
import Projects from './Projects/Projects'
import Testprojects from './Components/testprojects'
import InfiniteScrol from './InfiniteScroll/InfiniteScrol'
import { SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { FaCss3Alt, FaGithub, FaGitAlt, FaJsSquare, FaHtml5,FaReact, FaBootstrap } from "react-icons/fa";



const App = () => {
  const images = [
 <FaCss3Alt/>,
 <FaJsSquare/>,
 <FaHtml5/>,
 <FaReact/>,
 <FaBootstrap/>,
 <SiAdobephotoshop/>,
 <VscVscode/>,
 <FaGithub/>,
 <FaGitAlt/>,




  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));

  return (
    <div>
      <Nav/>
     <VideoBack/>
      <SideBar/>
      <Info/>
       < InfiniteScrol images={images} speed={22000} />
      <Projects/>
      <Testprojects/>
    </div>
  )
}

export default App
