import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-12">
      <div className="max-w-2xl text-center space-y-6">
        {/* Animated Number */}
        <div className="animate-bounce">
          <span className="text-9xl font-black bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            404
          </span>
        </div>

        {/* Message with emoji */}
        <h2 className="text-3xl font-bold text-gray-800">Lost in Space? 🚀</h2>

        {/* Animated Button */}
        <Link
          to="/"
          className="inline-flex items-center group space-x-3 px-8 py-4 bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <span className="font-semibold text-lg">Back Home</span>
          <FiArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Link>

        {/* Decorative Space Elements */}
        <div className="flex justify-center space-x-6 mt-8 opacity-75">
          <div className="w-8 h-8 bg-blue-300 rounded-full animate-pulse" />
          <div className="w-12 h-12 bg-teal-300 rounded-full animate-pulse delay-75" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
