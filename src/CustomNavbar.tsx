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
    <nav className="fixed bottom-4 right-4 p-1 rounded-full backdrop-blur-md bg-white/40 shadow-xl z-50 border border-gray-100">
      <div className="flex space-x-1">
        {[
          { to: '/', icon: <TbHomeHeart size={24} />, label: 'Home' },
          { to: '/about', icon: <FaUserNinja size={24} />, label: 'About' },
          { to: '/portfolio', icon: <GrDeploy size={24} />, label: 'Portfolio' },
          { to: '/adventures', icon: <TbActivityHeartbeat size={24} />, label: 'Adventures' },
          { to: '/blog', icon: <PiArticleNyTimesLight size={24} />, label: 'Blog' },
          { to: '/contact', icon: <FaRegAddressCard size={24} />, label: 'Contact' }
        ].map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              isActive(to) ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-600 hover:text-blue-600'
            }`}
            aria-label={label}
          >
            {icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavbar;
