import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700 px-6 py-16">
      <div className="text-center space-y-6">
        {/* Animated 404 Number */}
        <h1 className="text-9xl font-extrabold text-gray-300 select-none animate-pulse">404</h1>

        {/* Message */}
        <p className="text-xl font-semibold text-gray-800">Oops! Page Not Found</p>
        <p className="text-md text-gray-500">The page you're looking for doesn't exist or has been moved.</p>

        {/* Button with Subtle Hover Animation */}
        <Link
          to="/"
          className="inline-flex items-center group space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition-all duration-300"
        >
          <span className="font-medium text-lg">Return Home</span>
          <FiArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
