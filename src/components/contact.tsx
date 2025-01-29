import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';

const Contact = () => (
  <div
    id="contact"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-8 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black"
  >
    <div className="text-center text-white max-w-3xl mx-auto space-y-6">
      <JackInTheBox delay={200}>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let’s Connect!</h2>
      </JackInTheBox>

      <Fade delay={300}>
        <Slide direction="up" delay={300}>
          <p className="text-lg text-gray-200 dark:text-gray-300">
            Reach out via{' '}
            <a
              href="mailto:plmtmbnn@gmail.com"
              className="text-teal-300 hover:text-teal-400 font-medium underline transition-colors duration-300 dark:text-teal-400 dark:hover:text-teal-500"
            >
              Email
            </a>{' '}
            or{' '}
            <a
              href="https://www.linkedin.com/in/polma-tambunan/"
              className="text-teal-300 hover:text-teal-400 font-medium underline transition-colors duration-300 dark:text-teal-400 dark:hover:text-teal-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>.
          </p>
        </Slide>
      </Fade>

      <Fade delay={400}>
        <Slide direction="up" delay={400}>
          <p className="text-sm text-gray-300 dark:text-gray-500">Looking forward to connecting!</p>
        </Slide>
      </Fade>
    </div>
  </div>
);

export default Contact;
