import { useLocation, Link } from "react-router-dom";
import { Flower2, FolderGit2Icon, Home, NotebookPenIcon, TextSearch, User } from "lucide-react";

const FloatingNavbar = () => {
  const location = useLocation();

  // Check if the route matches the current location
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-10 right-6 p-4 rounded-full bg-gradient-to-r from-teal-500 via-white-500 to-blue-600 shadow-lg z-50">
      <div className="flex space-x-4">
        <Link
          to="/"
          className={`text-xl transition duration-200 text-white `}
        >
          <Home color={`${isActive('/') ? "#fffcdc" : "#89f7fe"}`}/>
        </Link>
        <Link
          to="/about"
          className={`text-xl transition duration-200 text-white `}
        >
          <User color={`${isActive('/about') ? "#fffcdc" : "#89f7fe"}`} />
        </Link>
        <Link
          to="/portfolio"
          className={`text-xl transition duration-200 text-white `}
        >
          <FolderGit2Icon color={`${isActive('/portfolio') ? "#fffcdc" : "#89f7fe"}`} />
        </Link>
        <Link
          to="/adventures"
          className={`text-xl transition duration-200 text-white `}
        >
          <Flower2 color={`${isActive('/adventures') ? "#fffcdc" : "#89f7fe"}`} />
        </Link>
        <Link
          to="/blog"
          className={`text-xl transition duration-200 text-white `}
        >
          <NotebookPenIcon color={`${isActive('/blog') ? "#fffcdc" : "#89f7fe"}`} />
        </Link>
        <Link
          to="/contact"
          className={`text-xl transition duration-200 text-white `}
        >
          <TextSearch color={`${isActive('/contact') ? "#fffcdc" : "#89f7fe"}`} />
        </Link>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
