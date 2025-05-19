import { Helmet } from 'react-helmet-async';
import { JackInTheBox, Zoom } from 'react-awesome-reveal';

const blogPosts = [
  {
    title: 'Writing',
    description: 'No ideas to share just yet—stay tuned!',
    link: '#'
  }
  // Future blog posts can be added here
];

const Blog = () => (
  <>
    {/* SEO & Meta Tags */}
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

    {/* Blog Page Content */}
    <section id="blog"     className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-12"
    >
      <div className="max-w-4xl w-full text-center space-y-8 sm:space-y-12">
        {/* Page Title */}
        <JackInTheBox delay={200} triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent tracking-tight">Blog</h2>
        </JackInTheBox>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {blogPosts.map(({ title, description, link }, index) => (
            <Zoom key={title} delay={150 * index} duration={800} triggerOnce>
              <a
                href={link}
                className="block p-6 bg-white text-gray-900 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="text-sm md:text-base mt-2">{description}</p>
              </a>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
