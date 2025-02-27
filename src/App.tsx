import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CustomNavbar from './CustomNavbar';
import AppRoutes from './routes';
import SEO from './SEO';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <CustomNavbar />
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
};

export default App;
