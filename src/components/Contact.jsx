import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>
      <p>Email: harshaadapa23@gmail.com</p>
      <p>Phone: 9515445632</p>
    </motion.section>
  );
}