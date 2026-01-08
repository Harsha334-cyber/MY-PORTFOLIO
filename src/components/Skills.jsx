import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript, TypeScript, Bootstrap</li>
        <li>Node.js, Express.js</li>
        <li>Python, Java</li>
        <li>NumPy, Pandas, Matplotlib, Seaborn</li>
        <li>Excel, Power BI</li>
      </ul>
    </motion.section>
  );
}