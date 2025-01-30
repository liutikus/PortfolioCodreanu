import React from "react";
import "./Projects.css";
import projectImg1 from "../assets/Screenshot (11).png";
import { motion} from "motion/react";
import CursorHover from "../Components/CursorHover";

const Projects = () => {
  return (
    <div>
      <div
        className="projects-container"
      >
        <CursorHover/>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="title"
        >
          projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="card-projects"
        >
          <div className="info-project-container">
            <div
              className="project-info-img"
              onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.target.style.opacity = "0")}
            ></div>
            <img src={projectImg1} alt="zfg" />
          </div>

          <p>a e-commerce website with advanced filtering</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="card-projects"
        >
          <p>asdfasdfsadfasddfsad</p>
          <div className="info-project-container">
            <div
              className="project-info-img"
              onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.target.style.opacity = "0")}
            ></div>
            <img src={projectImg1} alt="zfg" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="card-projects"
        >
          <div className="info-project-container">
            <div
              className="project-info-img"
              onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.target.style.opacity = "0")}
            ></div>
            <img src={projectImg1} alt="zfg" />
          </div>
          <p>asdfasdfsadfasddfsad</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
