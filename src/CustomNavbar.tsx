import { Blocks, Flower2, Home, NotebookPenIcon, SmilePlusIcon, User } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingNavbar = () => {
  return (
    <nav className="fixed bottom-10 right-6 p-4 rounded-full bg-gradient-to-r from-teal-500 via-white-500 to-blue-600 shadow-lg z-50">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-white text-xl hover:black-200 transition duration-200"
        >
          <Home />
        </Link>
        <Link
          to="/about"
          className="text-white text-xl hover:black-200 transition duration-200"
        >
          <User />
        </Link>
        <Link
          to="/portfolio"
          className="text-white text-xl hover:black-200 transition duration-200"
        >
          <Blocks />
        </Link>
        <Link
          to="/adventures"
          className="text-white text-xl hover:black-200 transition duration-200"
        >
          <Flower2 />
        </Link>
        <Link
          to="/blog"
          className="text-white text-xl hover:black-200 transition duration-200"
        >
          <NotebookPenIcon />
        </Link>
        <Link
          to="/contact"
          className="text-white text-xl hover:black-200 transition duration-200"
        >
          <SmilePlusIcon />
        </Link>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
