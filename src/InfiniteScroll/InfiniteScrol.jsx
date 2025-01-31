import React from 'react'
import './InfiniteScroll.css'

const InfiniteScrol = ({ images, speed = 5000 }) => {

  return (
    <div>
      <div className="main-scroll-container">
      <div className="inner">
      <div className="wrapper">
        <section className='positive'style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
        <section className='positive'style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
        <section className='positive'style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
      </div>
      <div className="main-scroll-container">
      <div className="inner">
      <div className="wrapper">
        <section className='negative'style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
        <section className='negative'style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="icon" key={id}>
              <span>{image}</span>
            </div>
          ))}
        </section>
        <section className='negative'style={{ "--speed": `${speed}ms` }}>
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
