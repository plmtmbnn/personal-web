import { JackInTheBox, Fade } from 'react-awesome-reveal';

const hobbies = [
  {
    title: 'Running Milestone',
    description: 'Miles logged, progress made.',
    embedUrl:
      'https://www.strava.com/athletes/38682026/activity-summary/84e311c34f606bea25b477bc6aa3e24b84c55e33',
    iframeHeight: '200px'
  },
  {
    title: 'Photography',
    description: 'Capturing moments, telling stories.',
    embedUrl: 'https://www.instagram.com/p/DBqBiMYzd4D/embed',
    iframeHeight: '320px'
  }
];

const Adventures = () => (
  <section
    id="adventures"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6 transition-all duration-1000 ease-in-out"
  >
    <div className="max-w-2xl w-full text-gray-900">
      {/* Page Title */}
      <JackInTheBox triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Adventures</h2>
      </JackInTheBox>

      {/* Hobby Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map(({ title, description, embedUrl, iframeHeight }, index) => (
          <Fade direction="down" delay={200 * (index + 1)} duration={1500} triggerOnce key={title}>
            <div className="p-5 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm md:text-base leading-relaxed">{description}</p>
              <Fade delay={300}>
                <iframe
                  title={title}
                  className="w-full mt-3 rounded-md"
                  height={iframeHeight}
                  src={embedUrl}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                />
              </Fade>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

export default Adventures;
