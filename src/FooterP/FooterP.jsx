import React from 'react'
import './FooterP.css'
import { FaRegCopyright } from "react-icons/fa";
import { PiRocketLight } from "react-icons/pi";
import * as motion from "motion/react-client";

const FooterP = ({handleHomeScroll}) => {
  return (
    <div>
      <div className="footer-container">
            <motion.span
            onClick={handleHomeScroll}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            ><PiRocketLight/></motion.span>
            <p><FaRegCopyright/>Nicolae Codreanu 2025</p>
      </div>
    </div>
  )
}

export default FooterP
