import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <p>
        I am a B.Tech second-year student at Anil Neerukonda Institute of Technology
        and Sciences (ANITS) with a strong interest in Full Stack Development and
        Data Analysis. I enjoy building responsive web applications and working
        across the complete development lifecycle, from designing user interfaces
        to developing backend services.
      </p>

      <p>
        I have hands-on experience with modern web technologies and data tools,
        and I have worked on real-world projects such as an AI-based health
        assistance application, a fake news detection system using NLP and machine
        learning, and an earthquake data analysis dashboard built with Power BI.
        I am a continuous learner seeking opportunities to apply my skills through
        internships, collaborative projects, and practical challenges.
      </p>
    </motion.section>
  );
}
