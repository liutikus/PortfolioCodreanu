import React from 'react'
import videobackground from '../assets/background-video.mp4'
const VideoBack = () => {
  return (
    <div >
        <div className='video-back'></div>
      <video className='video' loop muted >
        <source src={videobackground} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoBack
