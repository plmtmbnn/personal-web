import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

const About = () => (
  <div
    id="about"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out p-4"
  >
    <div className="text-center max-w-3xl">
      <JackInTheBox delay={200}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
        About Me
      </h2>
      </JackInTheBox>
      <Fade delay={500}>
        <Slide direction="up" duration={1500}><p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
          As a full-time remote software engineer, I specialize in building
          efficient, scalable applications. When I'm not coding, you can find me
          running trails, capturing beautiful landscapes, or embarking on new
          adventures.
        </p>
        </Slide>
      </Fade>
    </div>
  </div>
);

export default About;
