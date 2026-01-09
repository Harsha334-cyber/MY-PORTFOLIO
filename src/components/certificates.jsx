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
          offered by Google Cloud.
        </p>
        <span className="issuer">Google Cloud</span>
      </div>
    </motion.section>
  );
}
