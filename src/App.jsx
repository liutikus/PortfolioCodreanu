import React, { useRef } from "react";
import Nav from "./Nav/Nav";
import "./index.css";
import VideoBack from "./Components/VideoBack";
import Info from "./Info/Info";
import Projects from "./Projects/Projects";
import Testprojects from "./Components/testprojects";
import InfiniteScrol from "./InfiniteScroll/InfiniteScrol";
import { SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";
import CursorHover from "./Components/CursorHover";
import FooterP from "./FooterP/FooterP";

const App = () => {
  const images = [
    <FaCss3Alt />,
    <FaJsSquare />,
    <FaHtml5 />,
    <FaReact />,
    <FaBootstrap />,
    <SiAdobephotoshop />,
    <VscVscode />,
    <FaGithub />,
    <FaGitAlt />,
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)


const handleClickScroll = (sectionRef)=>{
  sectionRef.current?.scrollIntoView({behavior: 'smooth'});
  console.log('sadfsdaf')
}


  return (
    <div>
      <Nav innerRef={homeRef}  
      handleHomeScroll={()=>handleClickScroll(homeRef)}
      handleProjectsScroll={()=>handleClickScroll(projectsRef)}
      handleContactScroll={()=>handleClickScroll(contactRef)}

      />
      <VideoBack />
      <Info />
      <InfiniteScrol images={images} direction='negative' speed={22000} />
      <AboutMe />
      <InfiniteScrol images={images} direction='positive' speed={22000} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
      <FooterP  
      handleHomeScroll={()=>handleClickScroll(homeRef)}
      />
      <Testprojects />
      <CursorHover />
    </div>
  );
};

export default App;
