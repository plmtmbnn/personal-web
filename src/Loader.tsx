import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.span
        className="text-4xl md:text-6xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
      >
        🌎
      </motion.span>
    </div>
  );
};

export default Loader;
