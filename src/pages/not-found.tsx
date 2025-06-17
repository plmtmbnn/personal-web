import { JackInTheBox, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-100 to-gray-200 text-center">
    <JackInTheBox triggerOnce>
      <h1 className="text-7xl sm:text-8xl font-extrabold text-sky-600 tracking-tight">404</h1>
    </JackInTheBox>

    <Slide direction="up" delay={200} triggerOnce>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="questrial-regular mt-2 text-gray-600 text-sm sm:text-base max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved. Let’s get you back home.
      </p>

      <Link
        to="/"
        className="inline-block mt-6 px-5 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-sm"
      >
        Go Home
      </Link>
    </Slide>
  </section>
);

export default NotFound;
