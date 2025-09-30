import { Helmet } from 'react-helmet-async';
import { Fade, Slide } from 'react-awesome-reveal';
import { useLocation, Link } from 'react-router-dom';
import { BlogList } from './blog-list';
import DOMPurify from 'dompurify';
import { HiArrowLeft, HiClock, HiCalendar, HiUser, HiHome } from 'react-icons/hi';

const BlogDetail = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/blog/');
  const slug = pathParts[1];

  const isValidSlug = /^\d+$/.test(slug);
  const index = isValidSlug ? Number(slug) - 1 : -1;
  const post = index >= 0 && index < BlogList.length ? BlogList[index] : null;

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-20 text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-xl relative z-10">
          <Fade triggerOnce>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-12 bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-500/20 rounded-full">
                    <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
                <p className="text-gray-300 text-lg mb-8">
                  Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/blog"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <HiArrowLeft className="w-5 h-5" />
                    Back to Blog
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <HiHome className="w-5 h-5" />
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = post.content.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog | Polma Tambunan</title>
        <meta name="description" content={post.content.replace(/<[^>]+>/g, '').slice(0, 150)} />
        <meta property="og:title" content={`${post.title} | Blog | Polma Tambunan`} />
        <meta property="og:description" content={post.content.replace(/<[^>]+>/g, '').slice(0, 150)} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={`${post.title} | Blog | Polma Tambunan`} />
        <meta name="twitter:description" content={post.content.replace(/<[^>]+>/g, '').slice(0, 150)} />
      </Helmet>

      <section className="min-h-screen bg-gray-900 px-4 sm:px-6 py-12 lg:py-16 flex justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-4xl relative z-10">
          {/* Back Button */}
          <Fade delay={100} triggerOnce>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group transition-colors duration-300"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </Fade>

          {/* Article Container */}
          <Fade delay={200} triggerOnce>
            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur opacity-50"></div>
              
              <div className="relative bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-700/50 overflow-hidden">
                {/* Article Header */}
                <div className="p-8 sm:p-12 border-b border-gray-700/50">
                  <Slide direction="up" triggerOnce>
                    <div className="space-y-6">
                      {/* Title */}
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {post.title}
                      </h1>

                      {/* Gradient accent line */}
                      <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

                      {/* Meta information */}
                      <div className="flex flex-wrap gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <HiUser className="w-5 h-5 text-indigo-400" />
                          <span className="text-sm font-medium">Polma Tambunan</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HiCalendar className="w-5 h-5 text-purple-400" />
                          <span className="text-sm font-medium">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HiClock className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm font-medium">{readingTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>

                {/* Article Content */}
                <div className="p-8 sm:p-12">
                  <Fade delay={400} triggerOnce>
                    <div 
                      className="prose prose-lg prose-invert max-w-none
                        prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                        prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
                        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-2
                        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300 hover:prose-a:underline prose-a:transition-colors
                        prose-strong:text-white prose-strong:font-semibold
                        prose-em:text-gray-200
                        prose-code:text-purple-400 prose-code:bg-gray-900/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
                        prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-xl
                        prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-gray-900/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-300 prose-blockquote:italic
                        prose-ul:text-gray-300 prose-ul:my-6
                        prose-ol:text-gray-300 prose-ol:my-6
                        prose-li:my-2
                        prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8
                        prose-hr:border-gray-700 prose-hr:my-8 text-white"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} 
                    />
                  </Fade>
                </div>

                {/* Article Footer */}
                <div className="p-8 sm:p-12 border-t border-gray-700/50 bg-gray-900/30">
                  <Fade delay={600} triggerOnce>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-center sm:text-left">
                        <p className="text-gray-400 text-sm mb-2">Thanks for reading!</p>
                        <p className="text-gray-500 text-xs">Published on {post.date}</p>
                      </div>
                      
                      <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <HiArrowLeft className="w-5 h-5" />
                        More Articles
                      </Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </article>
          </Fade>

          {/* Navigation Hint */}
          <Fade delay={800} triggerOnce>
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Want to explore more? Check out the{' '}
                <Link to="/blog" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  full blog archive
                </Link>
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;