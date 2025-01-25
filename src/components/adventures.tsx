import { motion } from "framer-motion";

const Adventures = () => (
<motion.section
    id="adventures"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  > 
  <div className="max-w-4xl">
    <h2 className="text-4xl font-bold text-center mb-8">Adventures</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Running Milestone</h3>
        <p>Details about your running achievements.</p>
        <iframe height='260' width='300'   src='https://www.strava.com/athletes/38682026/activity-summary/84e311c34f606bea25b477bc6aa3e24b84c55e33'></iframe>
      </div>
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Photography</h3>
        <p>Showcase your best photographs.</p>
        <iframe
  src="https://www.instagram.com/p/DBqBiMYzd4D/embed"
  height='350' width='300'
  scrolling="no"
  >
</iframe>

      </div>
    </div>
  </div>
</motion.section>
);


export default Adventures;
