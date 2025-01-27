import React from 'react'
import Nav from './Nav/Nav'
import './index.css'
import VideoBack from './Components/VideoBack'
import SideBar from './SideBar/SideBar'

const App = () => {
  return (
    <div>
      <Nav/>
     <VideoBack/>
      <SideBar/>
    </div>
  )
}

export default App
