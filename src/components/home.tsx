import { motion } from "framer-motion";

const Home = () => (
<motion.section
    id="contact"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  > 
  <header className="text-center">
    <h1 className="text-5xl font-extrabold mb-4 text-black">🌎, I'm Polma Tambunan.</h1>
    <p className="text-xl text-gray-600">
      I love creating amazing apps, running (still half) marathons, capturing moments through photography, and exploring (a litle part of) the world.
    </p>
  </header>
</motion.section>

);


export default Home;
