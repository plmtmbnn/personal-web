// src/pages/NotFound.tsx
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Looks like you’re lost. Why search for something that doesn’t exist?</p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
      >
        <Home />
      </Link>
    </div>
  );
};

export default NotFound;
