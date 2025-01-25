import { motion } from "framer-motion";

const Adventures = () => (
  <motion.section
  id="adventures"
  className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-700 transition-all duration-1000 ease-in-out"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="max-w-4xl">
    <h2 className="text-4xl font-bold text-center mb-8">Adventures</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Running Milestone</h3>
        <p>Details about your running achievements.</p>
      </div>
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Photography</h3>
        <p>Showcase your best photographs.</p>
      </div>
    </div>
  </div>
</motion.section>
);


export default Adventures;
