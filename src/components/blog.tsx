import { Fade, JackInTheBox, Zoom } from 'react-awesome-reveal';

const Blog = () => (
  <div
    id="blog"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 transition-all duration-1000 ease-in-out p-4"
  >
    <div className="max-w-3xl text-center">
      <JackInTheBox delay={200}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Blog
        </h2>
      </JackInTheBox>
      <Fade>
        <Zoom delay={200}>
          <div className="p-6 bg-white text-gray-900 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Writing</h3>
            <p className="text-sm md:text-base">No ideas to share just yet—stay tuned!</p>
          </div>
        </Zoom>
      </Fade>
    </div>
  </div>
);

export default Blog;
