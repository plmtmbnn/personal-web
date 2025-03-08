import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 px-6 py-16">
      <div className="text-center space-y-6">
        {/* Glowing 404 Number */}
        <h1 className="text-9xl font-extrabold text-gray-600 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] select-none animate-pulse">
          404
        </h1>

        {/* Message */}
        <p className="text-xl font-semibold text-gray-100">Oops! Page Not Found</p>
        <p className="text-md text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button with Smooth Hover Animation */}
        <Link
          to="/"
          className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300
          shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <span className="font-medium text-lg">Return Home</span>
          <FiArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
