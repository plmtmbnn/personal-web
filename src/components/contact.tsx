import { JackInTheBox, Slide } from "react-awesome-reveal";

const Contact = () => (
  <div
    id="contact"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-1000 ease-in-out p-4"
  >
    <footer className="text-center text-gray-100 max-w-3xl">
      <JackInTheBox delay={200}><h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2></JackInTheBox>
      <Slide direction="left" delay={200}>
      <p className="text-sm md:text-lg">
        Reach out via{" "}
        <a
          href="mailto:plmtmbnn@gmail.com"
          className="text-teal-400 underline"
        >
          email
        </a>{" "}
        or connect on{" "}
        <a
          href="https://www.linkedin.com/in/polma-tambunan/"
          className="text-teal-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>.
      </p>
      </Slide>
    </footer>
  </div>
);

export default Contact;