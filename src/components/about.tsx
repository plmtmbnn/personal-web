import { motion } from "framer-motion";

const About = () => (
<motion.section
    id="about"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  > 
  <div className="text-center">
    <h2 className="text-4xl font-bold mb-4 text-black">About Me</h2>
    <p className="text-lg text-black">
      As a full-time remote software engineer, I specialize in building efficient, scalable applications. When I'm not coding, you can find me running trails, capturing beautiful landscapes, or embarking on new adventures.
    </p>
  </div>
</motion.section>
);


export default About;
