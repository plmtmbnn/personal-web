import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ScrollRedirect = () => {
  const navigate = useNavigate();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Debugging scroll position
      console.log("Scroll Position:", currentScrollY);

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY < 500) {
          navigate("/about");
        } else if (currentScrollY >= 500 && currentScrollY < 1000) {
          navigate("/portfolio");
        } else if (currentScrollY >= 1000 && currentScrollY < 1500) {
          navigate("/adventures");
        } else if (currentScrollY >= 1500 && currentScrollY < 2000) {
          navigate("/blog");
        } else {
          navigate("/contact");
        }
      } else {
        // Scrolling up
        if (currentScrollY >= 2000) {
          navigate("/contact");
        } else if (currentScrollY >= 1500) {
          navigate("/blog");
        } else if (currentScrollY >= 1000) {
          navigate("/adventures");
        } else if (currentScrollY >= 500) {
          navigate("/portfolio");
        } else {
          navigate("/about");
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, navigate]);

  return null; // This component does not render anything
};

export default ScrollRedirect;
