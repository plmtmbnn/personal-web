import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If you are using React Router for navigation

const FloatingButton = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="#contact" className="flex items-center justify-center text-lg">
        <span className="material-icons">email</span> {/* You can use any icon */}
      </Link>
    </motion.div>
  );
};

export default FloatingButton;
