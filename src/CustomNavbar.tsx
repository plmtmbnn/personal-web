import { useLocation, Link } from 'react-router-dom';
import { TbActivityHeartbeat, TbHomeHeart } from 'react-icons/tb';
import { FaRegAddressCard, FaUserNinja } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { PiArticleNyTimesLight } from 'react-icons/pi';

const navItems = [
  { to: '/', icon: TbHomeHeart, label: 'Home' },
  { to: '/about', icon: FaUserNinja, label: 'About' },
  { to: '/portfolio', icon: GrDeploy, label: 'Portfolio' },
  { to: '/adventures', icon: TbActivityHeartbeat, label: 'Adventures' },
  { to: '/blog', icon: PiArticleNyTimesLight, label: 'Blog' },
  { to: '/contact', icon: FaRegAddressCard, label: 'Contact' }
];

const FloatingNavbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1 bg-white border-1 border-gray-100 shadow-xl p-1.5 rounded-xl z-50">
      {navItems.map(({ to, icon: Icon, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300
              ${
          isActive 
            ? 'bg-blue-600 shadow-lg shadow-green-500/30'
            : 'bg-gray-100 hover:bg-gray-200'
          }`}
          >
            <div className={`relative z-10 ${
              isActive 
                ? 'text-white scale-110' 
                : 'text-gray-600 group-hover:text-blue-600 group-hover:scale-105'
            }`}>
              <Icon size={18} />
            </div>
            
            {/* Active indicator */}
            {isActive && (
              <div className="absolute -bottom-2 w-5 h-1 bg-blue-500 rounded-full animate-pulse"></div>
            )}

          </Link>
        );
      })}
    </nav>
  );
};

export default FloatingNavbar;