import React from 'react'
import Nav from './Nav/Nav'
import './index.css'
import VideoBack from './Components/VideoBack'
import SideBar from './SideBar/SideBar'
import Info from './Info/Info'
import Projects from './Projects/Projects'

const App = () => {
  return (
    <div>
      <Nav/>
     <VideoBack/>
      <SideBar/>
      <Info/>
      <Projects/>
    </div>
  )
}

export default App
