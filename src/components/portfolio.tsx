import { motion } from "framer-motion";

const Portfolio = () => (
  <motion.section
  id="portfolio"
  className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600 transition-all duration-1000 ease-in-out"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="max-w-4xl">
    <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
        <p>Description of an awesome project.</p>
      </div>
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
        <p>Description of another amazing project.</p>
      </div>
    </div>
  </div>
</motion.section>

);


export default Portfolio;
