import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Certificates</h2>

      <div className="certificate-card">
        <h3>Generative AI & Cloud Computing Foundations</h3>
        <p>
          Completed a foundational course on Generative AI and Cloud Computing
          offered by Google Cloud, covering AI concepts, cloud fundamentals, and
          practical use cases.
        </p>
        <span className="issuer">Google Cloud</span>
      </div>

      <div className="certificate-card">
        <h3>Python for Data Science</h3>
        <p>
          Learned Python programming for data analysis including NumPy, Pandas,
          data visualization, and real-world data handling techniques.
        </p>
        <span className="issuer">NPTEL</span>
      </div>

      <div className="certificate-card">
        <h3>Microsoft Azure AI Fundamentals</h3>
        <p>
          Gained hands-on knowledge of AI services, responsible AI principles,
          and cloud-based AI solutions using Microsoft Azure.
        </p>
        <span className="issuer">Microsoft</span>
      </div>
    </motion.section>
  );
}
