import { JackInTheBox, Fade, Zoom, Slide } from 'react-awesome-reveal';
import { HiSparkles, HiLocationMarker } from 'react-icons/hi';
import { FaRunning, FaCamera, FaInstagram } from 'react-icons/fa';
import { SiStrava } from 'react-icons/si';

const hobbies = [
  {
    title: 'Running Milestone',
    description: 'Miles logged, progress made. Every step is a victory.',
    embedUrl:
      'https://www.strava.com/athletes/38682026/activity-summary/84e311c34f606bea25b477bc6aa3e24b84c55e33',
    iframeHeight: '200px',
    icon: <FaRunning className="w-full h-full" />,
    gradient: 'from-emerald-500 to-teal-600',
    badge: <SiStrava className="w-4 h-4" />,
    badgeColor: 'bg-orange-500'
  },
  {
    title: 'Photography',
    description: 'Capturing moments, telling stories through the lens.',
    embedUrl: 'https://www.instagram.com/p/DBqBiMYzd4D/embed',
    iframeHeight: '520px',
    icon: <FaCamera className="w-full h-full" />,
    gradient: 'from-purple-500 to-pink-600',
    badge: <FaInstagram className="w-4 h-4" />,
    badgeColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500'
  }
];

const Adventures = () => (
  <section
    id="adventures"
    className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-16 lg:py-20 relative overflow-hidden"
  >
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <div className="max-w-7xl w-full text-center space-y-12 lg:space-y-16 relative z-10">
      {/* Section Header */}
      <div className="space-y-6">
        <JackInTheBox delay={200} triggerOnce>
          <div className="flex items-center justify-center gap-3 mb-4">
            <HiLocationMarker className="w-8 h-8 text-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium tracking-wider uppercase">Life Beyond Code</span>
            <HiSparkles className="w-8 h-8 text-purple-400 animate-pulse delay-300" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Adventures
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            Exploring the world through running and photography
          </p>
        </JackInTheBox>
      </div>

      {/* Hobby Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {hobbies.map(({ title, description, embedUrl, iframeHeight, icon, gradient, badge, badgeColor }, index) => (
          <Zoom delay={200 * index} duration={1000} triggerOnce key={title}>
            <div className="group relative h-full">
              {/* Glowing border effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-20 rounded-3xl blur group-hover:opacity-40 transition duration-1000`}></div>
              
              <div className="relative h-full bg-gray-800/60 backdrop-blur-md rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 overflow-hidden">
                {/* Card Header */}
                <div className="p-6 lg:p-8 border-b border-gray-700/50">
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div className={`p-4 bg-gradient-to-br ${gradient} rounded-xl shadow-lg`}>
                      <div className="w-8 h-8 text-white">
                        {icon}
                      </div>
                    </div>
                    
                    {/* Platform Badge */}
                    <div className={`${badgeColor} p-2 rounded-lg text-white shadow-lg`}>
                      {badge}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full mb-4`}></div>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Embedded Content */}
                <Fade delay={300} triggerOnce>
                  <div className="p-6 lg:p-8">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 bg-gray-900/50">
                      {/* Loading Skeleton */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>
                      
                      <iframe
                        title={title}
                        className="w-full relative z-10 bg-transparent"
                        height={iframeHeight}
                        src={embedUrl}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Fade>

                {/* Card Footer */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className={'flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'}>
                    <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full animate-pulse`}></div>
                    <span>Live updates from my adventures</span>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>

      {/* Call to Action / Stats */}
      <Slide direction="up" delay={600} triggerOnce>
        <div className="mt-16 pt-12 border-t border-gray-700/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <HiSparkles className="w-6 h-6 text-yellow-400" />
              <span>Join the Journey</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { 
                  number: '1000+', 
                  label: 'Kilometers Run', 
                  color: 'text-emerald-400',
                  icon: <FaRunning className="w-6 h-6" />
                },
                { 
                  number: '∞', 
                  label: 'Moments Captured', 
                  color: 'text-purple-400',
                  icon: <FaCamera className="w-6 h-6" />
                },
                { 
                  number: '24/7', 
                  label: 'Adventure Mode', 
                  color: 'text-cyan-400',
                  icon: <HiLocationMarker className="w-6 h-6" />
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={`flex justify-center mb-4 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <p className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center gap-4">
              <a
                href="https://www.strava.com/athletes/38682026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <SiStrava className="w-5 h-5" />
                Follow on Strava
              </a>
              
              <a
                href="https://www.instagram.com/me.a.mag/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FaInstagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  </section>
);

export default Adventures;