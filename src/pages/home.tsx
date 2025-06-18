import { Fade, Slide } from 'react-awesome-reveal';
import { LiaRunningSolid } from 'react-icons/lia';
import { GrDeploy } from 'react-icons/gr';
import profileImage from '/profile.jpg';
import CountdownNumber from '../useCountdown';


const experienceYears = new Date().getFullYear() - 2018;


const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-12"
  >
    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      {/* Avatar */}
      <Fade delay={100} triggerOnce>
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImage}
            alt="Polma Tambunan"
            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full shadow-md border-3 border-white object-cover"
          />
        </div>
      </Fade>

      {/* Text Content */}
      <div className="md:col-span-2 space-y-6 sm:space-y-10 text-left">
        <Fade delay={150} triggerOnce>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            {'🌏, I\'m '}
            <span className="bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent">
              Polma Tambunan 
            </span>
          </h1>
        </Fade>

        <Fade delay={350} triggerOnce>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl">
            For the past {experienceYears}+ years, I've been building secure, scalable, and impactful software—primarily in the fintech
            space. From lending platforms to digital identity systems, I bring engineering focus to critical business
            needs.
          </p>
        </Fade>

        {/* Highlight Cards */}
        <Slide direction="up" delay={450} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-lg border border-gray-100">
              <GrDeploy className="w-7 h-7 text-sky-600" />
              <div>
                <p className="text-lg font-semibold text-gray-800"><CountdownNumber to={experienceYears} duration={1000} />+ Years</p>
                <p className="text-sm text-gray-600">in Software Development</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-lg border border-gray-100">
              <LiaRunningSolid className="w-7 h-7 text-emerald-500" />
              <div>
                <p className="text-lg font-semibold text-gray-800"><CountdownNumber to={1000} duration={2000} />+ KM</p>
                <p className="text-sm text-gray-600">Running per year</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  </section>
);

export default Home;
