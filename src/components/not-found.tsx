import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-16">
      <div className="text-center space-y-8">
        {/* Elegant 404 Number */}
        <h1 className="text-9xl font-extrabold text-gray-300 select-none">404</h1>

        {/* Message */}
        <p className="text-xl font-semibold text-gray-800">Page Not Found</p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center group space-x-3 px-8 py-4 bg-gray-900 hover:bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300"
        >
          <span className="font-medium text-lg">Go Home</span>
          <FiArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
