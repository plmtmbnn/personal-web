import Blog from "./components/blog";
import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Adventures from "./components/adventures";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-suisse">
      
      {/* Full-screen pages */}
      <div className="scroll-smooth">
        {/* Home Section */}
        <Home />

        {/* About Me Section */}
        <About />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Adventures Section */}
        <Adventures />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />

      </div>
    </div>
  );
};

export default App;
