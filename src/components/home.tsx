import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FiCamera } from 'react-icons/fi';
import { GrDeploy } from 'react-icons/gr';
import { LiaRunningSolid } from 'react-icons/lia';
import { MdExplore } from 'react-icons/md';

const duration: number = new Date().getFullYear() - 2018;

const Home = () => (
  <div
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 transition-all duration-1000 ease-in-out px-4 overflow-hidden"
  >
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-10">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 bg-gray-400 rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float 20s infinite linear ${i * 0.5}s`
          }}
        />
      ))}
    </div>

    {/* Main Content */}
    <div className="text-center max-w-xl relative z-10 space-y-8">
      <JackInTheBox delay={200} triggerOnce>
        <div className="inline-block animate-float">
          <span className="text-5xl md:text-6xl">🌎</span>
        </div>
      </JackInTheBox>

      <Fade delay={400} cascade damping={0.2} triggerOnce>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Polma Tambunan
        </h1>
        
        <Slide direction="up" duration={1000} triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            <div className="p-4 bg-white bg-opacity-50 rounded-lg backdrop-blur-sm hover:bg-opacity-70 transition-all">
              <GrDeploy className="w-8 h-8 mb-2 mx-auto text-blue-600" />
              <p className="font-semibold">{duration}+ Years</p>
              <p className="text-sm">Development</p>
            </div>
            
            <div className="p-4 bg-white bg-opacity-50 rounded-lg backdrop-blur-sm hover:bg-opacity-70 transition-all">
              <LiaRunningSolid className="w-8 h-8 mb-2 mx-auto text-green-500" />
              <p className="font-semibold">1000+ KM</p>
              <p className="text-sm">Running per year</p>
            </div>
            
            <div className="p-4 bg-white bg-opacity-50 rounded-lg backdrop-blur-sm hover:bg-opacity-70 transition-all">
              <FiCamera className="w-8 h-8 mb-2 mx-auto text-purple-500" />
              <p className="font-semibold">Photography</p>
              <p className="text-sm">Passion</p>
            </div>
            
            <div className="p-4 bg-white bg-opacity-50 rounded-lg backdrop-blur-sm hover:bg-opacity-70 transition-all">
              <MdExplore className="w-8 h-8 mb-2 mx-auto text-orange-500" />
              <p className="font-semibold">Love</p>
              <p className="text-sm">Exploration</p>
            </div>
          </div>
        </Slide>

        <Slide direction='down' delay={200} duration={1000} triggerOnce>
          <p className="text-md md:text-md text-gray-600 mt-8 max-w-xl mx-auto leading-relaxed">
          Crafting digital experiences by day, capturing life's moments by lens, 
          and chasing horizons one marathon at a time.
          </p>
        </Slide>
      </Fade>
    </div>

    {/* Custom CSS for animations */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default Home;