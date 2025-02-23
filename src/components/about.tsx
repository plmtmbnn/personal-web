import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaDocker, FaReact, FaCameraRetro } from 'react-icons/fa'; // Tech icons
import { FaRunning, FaFutbol } from 'react-icons/fa'; // Hobby and more icons
import { MdOutlineModeOfTravel } from 'react-icons/md';

const experienceYears = new Date().getFullYear() - 2018;

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6"
  >
    <div className="max-w-4xl w-full text-center space-y-10">
      {/* Title */}
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
      </JackInTheBox>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Professional Role */}
        <Fade delay={500} triggerOnce>
          <Slide direction="up" duration={1200} triggerOnce>
            <div className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-lg font-semibold text-gray-800">Professional Role</h3>
              <p className="text-base text-gray-700 mt-2">
                Remote software engineer with <strong>{experienceYears}+</strong> years of experience in financial lending systems, 
                building scalable and reliable applications.
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <FaNode size={30} className="text-green-500" title="Node.js" />
                <DiPostgresql size={30} className="text-blue-500" title="PostgreSQL" />
                <FaReact size={30} className="text-blue-500" title="ReactJS" />
                <FaDocker size={30} className="text-teal-500" title="Docker" />
              </div>
            </div>
          </Slide>
        </Fade>

        {/* Hobbies & Interests */}
        <Fade delay={700} triggerOnce>
          <Slide direction="up" duration={1200} triggerOnce>
            <div className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-lg font-semibold text-gray-800">Hobbies & Interests</h3>
              <p className="text-base text-gray-700 mt-2">
                Passionate about running, trail running, and capturing landscapes through photography.
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <FaRunning size={30} className="text-teal-400" title="Running" />
                <FaFutbol size={30} className="text-red-400" title="Football" />
                <FaCameraRetro size={30} className="text-gray-400" title="Photography" />
                <MdOutlineModeOfTravel size={30} className="text-blue-400" title="Travel" />
              </div>
            </div>
          </Slide>
        </Fade>
      </div>
    </div>
  </section>
);

export default About;
