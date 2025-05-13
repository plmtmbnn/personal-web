import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaReact } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';

const experienceYears = new Date().getFullYear() - 2018;

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-16"
  >
    <div className="max-w-4xl w-full text-center space-y-12">
      {/* Section Title */}
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
          About Me
        </h2>
      </JackInTheBox>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="What I Build"
          content={`I'm a remote software engineer with ${experienceYears}+ years of experience, focused on designing robust, secure, and scalable financial systems — particularly in lending and fintech.`}
          icons={[
            { icon: <FaNode className="w-full h-full" />, color: 'text-green-600' },
            { icon: <DiPostgresql className="w-full h-full" />, color: 'text-blue-600' },
            { icon: <FaReact className="w-full h-full" />, color: 'text-sky-500' },
            { icon: <FaGolang className="w-full h-full" />, color: 'text-teal-600' }
          ]}
          delay={300}
        />

        <InfoCard
          title="What Moves Me"
          content="I thrive on motion and moments — trail runs that clear the mind, frames that capture light, goals that fuel passion, and journeys into the unknown."
          icons={[
            { icon: <span className="w-full h-full text-xl">🏃</span>, color: 'text-emerald-500' },
            { icon: <span className="w-full h-full text-xl">⚽</span>, color: 'text-red-500' },
            { icon: <span className="w-full h-full text-xl">📸</span>, color: 'text-gray-600' },
            { icon: <span className="w-full h-full text-xl">🌄</span>, color: 'text-indigo-500' }
          ]}
          delay={500}
        />
      </div>
    </div>
  </section>
);

const InfoCard = ({
  title,
  content,
  icons,
  delay
}: {
  title: string;
  content: string;
  icons: Array<{ icon: React.ReactNode; color: string }>;
  delay: number;
}) => (
  <Fade delay={delay} triggerOnce>
    <Slide direction="up" duration={800} triggerOnce>
      <div className="group p-6 bg-white/90 backdrop-blur rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-4">{content}</p>
        <div className="flex justify-center gap-4">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${item.color} bg-gray-50/60 group-hover:bg-white transition-colors duration-300 flex items-center justify-center`}
              style={{ width: '2.75rem', height: '2.75rem' }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  </Fade>
);

export default About;
