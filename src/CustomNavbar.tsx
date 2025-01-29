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
    <nav className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-r from-teal-300 via-white-500 to-blue-600 shadow-lg z-15">
      <div className="flex space-x-4">
        <Link
          to="/"
          className={'text-xl transition duration-200 text-white'}
        >
          <TbHomeHeart color={`${isActive('/') ? '#fffcdc' : '#89f7fe'}`}/>
        </Link>
        <Link
          to="/about"
          className={'text-xl transition duration-200 text-white'}
        >
          <FaUserNinja color={`${isActive('/about') ? '#fffcdc' : '#89f7fe'}`} />
        </Link>
        <Link
          to="/portfolio"
          className={'text-xl transition duration-200 text-white'}
        >
          <GrDeploy color={`${isActive('/portfolio') ? '#fffcdc' : '#89f7fe'}`} />
        </Link>
        <Link
          to="/adventures"
          className={'text-xl transition duration-200 text-white'}
        >
          <TbActivityHeartbeat color={`${isActive('/adventures') ? '#fffcdc' : '#89f7fe'}`} />
        </Link>
        <Link
          to="/blog"
          className={'text-xl transition duration-200 text-white'}
        >
          <PiArticleNyTimesLight   color={`${isActive('/blog') ? '#fffcdc' : '#89f7fe'}`} />
        </Link>
        <Link
          to="/contact"
          className={'text-xl transition duration-200 text-white'}
        >
          <FaRegAddressCard  color={`${isActive('/contact') ? '#fffcdc' : '#89f7fe'}`} />
        </Link>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
