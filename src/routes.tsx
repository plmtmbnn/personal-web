import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from './components/not-found';
import Loader from './Loader';

// Lazy load components
const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Adventures = lazy(() => import('./components/adventures'));
const Blog = lazy(() => import('./components/blog'));
const Contact = lazy(() => import('./components/contact'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/adventures" element={<Adventures />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
