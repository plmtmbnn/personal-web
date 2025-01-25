import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from "./components/blog";
import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Adventures from "./components/adventures";
import ScrollRedirect from './ScrollRedirect';
import CustomNavbar from './CustomNavbar';

const App = () => {
  return (

    <Router>
      {/* <ScrollRedirect /> */}
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
  
    </Router>
 
  );
};

export default App;
