import { useEffect, useState } from 'react';

const Loader = () => {
  const [dots, setDots] = useState('');

  // Dynamic dot animation for "serving..."
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-600">
      {/* Earth Emoji with Smooth Floating Animation */}
      <span className="text-7xl animate-float">🌎</span>

      {/* Animated Text */}
      <p className="mt-3 text-lg font-semibold text-blue-600 tracking-wide">
        serving<span>{dots}</span>
      </p>

      {/* Custom CSS for Floating Effect */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
