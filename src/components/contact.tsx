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
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6 transition-all duration-1000 ease-in-out"
  >
    <div className="text-center text-gray-900 max-w-3xl mx-auto space-y-8">
      {/* Heading */}
      <JackInTheBox triggerOnce>
        <h2 className="text-4xl md:text-5xl font-semibold">Let’s Connect!</h2>
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
