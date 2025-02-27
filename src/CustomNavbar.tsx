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
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-4 right-4 p-1 rounded-full backdrop-blur-md bg-white/50 shadow-xl z-50 border border-gray-200">
      <div className="flex space-x-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            aria-label={label}
            aria-current={isActive(to) ? 'page' : undefined}
            className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 
              ${
          isActive(to)
            ? 'bg-blue-500 text-white shadow-lg scale-110'
            : 'text-gray-600 hover:text-blue-600 hover:scale-110'
          }`}
          >
            <Icon size={24} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavbar;
