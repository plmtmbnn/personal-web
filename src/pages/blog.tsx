import { Helmet } from 'react-helmet-async';
import { JackInTheBox, Zoom } from 'react-awesome-reveal';
import { BlogList } from './blog/blog-list';
import { Link } from 'react-router-dom';

const Blog = () => (
  <>
    <Helmet>
      <title>Blog | Polma Tambunan</title>
      <meta name="description" content="Explore my thoughts, writings, and experiences. Stay tuned for updates!" />
      <meta name="keywords" content="Polma Tambunan, blog, software engineer, writing, experiences, technology, running" />
      <meta property="og:title" content="Blog | Polma Tambunan" />
      <meta property="og:description" content="Explore my thoughts, writings, and experiences. Stay tuned for updates!" />
      <meta property="og:image" content="/vite.svg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.polmatambunan.my.id/blog" />
      <meta property="og:site_name" content="Polma Tambunan" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog | Polma Tambunan" />
      <meta name="twitter:description" content="Explore my thoughts, writings, and experiences. Stay tuned for updates!" />
      <meta name="twitter:image" content="/vite.svg" />
    </Helmet>

    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-16">
      <div className="max-w-3xl w-full text-center space-y-12">
        <JackInTheBox delay={150} triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
            Blog
          </h2>
        </JackInTheBox>

        {BlogList.length === 0 ? (
          <p className="text-gray-600 text-base sm:text-lg">
            No blog posts yet — stay tuned!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {BlogList.map(({ title, description, slug }, index) => (
              <Zoom key={slug} delay={120 * index} duration={700} triggerOnce>
                <Link
                  to={`/blog/${slug}`}
                  className="block text-left p-5 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02] duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm sm:text-base mt-2 text-gray-600">{description}</p>
                </Link>
              </Zoom>
            ))}
          </div>
        )}
      </div>
    </section>
  </>
);

export default Blog;
