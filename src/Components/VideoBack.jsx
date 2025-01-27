import React from 'react'

const VideoBack = () => {
  return (
    <div >
        <div className='video-back'></div>
      <video className='video' loop muted >
        <source src='././src/assets/background-video.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoBack
