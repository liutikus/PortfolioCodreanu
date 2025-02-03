import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as motion from "motion/react-client";
import { CiCircleCheck } from "react-icons/ci";
import { VscError } from "react-icons/vsc";
import { AnimatePresence } from "motion/react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

import "./Contact.css";

const Contact = ({innerRef}) => {
  const form = useRef();

  const [isClick, setIsClick] = useState(false);
  const [toastSend, setToastSend] = useState({
    text: "",
    color: "",
    icons: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nguvtwe", "template_7os4y06", form.current, {
          publicKey: 'z66FnOgrwg_35S5bs',
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setToastSend({
            text: "sent successfully",
            color: "#aae8aa",
            icons: <CiCircleCheck />,
          });
          setIsClick(true);
          setTimeout(() => setIsClick(false), 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setToastSend({
            text: "failed",
            color: "#ea9b9b",
            icons: <VscError />,
          });
          setIsClick(true);
          setTimeout(() => setIsClick(false), 2000);

          console.log(isClick);
        }
      );
  };

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopy = () => {
    copyTextToClipboard("niclcodreanu@gmail.com")
      .then(() => {
        console.log("SUCCESS!");
        setToastSend({
          text: "Copied",
          color: "#aae8aa",
          icons: <CiCircleCheck />,
        });
        setIsClick(true);
        setTimeout(() => setIsClick(false), 2000);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setToastSend({
          text: "failed",
          color: "#ea9b9b",
          icons: <VscError />,
        });
        setIsClick(true);
        setTimeout(() => setIsClick(false), 2000);

        console.log(isClick);
      });
  };

  return (
    <div ref={innerRef} className="input-message-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-name">
          <label>name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="input-mail">
          <label>email</label>
          <input type="email" name="user_email" className="input-mail" />
        </div>
        <div className="input-text">
          <label>message</label>
          <textarea name="message" />
        </div>
        {/* <input type="submit" value="Send" className='send-btn' /> */}
        <motion.button
          type="submit"
          value="Send"
          className="send-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          send
        </motion.button>
      </form>
      <AnimatePresence initial={false}>
        {isClick ? (
          <motion.div
            className="toast"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
            key="box"
          >
            <p>{toastSend.text}</p>{" "}
            <p style={{ color: toastSend.color }}>{toastSend.icons}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="contacts-container">
        <motion.button
          onClick={handleCopy}
          className="send-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          copy
        </motion.button>
        <p>my email: niclcodreanu@gmail.com</p>
        <div className="icons">
        <motion.a href="https://github.com/liutikus"target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        ><FaGithub/></motion.a>
       <motion.a href="https://github.com/liutikus"target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        ><FaLinkedin/></motion.a>


        </div>
      </div>
    </div>
  );
};

export default Contact;
