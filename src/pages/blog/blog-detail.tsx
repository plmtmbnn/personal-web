import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';
import { useLocation } from 'react-router-dom';
import { BlogList } from './blog-list';
import DOMPurify from 'dompurify';

const BlogDetail = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/blog/');
  const slug = pathParts[1];

  const isValidSlug = /^\d+$/.test(slug);
  const index = isValidSlug ? Number(slug) - 1 : -1;

  const post = index >= 0 && index < BlogList.length ? BlogList[index] : null;

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20 text-center">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold text-gray-700 mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </section>
    );
  }

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

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-16 flex justify-center">
        <Fade delay={150} triggerOnce className="w-full max-w-3xl">
          <article className="bg-white shadow-md rounded-xl p-6 sm:p-8 prose prose-neutral prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
          </article>
        </Fade>
      </section>
    </>
  );
};

export default BlogDetail;
