import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* LEFT CONTENT */}
      <div>
        <h1>
          Hello, I’m <br />
          <span>Adapa Harsha</span>
        </h1>

        <h3>Full Stack Developer & Data Analyst</h3>

        <p>
          B.Tech 2nd-year student at Anil Neerukonda Institute of Technology and
          Sciences (ANITS), passionate about building modern web applications,
          data-driven systems, and AI-based solutions.
        </p>

        <div className="btn-group">
          <a className="btn" href="mailto:harshaadapa23@gmail.com">
            Contact Me
          </a>

          <a
            className="btn"
            href="https://www.linkedin.com/in/harsha-adapa-822b88359"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="btn"
            href="https://github.com/Harsha334-cyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="profile-wrapper">
        <img
          src={profile}
          alt="Adapa Harsha Profile"
          className="profile-img"
        />
      </div>
    </motion.section>
  );
}
