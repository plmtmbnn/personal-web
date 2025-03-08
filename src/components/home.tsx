import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FiCamera } from 'react-icons/fi';
import { GrDeploy } from 'react-icons/gr';
import { LiaRunningSolid } from 'react-icons/lia';

const duration: number = new Date().getFullYear() - 2018;

const Home = () => (
  <div
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-6 overflow-hidden"
  >
    {/* Soft Animated Background Elements */}
    <div className="absolute inset-0 flex flex-wrap opacity-5">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 bg-blue-300 rounded-full"
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float 15s infinite ease-in-out ${i * 0.3}s`
          }}
        />
      ))}
    </div>

    {/* Main Content */}
    <div className="text-center max-w-2xl relative z-10">
      <JackInTheBox delay={200} triggerOnce>
        <div className="inline-block animate-bounce">
          <span className="text-6xl drop-shadow-md">🚀</span>
        </div>
      </JackInTheBox>

      <Fade delay={400} cascade damping={0.2} triggerOnce>
        <h1 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent">
          Polma Tambunan
        </h1>

        <Slide direction="up" duration={1000} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white/50 shadow-md rounded-xl backdrop-blur-lg hover:shadow-lg transform transition-transform hover:scale-105">
              <GrDeploy className="w-10 h-10 mb-2 mx-auto text-blue-700" />
              <p className="font-semibold text-lg">{duration}+ Years</p>
              <p className="text-sm text-gray-600">Development</p>
            </div>

            <div className="p-6 bg-white/50 shadow-md rounded-xl backdrop-blur-lg hover:shadow-lg transform transition-transform hover:scale-105">
              <LiaRunningSolid className="w-10 h-10 mb-2 mx-auto text-green-600" />
              <p className="font-semibold text-lg">1000+ KM</p>
              <p className="text-sm text-gray-600">Running per year</p>
            </div>

            <div className="p-6 bg-white/50 shadow-md rounded-xl backdrop-blur-lg hover:shadow-lg transform transition-transform hover:scale-105">
              <FiCamera className="w-10 h-10 mb-2 mx-auto text-purple-600" />
              <p className="font-semibold text-lg">Capture</p>
              <p className="text-sm text-gray-600">Photography</p>
            </div>
          </div>
        </Slide>

        <Slide direction="down" delay={200} duration={1000} triggerOnce>
          <p className="text-lg text-gray-700 mt-8 max-w-xl mx-auto leading-relaxed">
            Crafting financial lending systems—engineer by day, runner by passion.
          </p>
        </Slide>
      </Fade>
    </div>

    {/* Floating Animation */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); opacity: 0.3; }
        50% { transform: translateY(-10px); opacity: 0.5; }
      }
    `}</style>
  </div>
);

export default Home;
