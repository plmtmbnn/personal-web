import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// Contact Links Data
const contactLinks = [
  {
    href: 'mailto:plmtmbnn@gmail.com',
    label: 'Email',
    Icon: FaEnvelope
  },
  {
    href: 'https://www.linkedin.com/in/polma-tambunan/',
    label: 'LinkedIn',
    Icon: FaLinkedin
  },
  {
    href: 'https://github.com/plmtmbnn',
    label: 'GitHub',
    Icon: FaGithub
  }
];

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-12"
  >
    <div className="max-w-4xl w-full text-center space-y-8 sm:space-y-12">
      {/* Heading */}
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
          Let’s Connect!</h2>
      </JackInTheBox>

      {/* Subtitle */}
      <Fade delay={200} triggerOnce>
        <p className="text-lg text-gray-700">
          Feel free to reach out via email or social media!
        </p>
      </Fade>

      {/* Contact Links */}
      <Slide direction="up" delay={300} triggerOnce>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {contactLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${label}`}
              className="flex items-center gap-3 px-4 py-2 bg-white shadow-md rounded-lg text-gray-900 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Icon size={22} />
              <span className="text-lg">{label}</span>
            </a>
          ))}
        </div>
      </Slide>
    </div>
  </section>
);

export default Contact;
