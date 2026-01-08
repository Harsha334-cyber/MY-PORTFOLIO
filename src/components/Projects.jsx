import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <h2>Projects</h2>

      <motion.div variants={cardVariant} className="project-card">
        <h3>📰 Fake News Detection System</h3>
        <p>
          ML-based fake news classification using NLP, TF-IDF and SVM with a
          Streamlit web interface for real-time predictions.
        </p>

        <div className="tags">
          <span>NLP</span>
          <span>ML</span>
          <span>SVM</span>
          <span>TF-IDF</span>
          <span>Streamlit</span>
        </div>

        <div className="btn-group">
          <a
            className="btn glow"
            href="https://news-detection-fake-real.onrender.com"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </motion.div>

      <motion.div variants={cardVariant} className="project-card">
        <h3>🏥 Arogya Mitra</h3>
        <p>
          AI-based healthcare assistant with multilingual voice/text, hospital
          discovery, medicine reminders using Azure AI.
        </p>

        <div className="tags">
          <span>Azure AI</span>
          <span>NLP</span>
          <span>Speech</span>
          <span>Healthcare</span>
        </div>

        <div className="btn-group">
          <a className="btn glow" href="https://1drv.ms/v/c/11e9fc7af942e3f1/IQBW5KPC7IiNSoM1W-Bzxh1IAak3eFN8XW6L9Umr_sEjjZc" target="_blank">
            Demo
          </a>
          <a className="btn glow" href="https://1drv.ms/v/c/11e9fc7af942e3f1/IQBj38EO_VceRLDk0F3NEMY9AfUw63rvzFyAxIrniySMlu4" target="_blank">
            Pitch
          </a>
        </div>
      </motion.div>

      <motion.div variants={cardVariant} className="project-card">
        <h3>🌍 Earthquake Analysis</h3>
        <p>
          Power BI dashboards visualizing global earthquake trends, magnitude,
          frequency and geographic impact.
        </p>

        <div className="tags">
          <span>Power BI</span>
          <span>Analytics</span>
          <span>Visualization</span>
        </div>

        <div className="btn-group">
          <a
            className="btn glow"
            href="https://drive.google.com/drive/folders/1qrqvhexYQeRKScBehFwiPXiQ6ZmkNppI"
            target="_blank"
          >
            View Files
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
