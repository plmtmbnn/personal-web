import { Fade, Bounce,JackInTheBox } from "react-awesome-reveal";

const Home = () => (
  <div
    id="home"
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out p-4"
  >
    <div className="text-center max-w-3xl">
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
      <Bounce duration={2000}>
      <p className="text-base md:text-lg lg:text-xl text-gray-600">
        I love creating amazing apps, running (still half) marathons, capturing
        moments through photography, and exploring (a little part of) the world.
      </p>
      </Bounce>
    </div>
  </div>
);

export default Home;
