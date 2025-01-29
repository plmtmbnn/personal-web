import { useLocation, Link } from 'react-router-dom';
import { TbActivityHeartbeat, TbHomeHeart } from 'react-icons/tb';
import { FaRegAddressCard, FaUserNinja } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { PiArticleNyTimesLight } from 'react-icons/pi';

const FloatingNavbar = () => {
  const location = useLocation();

  // Check if the route matches the current location
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-6 right-6 p-4 rounded-full bg-white shadow-md z-50">
      <div className="flex space-x-6">
        <Link
          to="/"
          className={`text-xl transition-all duration-200 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <TbHomeHeart size={24} />
        </Link>
        <Link
          to="/about"
          className={`text-xl transition-all duration-200 ${isActive('/about') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaUserNinja size={24} />
        </Link>
        <Link
          to="/portfolio"
          className={`text-xl transition-all duration-200 ${isActive('/portfolio') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <GrDeploy size={24} />
        </Link>
        <Link
          to="/adventures"
          className={`text-xl transition-all duration-200 ${isActive('/adventures') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <TbActivityHeartbeat size={24} />
        </Link>
        <Link
          to="/blog"
          className={`text-xl transition-all duration-200 ${isActive('/blog') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <PiArticleNyTimesLight size={24} />
        </Link>
        <Link
          to="/contact"
          className={`text-xl transition-all duration-200 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaRegAddressCard size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
