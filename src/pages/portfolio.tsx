/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Zoom, Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { HiSparkles, HiCode } from 'react-icons/hi';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

interface ToggleIndicatorProps {
  isCollapsed: boolean;
  onClick: () => void;
}

const ToggleIndicator: React.FC<ToggleIndicatorProps> = ({ isCollapsed, onClick }) => (
  <div className="ml-auto text-sm cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" onClick={onClick}>
    {isCollapsed ? <MdKeyboardDoubleArrowDown size={24} /> : <MdKeyboardDoubleArrowUp size={24} />}
  </div>
);

const Portfolio = () => {
  const [isCollapsedLOS, setIsCollapsedLOS] = useState(true);
  const [isCollapsedOther, setIsCollapsedOther] = useState(true);
  const [activeSlice, setActiveSlice] = useState<number | null>(null);

  const toggleCollapse = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const data = {
    labels: ['LOS & LMS Core Systems', 'Other Projects'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(168, 85, 247, 0.8)'],
        hoverBackgroundColor: ['rgba(59, 130, 246, 1)', 'rgba(168, 85, 247, 1)'],
        borderWidth: 2,
        borderColor: '#1f2937',
        borderRadius: 8,
        hoverBorderWidth: 3,
        hoverBorderColor: '#374151'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#d1d5db',
          font: {
            size: 14,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#fff',
        bodyColor: '#d1d5db',
        borderColor: '#374151',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: (context: { label: any; raw: any }) => `${context.label}: ${context.raw}%`
        },
        bodyFont: { size: 13 },
        titleFont: { size: 14, weight: 'bold' }
      }
    },
    onClick: (_evt: any, elements: any[]) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0]?.index;
        setActiveSlice(clickedIndex);
        if (clickedIndex === 1) {
          setIsCollapsedLOS(true);
          setIsCollapsedOther(false);
        }
        if (clickedIndex === 0) {
          setIsCollapsedLOS(false);
          setIsCollapsedOther(true);
        }
      }
    },
    onHover: (_evt: any, elements: any[]) => {
      if (elements.length > 0) {
        setActiveSlice(elements[0]?.index);
      } else {
        setActiveSlice(null);
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl w-full text-center space-y-12 lg:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-6">
          <JackInTheBox delay={200} triggerOnce>
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiCode className="w-8 h-8 text-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium tracking-wider uppercase">My Work</span>
              <HiSparkles className="w-8 h-8 text-purple-400 animate-pulse delay-300" />
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Portfolio
            </h2>
          </JackInTheBox>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Pie Chart */}
          <Zoom triggerOnce>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-white text-left">Project Distribution</h3>
                </div>
                <div className="h-80 lg:h-96 flex justify-center items-center">
                  <Pie data={data} options={options as any} />
                </div>
                <p className="text-gray-400 text-sm text-center mt-6">
                  Click on chart segments to explore projects
                </p>
              </div>
            </div>
          </Zoom>

          {/* Project Descriptions */}
          <div className="space-y-6 lg:space-y-8">
            {/* LOS & LMS Section */}
            <Fade triggerOnce>
              <div className={`relative group transition-all duration-500 ${!isCollapsedLOS || activeSlice === 0 ? 'ring-2 ring-blue-500/50' : ''}`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 p-6 lg:p-8">
                  <h3
                    className="text-xl lg:text-2xl font-bold text-white cursor-pointer flex items-center mb-4 hover:text-blue-400 transition-colors duration-300"
                    onClick={() => toggleCollapse(setIsCollapsedLOS)}
                  >
                    <span className="mr-3 text-2xl">💼</span>
                    <span className="flex-1 text-left">LOS & LMS Core Systems</span>
                    <ToggleIndicator isCollapsed={isCollapsedLOS} onClick={() => toggleCollapse(setIsCollapsedLOS)} />
                  </h3>
                  
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isCollapsedLOS ? 'max-h-0' : 'max-h-[800px]'
                    }`}
                  >
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"></div>
                    <p className="text-gray-300 text-base leading-relaxed mb-6 text-left">
                      Developed comprehensive end-to-end LOS & LMS systems for multiple fintech companies, handling millions in loan transactions.
                    </p>
                    
                    <Slide cascade damping={0.1} triggerOnce>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {[
                          { icon: '👤', title: 'Borrower Onboarding', desc: 'Seamless registration and verification process' },
                          { icon: '🔍', title: 'eKYC System', desc: 'Automated digital identity verification' },
                          { icon: '📊', title: 'Underwriting Workflow', desc: 'Intelligent risk assessment engine' },
                          { icon: '✍️', title: 'Digital Signing', desc: 'Secure and compliant document authentication' },
                          { icon: '💸', title: 'Disbursement Engine', desc: 'Instant and automated loan processing' },
                          { icon: '📥', title: 'Collection Module', desc: 'Smart recovery and repayment tracking' },
                          { icon: '📚', title: 'Accounting & Reports', desc: 'Tools for compliance, audit, and insights' }
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 group/card"
                          >
                            <p className="font-semibold text-white mb-2 flex items-center gap-2">
                              <span className="text-xl">{item.icon}</span>
                              <span className="group-hover/card:text-blue-400 transition-colors duration-300">{item.title}</span>
                            </p>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Other Projects Section */}
            <Fade triggerOnce>
              <div className={`relative group transition-all duration-500 ${!isCollapsedOther || activeSlice === 1 ? 'ring-2 ring-purple-500/50' : ''}`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 p-6 lg:p-8">
                  <h3
                    className="text-xl lg:text-2xl font-bold text-white cursor-pointer flex items-center mb-4 hover:text-purple-400 transition-colors duration-300"
                    onClick={() => toggleCollapse(setIsCollapsedOther)}
                  >
                    <span className="mr-3 text-2xl">🚀</span>
                    <span className="flex-1 text-left">Other Notable Projects</span>
                    <ToggleIndicator isCollapsed={isCollapsedOther} onClick={() => toggleCollapse(setIsCollapsedOther)} />
                  </h3>
                  
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isCollapsedOther ? 'max-h-0' : 'max-h-[800px]'
                    }`}
                  >
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
                    
                    <Slide cascade damping={0.1} triggerOnce>
                      <div className="grid grid-cols-1 gap-4 text-left">
                        {[
                          { icon: '🛡️', title: 'Insurance Core System', desc: 'Manage products, policies, and underwriting in one platform', color: 'from-blue-500 to-cyan-500' },
                          { icon: '🧰', title: 'Standalone Tools', desc: 'KTP OCR for automated ID extraction and Bank Statement Extractor for financial data analysis', color: 'from-emerald-500 to-teal-500' },
                          { icon: '🏛️', title: 'Organization App', desc: 'Handle member onboarding, digital identity cards, and cadre tracking efficiently', color: 'from-orange-500 to-red-500' },
                          { icon: '📈', title: 'Investment App', desc: 'Stay updated with live news, market trends, and portfolio insights', color: 'from-purple-500 to-pink-500' }
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="group/card relative overflow-hidden"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/card:opacity-10 transition-opacity duration-300`}></div>
                            <div className="relative p-5 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300">
                              <h4 className="font-semibold text-white mb-2 flex items-center gap-2 text-lg">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="group-hover/card:text-purple-400 transition-colors duration-300">{item.title}</span>
                              </h4>
                              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;