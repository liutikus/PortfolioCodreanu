import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';

import './Info.css'


const Info = () => {

    const [text, setText] = useState('code')

    
    const codeText = ['code', '#ode', 'c%de', 'co^e', 'cod&', '#%^&']

    useEffect(() => {
        let index = 0;
    
        const interval = setInterval(() => {
      index = (index + 1) % codeText.length
          setText(codeText[index]);
        }, 500);
    
       
        return () => clearInterval(interval);
      }, []); 
    
    
    
  return (
    <div>

        <div className="info-container">
        <div className="type-info">
      <Typewriter 
      options={{
        strings: ['hi, my name is nicolae codreanu and'],
        autoStart: false,
        loop: true,
      }}/>
        </div>
        <div className="info">
            <p>i'm a forntend developer who writes</p>
            <p>elegant, clean and efficient {text}</p>
        </div>

        </div>
      
    </div>
  )
}

export default Info
