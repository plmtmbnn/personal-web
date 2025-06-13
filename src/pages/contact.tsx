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
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] px-4 sm:px-6 py-12"
  >
    <div className="max-w-4xl w-full text-center space-y-10 sm:space-y-14">
      {/* Heading */}
      <JackInTheBox delay={200} triggerOnce>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#778da9] to-[#e0e1dd] bg-clip-text text-transparent tracking-tight">
          Let’s Connect!
        </h2>
      </JackInTheBox>

      {/* Subtitle */}
      <Fade delay={300} triggerOnce>
        <p className="text-lg text-[#e0e1dd]">
          Feel free to reach out via email or social media!
        </p>
      </Fade>

      {/* Contact Links */}
      <Slide direction="up" delay={400} triggerOnce>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {contactLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${label}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full border-2 border-[#e0e1dd] text-[#e0e1dd]
              hover:bg-[#415a77] hover:border-[#415a77] hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm"
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
