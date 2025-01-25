import { motion } from "framer-motion";

const Blog = () => (
<motion.section
    id="blog"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >   
    <div className="max-w-2xl text-center">
      <h2 className="text-4xl font-bold mb-4">Blog</h2>
      <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Blog Post 1</h3>
        <p>Snippet of an insightful article.</p>
      </div>
    </div>
  </motion.section>
);


export default Blog;
