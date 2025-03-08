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
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-1 bg-white/80 backdrop-blur-md p-2 rounded-full z-50">
      {navItems.map(({ to, icon: Icon, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
              ${
          isActive
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-400 hover:bg-text-blue-400/50'
          }`}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </nav>
  );
};

export default FloatingNavbar;
