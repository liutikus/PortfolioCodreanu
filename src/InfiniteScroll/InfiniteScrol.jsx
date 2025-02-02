import React from 'react'
import './InfiniteScroll.css'

const InfiniteScrol = ({ images, speed, direction }) => {

  return (
    <div>
      <div className="main-scroll-container">
      <div className="inner">
      <div className="wrapper">
        <section className={direction}style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
        <section className={direction}style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
        <section className={direction}style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
      </div>
     
    </div>
  )
}

export default InfiniteScrol
