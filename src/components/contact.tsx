import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800 transition-all duration-1000 ease-in-out"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <footer className="text-center text-gray-100">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p>
        Reach out via <a href="mailto:plmtmbnn@gmail.com" className="text-green-400 underline">email</a> or connect on <a href="https://www.linkedin.com/in/polma-tambunan/" className="text-green-400 underline" target="_blank">LinkedIn</a>.
      </p>
    </footer>
  </motion.section>
);


export default Contact;
