/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Zoom, Fade, JackInTheBox } from 'react-awesome-reveal';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

interface ToggleIndicatorProps {
  isCollapsed: boolean;
  onClick: () => void;
}

const ToggleIndicator: React.FC<ToggleIndicatorProps> = ({ isCollapsed, onClick }) => (
  <div className="ml-auto text-sm cursor-pointer" onClick={onClick}>
    {isCollapsed ? <MdKeyboardDoubleArrowDown size={18} /> : <MdKeyboardDoubleArrowUp size={18} />}
  </div>
);

const Portfolio = () => {
  const [isCollapsedLOS, setIsCollapsedLOS] = useState(true);
  const [isCollapsedOther, setIsCollapsedOther] = useState(true);

  const toggleCollapse = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const data = {
    labels: ['LOS & LMS Core Systems', 'Other Projects'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#3b82f6', '#b7f8db'],
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: { label: any; raw: any }) => `${context.label}: ${context.raw}%`
        },
        bodyFont: { size: 12 },
        titleFont: { size: 14 }
      }
    },
    onClick: (_evt: any, elements: any[]) => {
      if (elements.length > 0) {
        if(elements[0]?.index === 1) {
          setIsCollapsedLOS(true);
          setIsCollapsedOther(false);
        }
        if(elements[0]?.index === 0) {
          setIsCollapsedLOS(false);
          setIsCollapsedOther(true);
        }
        
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-12"
    >
      <div className="max-w-4xl w-full text-center space-y-8 sm:space-y-12">
        {/* Section Title */}
        <JackInTheBox delay={200} triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
          Portfolio
          </h2>
        </JackInTheBox>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Pie Chart */}
          <Zoom triggerOnce>
            <div className="bg-white rounded-xl shadow-md p-4 w-full h-72 md:h-80 flex justify-center items-center">
              <Pie data={data} options={options as any} />
            </div>
          </Zoom>

          {/* Project Descriptions */}
          <div className="space-y-6">
            {/* LOS & LMS Section */}
            <Fade triggerOnce>
              <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                <h3
                  className="text-lg font-semibold cursor-pointer flex items-center mb-3"
                  onClick={() => toggleCollapse(setIsCollapsedLOS)}
                >
                  <span>LOS & LMS Core Systems</span>
                  <ToggleIndicator isCollapsed={isCollapsedLOS} onClick={() => toggleCollapse(setIsCollapsedLOS)} />
                </h3>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isCollapsedLOS ? 'max-h-0' : 'max-h-[600px]'
                  }`}
                >
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Developed end-to-end LOS & LMS systems for multiple companies:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-800 mt-6 text-left">
                    <div>
                      <p className="font-semibold text-gray-900">👤 Borrower Onboarding</p>
                      <p className="text-gray-700">Seamless registration and verification process.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">🔍 eKYC System</p>
                      <p className="text-gray-700">Automated digital identity verification.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">📊 Underwriting Workflow</p>
                      <p className="text-gray-700">Intelligent risk assessment engine.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">✍️ Digital Signing</p>
                      <p className="text-gray-700">Secure and compliant document authentication.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">💸 Disbursement Engine</p>
                      <p className="text-gray-700">Instant and automated loan processing.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">📥 Collection Module</p>
                      <p className="text-gray-700">Smart recovery and repayment tracking.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">📚 Accounting & Reports</p>
                      <p className="text-gray-700">Tools for compliance, audit, and insights.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Other Projects Section */}
            <Fade triggerOnce>
              <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                <h3
                  className="text-lg font-semibold cursor-pointer flex items-center mb-3"
                  onClick={() => toggleCollapse(setIsCollapsedOther)}
                >
                  <span>Other Notable Projects</span>
                  <ToggleIndicator isCollapsed={isCollapsedOther} onClick={() => toggleCollapse(setIsCollapsedOther)} />
                </h3>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isCollapsedOther ? 'max-h-0' : 'max-h-[600px]'
                  }`}
                >
                  <div className="grid md:grid-cols-1 gap-6 text-left text-sm sm:text-base text-gray-800 mt-6">
                    <div className="bg-gray-50 shadow rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-1">🛡️ Insurance Core System</h3>
                      <p className="text-gray-700">Manage products, policies, and underwriting in one platform.</p>
                    </div>

                    <div className="bg-gray-50 shadow rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-1">🧰 Standalone Tools</h3>
                      <p className="text-gray-700">
                        <span className="block"><strong>🔎 KTP OCR:</strong> Automated ID data extraction from Indonesian KTP.</span>
                        <span className="block mt-1"><strong>🏦 Bank Statement Extractor:</strong> Extract structured financial data instantly.</span>
                      </p>
                    </div>

                    <div className="bg-gray-50 shadow rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-1">🏛️ Organization App</h3>
                      <p className="text-gray-700">Handle member onboarding, digital identity cards, and cadre tracking efficiently.</p>
                    </div>

                    <div className="bg-gray-50 shadow rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-1">📈 Investment App</h3>
                      <p className="text-gray-700">Stay updated with live news, market trends, and portfolio insights.</p>
                    </div>
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
