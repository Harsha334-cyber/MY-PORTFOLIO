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

      {/* Certificate 1 */}
      <div className="certificate-card">
        <h3>Generative AI & Cloud Computing Foundations</h3>
        <p>
          Completed a foundational program covering Generative AI concepts,
          cloud computing basics, real-world use cases, and responsible AI
          practices.
        </p>
        <span className="issuer">Google Cloud</span>
      </div>

      {/* Certificate 2 */}
      <div className="certificate-card">
        <h3>Python for Data Science</h3>
        <p>
          Gained hands-on experience with Python for data analysis including
          NumPy, Pandas, data cleaning, exploratory data analysis, and basic
          visualizations.
        </p>
        <span className="issuer">NPTEL</span>
      </div>

      {/* Certificate 3 */}
      <div className="certificate-card">
        <h3>Microsoft Azure AI Fundamentals</h3>
        <p>
          Learned core AI concepts, Azure AI services, machine learning basics,
          and responsible AI principles using Microsoft Azure.
        </p>
        <span className="issuer">Microsoft</span>
      </div>

      {/* Certificate 4 */}
      <div className="certificate-card">
        <h3>Full Stack Web Development</h3>
        <p>
          Built responsive web applications using HTML, CSS, JavaScript, and
          backend technologies, focusing on real-world development practices.
        </p>
        <span className="issuer">Online Learning Platform</span>
      </div>

      {/* Certificate 5 */}
      <div className="certificate-card">
        <h3>Data Analysis & Visualization</h3>
        <p>
          Worked with structured datasets to analyze trends and create
          interactive dashboards using tools like Excel and Power BI.
        </p>
        <span className="issuer">Self-Learning / Academic Projects</span>
      </div>
    </motion.section>
  );
}
