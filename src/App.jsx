import React from 'react'
import Nav from './Nav/Nav'
import './index.css'
import VideoBack from './Components/VideoBack'
import SideBar from './SideBar/SideBar'
import Info from './Info/Info'
import Projects from './Projects/Projects'
import Testprojects from './Components/testprojects'

const App = () => {
  return (
    <div>
      <Nav/>
     <VideoBack/>
      <SideBar/>
      <Info/>
      <Projects/>
      <Testprojects/>
    </div>
  )
}

export default App
