import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';

const duration: number = new Date().getFullYear() - 2018;

const Home = () => (
  <div
    id="home"
    className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out p-4"
  >
    {/* Patterned Cross Background */}
    <div
      className="absolute inset-0 bg-pattern-cross bg-pattern-cross pointer-events-none"
      aria-hidden="true"
    ></div>

    {/* Main Content */}
    <div className="text-center max-w-3xl relative z-10">
      <JackInTheBox delay={200}>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-black">
          🌎,
        </h1>
      </JackInTheBox>
      <Fade delay={500}>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 text-black">
          I'm Polma Tambunan.
        </h1>
      </Fade>
      <Fade delay={200}>
        <Slide direction="down" duration={1500}>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
          I’ve been crafting amazing apps for {duration} years, running (still
            half) marathons, capturing life’s moments through photography, and
            exploring (a little part of) the world.
          </p>
        </Slide>
      </Fade>
    </div>
  </div>
);

export default Home;
