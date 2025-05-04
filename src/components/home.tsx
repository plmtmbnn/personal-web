import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FiCamera } from 'react-icons/fi';
import { GrDeploy } from 'react-icons/gr';
import { LiaRunningSolid } from 'react-icons/lia';

const duration: number = new Date().getFullYear() - 2018;

const Home = () => (
  <div
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-2 sm:px-6 overflow-hidden"
  >
    {/* Mobile-Optimized Background */}
    <div className="absolute inset-0 opacity-10">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-100/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float 20s infinite cubic-bezier(0.4, 0, 0.6, 1) ${i * 0.5}s`
          }}
        />
      ))}
    </div>

    {/* Responsive Content Container */}
    <div className="text-center w-full max-w-2xl relative z-10 space-y-6 sm:space-y-8 px-2">
      <JackInTheBox delay={200} triggerOnce>
        <div className="inline-block animate-soft-bounce">
          <span className="text-4xl sm:text-8xl">🌏</span>
        </div>
      </JackInTheBox>

      <Fade delay={300} cascade damping={0.1} triggerOnce>
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent px-2">
            Polma Tambunan
          </h1>
          <Slide direction="down" delay={200} duration={800} triggerOnce>
            <p className="text-gray-600 mt-6 sm:mt-8 mx-auto text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-md px-1">
            Engineering impactful solutions and running intentional miles—dedicated to both code and life. Bit by Bit, Mile by Mile.
            </p>
          </Slide>
          

          <Slide direction="up" duration={800} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-8">
              <StatCard
                icon={<GrDeploy className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600" />}
                title={`${duration}+ Years`}
                subtitle="Development"
              />
              <StatCard
                icon={<LiaRunningSolid className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />}
                title="1000+ KM"
                subtitle="Running per year"
              />
              <StatCard
                icon={<FiCamera className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />}
                title="Capture"
                subtitle="Photography"
              />
            </div>
          </Slide>

          
        </div>
      </Fade>
    </div>

    {/* Mobile-Friendly Animations */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
        50% { transform: translateY(-8px) scale(1.02); opacity: 0.3; }
      }
      @keyframes soft-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      .animate-soft-bounce { animation: soft-bounce 3s ease-in-out infinite; }
      
      @media (max-width: 640px) {
        .animate-soft-bounce { animation-duration: 4s; }
      }
    `}</style>
  </div>
);

// Responsive Stat Card Component
const StatCard = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="p-3 sm:p-4 bg-white/80 backdrop-blur-xs sm:backdrop-blur-lg rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1">
    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
      <div className="p-1 sm:p-2">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-500 font-medium">{subtitle}</p>
    </div>
  </div>
);

export default Home;