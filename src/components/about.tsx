import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaDocker, FaReact, FaCameraRetro, FaRunning, FaFutbol } from 'react-icons/fa';
import { MdOutlineModeOfTravel } from 'react-icons/md';

const experienceYears = new Date().getFullYear() - 2018;

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-6 py-10"
  >
    <div className="max-w-4xl w-full text-center space-y-10">
      {/* Title */}
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          About Me
        </h2>
      </JackInTheBox>

      {/* Content Grid (Stacks on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Professional Role */}
        <Fade delay={500} triggerOnce>
          <Slide direction="up" duration={1200} triggerOnce>
            <div className="p-6 bg-white/50 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-gray-800">
                Professional Role
              </h3>
              <p className="text-base text-gray-700 mt-3">
                Remote software engineer with <strong>{experienceYears}+</strong> years of experience in financial lending systems, building scalable and reliable applications.
              </p>
              <div className="flex justify-center gap-3 md:gap-4 mt-4">
                <FaNode size={16} className="text-green-500 sm:size-6" title="Node.js" />
                <DiPostgresql size={16} className="text-blue-500 sm:size-6" title="PostgreSQL" />
                <FaReact size={16} className="text-blue-400 sm:size-6" title="ReactJS" />
                <FaDocker size={16} className="text-teal-500 sm:size-6" title="Docker" />
              </div>
            </div>
          </Slide>
        </Fade>

        {/* Hobbies & Interests */}
        <Fade delay={700} triggerOnce>
          <Slide direction="up" duration={1200} triggerOnce>
            <div className="p-6 bg-white/50 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-gray-800">
                Hobbies & Interests
              </h3>
              <p className="text-base text-gray-700 mt-3">
                Passionate about running, trail running, and capturing landscapes through photography.
              </p>
              <div className="flex justify-center gap-3 md:gap-4 mt-4">
                <FaRunning size={16} className="text-teal-400 sm:size-6" title="Running" />
                <FaFutbol size={16} className="text-red-400 sm:size-6" title="Football" />
                <FaCameraRetro size={16} className="text-gray-500 sm:size-6" title="Photography" />
                <MdOutlineModeOfTravel size={16} className="text-blue-400 sm:size-6" title="Travel" />
              </div>
            </div>
          </Slide>
        </Fade>
      </div>
    </div>
  </section>
);

export default About;
