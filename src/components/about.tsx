import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaDocker, FaReact, FaCameraRetro, FaRunning, FaFutbol } from 'react-icons/fa';
import { MdOutlineModeOfTravel } from 'react-icons/md';

const experienceYears = new Date().getFullYear() - 2018;

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-12"
  >
    <div className="max-w-4xl w-full text-center space-y-8 sm:space-y-12">
      {/* Section Title */}
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
          About Me
        </h2>
      </JackInTheBox>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <InfoCard
          title="Professional Role"
          content={`Remote software engineer with ${experienceYears}+ years specializing in financial systems, building secure and scalable lending solutions.`}
          icons={[
            { icon: <FaNode className="w-full h-full" />, color: 'text-green-600' },
            { icon: <DiPostgresql className="w-full h-full" />, color: 'text-blue-600' },
            { icon: <FaReact className="w-full h-full" />, color: 'text-sky-500' },
            { icon: <FaDocker className="w-full h-full" />, color: 'text-teal-600' }
          ]}
          delay={300}
        />

        <InfoCard
          title="Hobbies & Interests"
          content="Trail runner capturing landscapes through photography. Football enthusiast and adventure traveler."
          icons={[
            { icon: <FaRunning className="w-full h-full" />, color: 'text-emerald-500' },
            { icon: <FaFutbol className="w-full h-full" />, color: 'text-red-500' },
            { icon: <FaCameraRetro className="w-full h-full" />, color: 'text-gray-600' },
            { icon: <MdOutlineModeOfTravel className="w-full h-full" />, color: 'text-indigo-500' }
          ]}
          delay={500}
        />
      </div>
    </div>
  </section>
);

const InfoCard = ({ title, content, icons, delay }: { 
  title: string;
  content: string;
  icons: Array<{ icon: React.ReactNode; color: string }>;
  delay: number;
}) => (
  <Fade delay={delay} triggerOnce>
    <Slide direction="up" duration={800} triggerOnce>
      <div className="group p-5 sm:p-6 bg-white/80 backdrop-blur-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/70 hover:border-gray-200/90">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          {content}
        </p>
        <div className="flex justify-center gap-3 sm:gap-4">
          {icons.map((item, index) => (
            <div 
              key={index}
              className={`p-2 sm:p-3 rounded-lg ${item.color} bg-gray-50/50 group-hover:bg-white transition-colors duration-300`}
              style={{ width: '2.5rem', height: '2.5rem' }}
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