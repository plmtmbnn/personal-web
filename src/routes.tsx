import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";
import BlogDetail from "./pages/blog/blog-detail";
import NotFound from "./pages/not-found";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home"));
const WorkExperience = lazy(() => import("./pages/work-experience"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Adventures = lazy(() => import("./pages/adventures"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));

const AppRoutes = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/work-experience" element={<WorkExperience />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/adventures" element={<Adventures />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<BlogDetail />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Suspense>
);

export default AppRoutes;
