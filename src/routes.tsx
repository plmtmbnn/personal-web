import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from './components/not-found';

// Lazy-loaded components
const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Adventures = lazy(() => import('./components/adventures'));
const Blog = lazy(() => import('./components/blog'));
const Contact = lazy(() => import('./components/contact'));

const FallbackScreen = () => (
  <div className="flex items-center justify-center h-screen bg-gray-50">
    <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<FallbackScreen />}>
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
