import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaReact } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { HiSparkles, HiCode } from 'react-icons/hi';

const experienceYears = new Date().getFullYear() - 2018;

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-16 relative overflow-hidden"
  >
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <div className="max-w-6xl w-full text-center space-y-16 relative z-10">
      {/* Section Header */}
      <div className="space-y-6">
        <JackInTheBox delay={200} triggerOnce>
          <div className="flex items-center justify-center gap-3 mb-4">
            <HiSparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">Get to know me</span>
            <HiSparkles className="w-8 h-8 text-blue-400 animate-pulse delay-300" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </JackInTheBox>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <InfoCard
          title="What I Build"
          subtitle="Technical Expertise"
          content={`I'm a remote software engineer with ${experienceYears}+ years of experience, focused on designing robust, secure, and scalable financial systems — particularly in lending and fintech.`}
          icons={[
            { icon: <FaNode className="w-full h-full" />, color: 'from-green-500 to-green-600', name: 'Node.js' },
            { icon: <FaGolang className="w-full h-full" />, color: 'from-cyan-500 to-teal-600', name: 'Go' },
            { icon: <DiPostgresql className="w-full h-full" />, color: 'from-blue-500 to-blue-600', name: 'PostgreSQL' },
            { icon: <FaReact className="w-full h-full" />, color: 'from-sky-400 to-sky-500', name: 'React' }
          ]}
          delay={300}
          primaryColor="blue"
        />

        <InfoCard
          title="What Moves Me"
          subtitle="Life & Passions"
          content="I thrive on motion and moments — trail runs that clear the mind, frames that capture light, goals that fuel passion, and journeys into the unknown."
          icons={[
            { icon: <span className="w-full h-full text-2xl">🏃</span>, color: 'from-emerald-400 to-emerald-500', name: 'Running' },
            { icon: <span className="w-full h-full text-2xl">⚽</span>, color: 'from-red-400 to-red-500', name: 'Football' },
            { icon: <span className="w-full h-full text-2xl">📸</span>, color: 'from-gray-400 to-gray-500', name: 'Photography' },
            { icon: <span className="w-full h-full text-2xl">🌄</span>, color: 'from-indigo-400 to-indigo-500', name: 'Adventure' }
          ]}
          delay={500}
          primaryColor="purple"
        />
      </div>

      {/* Additional Stats Section */}
      <Fade delay={700} triggerOnce>
        <div className="mt-20 pt-12 border-t border-gray-700/50">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HiCode className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-gray-300">Quick Stats</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: `${experienceYears}+`, label: 'Years Experience', color: 'text-blue-400' },
              { number: '50+', label: 'Projects Built', color: 'text-purple-400' },
              { number: '1000+', label: 'KM per Year', color: 'text-emerald-400' },
              { number: '24/7', label: 'Problem Solver', color: 'text-cyan-400' }
            ].map((stat, index) => (
              <Slide key={index} direction="up" delay={800 + index * 100} triggerOnce>
                <div className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group">
                  <p className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  </section>
);

const InfoCard = ({
  title,
  subtitle,
  content,
  icons,
  delay,
  primaryColor
}: {
  title: string;
  subtitle: string;
  content: string;
  icons: Array<{ icon: React.ReactNode; color: string; name: string }>;
  delay: number;
  primaryColor: 'blue' | 'purple';
}) => {
  const gradientColors = primaryColor === 'blue' 
    ? 'from-blue-500/20 to-cyan-500/20' 
    : 'from-purple-500/20 to-pink-500/20';
  
  const borderColors = primaryColor === 'blue'
    ? 'border-blue-500/30'
    : 'border-purple-500/30';

  return (
    <Fade delay={delay} triggerOnce>
      <Slide direction="up" duration={800} triggerOnce>
        <div className="group relative h-full">
          {/* Glowing border effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColors} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
          
          <div className={`relative h-full p-8 bg-gray-800/60 backdrop-blur-md rounded-2xl border ${borderColors} hover:border-opacity-60 transition-all duration-300`}>
            {/* Header */}
            <div className="text-left mb-6">
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2">{subtitle}</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{title}</h3>
              <div className={`w-12 h-1 bg-gradient-to-r ${primaryColor === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} rounded-full`}></div>
            </div>

            {/* Content */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-left">
              {content}
            </p>

            {/* Tech/Interest Icons */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase text-left">
                {primaryColor === 'blue' ? 'Technologies' : 'Interests'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Fade delay={delay + 200} cascade damping={0.1}>
                  {icons.map((item, index) => (
                    <div
                      key={index}
                      className="group/icon relative"
                    >
                      <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center h-16 w-16 mx-auto`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs text-center mt-2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Fade>
  );
};

export default About;