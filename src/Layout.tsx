import { Outlet } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';

const Layout = () => (
  <>
    <CustomNavbar />
    <Outlet />
  </>
);

export default Layout;
