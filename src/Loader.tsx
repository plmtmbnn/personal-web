import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <motion.div
        className="text-5xl md:text-7xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1.5,
          ease: 'easeInOut'
        }}
      >
        🌎
      </motion.div>
    </div>
  );
};

export default Loader;
