import { Fade, JackInTheBox } from 'react-awesome-reveal';

const blogPosts = [
  {
    title: 'Writing',
    description: 'No ideas to share just yet—stay tuned!',
    link: '#'
  }
  // Future blog posts can be added here
];

const Blog = () => (
  <section
    id="blog"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6 transition-all duration-1000 ease-in-out"
  >
    <div className="max-w-4xl w-full">
      {/* Page Title */}
      <JackInTheBox triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Blog
        </h2>
      </JackInTheBox>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map(({ title, description, link }, index) => (
          <Fade key={title} delay={200 * (index + 1)} triggerOnce>
            <a
              href={link}
              className="block p-6 bg-white text-gray-900 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
              <p className="text-sm md:text-base mt-2">{description}</p>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
