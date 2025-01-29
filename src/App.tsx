import { BrowserRouter as Router } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
