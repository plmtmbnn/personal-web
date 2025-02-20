import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <div
    id="contact"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-8 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black"
  >
    <div className="text-center text-white max-w-3xl mx-auto space-y-8">
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let’s Connect!</h2>
      </JackInTheBox>

      <Fade delay={300} triggerOnce>
        <Slide direction="up" delay={300} triggerOnce>
          <p className="text-lg text-gray-200 dark:text-gray-300">
            Feel free to reach out through email or social media!
          </p>
        </Slide>
      </Fade>

      {/* Contact Options */}
      <Fade delay={400} triggerOnce>
        <Slide direction="up" delay={400} triggerOnce>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:plmtmbnn@gmail.com"
              className="flex items-center gap-2 text-teal-300 hover:text-teal-400 font-medium transition-colors duration-300 dark:text-teal-400 dark:hover:text-teal-500"
            >
              <FaEnvelope size={22} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/polma-tambunan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-300 hover:text-teal-400 font-medium transition-colors duration-300 dark:text-teal-400 dark:hover:text-teal-500"
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a
              href="https://github.com/plmtmbnn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-300 hover:text-teal-400 font-medium transition-colors duration-300 dark:text-teal-400 dark:hover:text-teal-500"
            >
              <FaGithub size={22} /> GitHub
            </a>
          </div>
        </Slide>
      </Fade>

      <Fade delay={500} triggerOnce>
        <Slide direction="up" delay={500} triggerOnce>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Looking forward to connecting!
          </p>
        </Slide>
      </Fade>
    </div>
  </div>
);

export default Contact;
