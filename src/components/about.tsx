import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { DiPostgresql } from 'react-icons/di';
import { FaNode, FaDocker, FaReact, FaCameraRetro } from 'react-icons/fa'; // Tech icons
import { FaRunning, FaFutbol } from 'react-icons/fa'; // Hobby and more icons
import { MdOutlineModeOfTravel } from 'react-icons/md';

const About = () => (
  <div
    id="about"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 transition-all duration-1000 ease-in-out p-4"
  >
    <div className="text-center max-w-3xl w-full space-y-8">
      <JackInTheBox delay={200}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          About Me
        </h2>
      </JackInTheBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Fade delay={500}>
          <Slide direction="up" duration={1200}>
            <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">Professional Role</h3>
              <p className="text-base text-gray-700">
                I’m a remote software engineer specializing in efficient, scalable applications. With 7+ years of experience, I focus on building reliable systems that provide seamless user experiences.
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <FaNode size={25} className="text-green-500" title="Node.js" />
                <DiPostgresql size={25} className="text-blue-500" title="PostgreSQL" />
                <FaReact size={25} className="text-blue-500" title="ReactJS" />
                <FaDocker size={25} className="text-teal-500" title="Docker" />
              </div>
            </div>
          </Slide>
        </Fade>

        <Fade delay={700}>
          <Slide direction="up" duration={1200}>
            <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">Hobbies and Interests</h3>
              <p className="text-base text-gray-700">
                Outside of coding, I run trails, capture landscapes through photography, and enjoy exploring new places.
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <FaRunning size={25} className="text-teal-400" title="Running" />
                <FaFutbol size={25} className="text-red-400" title="Football" />
                <FaCameraRetro size={25} className="text-gray-400" title="Photography" />
                <MdOutlineModeOfTravel size={25} className="text-blue-400" title="Travel" />
              </div>
            </div>
          </Slide>
        </Fade>
      </div>
    </div>
  </div>
);

export default About;
