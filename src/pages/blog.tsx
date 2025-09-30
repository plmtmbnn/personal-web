import { Helmet } from 'react-helmet-async';
import { JackInTheBox, Zoom, Fade } from 'react-awesome-reveal';
import { BlogList } from './blog/blog-list';
import { Link } from 'react-router-dom';
import { HiSparkles, HiNewspaper, HiArrowRight, HiClock } from 'react-icons/hi';

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

    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl w-full text-center space-y-12 lg:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-6">
          <JackInTheBox delay={150} triggerOnce>
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiNewspaper className="w-8 h-8 text-indigo-400 animate-pulse" />
              <span className="text-indigo-300 text-sm font-medium tracking-wider uppercase">Thoughts & Insights</span>
              <HiSparkles className="w-8 h-8 text-purple-400 animate-pulse delay-300" />
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              Blog
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
              Exploring technology, software engineering, and life's adventures
            </p>
          </JackInTheBox>
        </div>

        {/* Blog Content */}
        {BlogList.length === 0 ? (
          <Fade delay={300} triggerOnce>
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-12 bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-indigo-500/20 rounded-full">
                    <HiClock className="w-12 h-12 text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Coming Soon</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  No blog posts yet — but exciting content is on the way! Check back soon for insights on software engineering, fintech, and more.
                </p>
                <div className="mt-8 flex justify-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </Fade>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BlogList.map(({ title, description, slug }, index) => (
              <Zoom key={slug} delay={120 * index} duration={700} triggerOnce>
                <Link
                  to={`/blog/${slug}`}
                  className="group relative block text-left h-full"
                >
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  
                  <div className="relative h-full p-6 lg:p-7 bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 flex flex-col">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                        <HiNewspaper className="w-5 h-5 text-white" />
                      </div>
                      <HiArrowRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed line-clamp-3">
                        {description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 group-hover:text-indigo-400 transition-colors duration-300 font-medium">
                          Read More
                        </span>
                        <div className="flex items-center gap-2 text-gray-500">
                          <HiClock className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </Link>
              </Zoom>
            ))}
          </div>
        )}

        {/* Stats Section (if there are blogs) */}
        {BlogList.length > 0 && (
          <Fade delay={500} triggerOnce>
            <div className="mt-16 pt-12 border-t border-gray-700/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: BlogList.length, label: 'Articles', color: 'text-indigo-400' },
                  { number: BlogList.length * 5, label: 'Minutes Read', color: 'text-purple-400' },
                  { number: '∞', label: 'Ideas Shared', color: 'text-pink-400' },
                  { number: '100%', label: 'Passion', color: 'text-cyan-400' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
                  >
                    <p className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        )}
      </div>
    </section>
  </>
);

export default Blog;