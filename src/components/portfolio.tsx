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
  <div className="ml-auto text-lg cursor-pointer" onClick={onClick}>
    {isCollapsed ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
  </div>
);

const Portfolio = () => {
  const [isCollapsedLOS, setIsCollapsedLOS] = useState(true);
  const [isCollapsedOther, setIsCollapsedOther] = useState(true);

  const toggleCollapse = (setter: any) => setter((prev: any) => !prev);

  const data = {
    labels: ['LOS & LMS Core Systems', 'Other Projects'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#396afc', '#74ebd5'], // Blue shades
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 14 } }
      },
      tooltip: {
        callbacks: {
          label: (context: { label: any; raw: any }) => `${context.label}: ${context.raw}%`
        },
        bodyFont: { size: 14 },
        titleFont: { size: 16 }
      }
    }
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <JackInTheBox>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            My Portfolio
          </h2>
        </JackInTheBox>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Pie Chart */}
          <div className="flex justify-center">
            <Zoom>
              <div className="bg-white rounded-2xl shadow-xl p-6 w-72 md:w-96">
                <Pie data={data} options={{ ...options as any }} />
              </div>
            </Zoom>
          </div>

          {/* Project Sections */}
          <div className="space-y-8">
            {/* LOS & LMS Core Systems */}
            <Fade>
              <div className="bg-white rounded-2xl shadow-xl p-6 transition duration-300 hover:shadow-2xl">
                <h3
                  className="text-2xl font-semibold cursor-pointer flex items-center mb-4"
                  onClick={() => toggleCollapse(setIsCollapsedLOS)}
                >
                  <span>LOS & LMS Core Systems</span>
                  <ToggleIndicator isCollapsed={isCollapsedLOS} onClick={() => toggleCollapse(setIsCollapsedLOS)} />
                </h3>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isCollapsedLOS ? 'max-h-0' : 'max-h-[500px]'
                  }`}
                >
                  <p className="text-lg leading-relaxed mb-4">
                    Developed end-to-end LOS & LMS systems for five companies, significantly improving efficiency:
                  </p>
                  <ul className="list-disc list-inside text-md space-y-2">
                    <li><strong>Borrower Onboarding</strong> - Streamlined registration and verification.</li>
                    <li><strong>EKYC System</strong> - Automated identity verification.</li>
                    <li><strong>Underwriting Workflow</strong> - Risk assessment automation.</li>
                    <li><strong>Digital Signing</strong> - Secure document authentication.</li>
                    <li><strong>Disbursement System</strong> - Automated loan processing.</li>
                    <li><strong>Collection Module</strong> - Debt recovery management.</li>
                    <li><strong>Accounting & Reporting</strong> - Financial compliance tools.</li>
                  </ul>
                </div>
              </div>
            </Fade>

            {/* Other Notable Projects */}
            <Fade>
              <div className="bg-white rounded-2xl shadow-xl p-6 transition duration-300 hover:shadow-2xl">
                <h3
                  className="text-2xl font-semibold cursor-pointer flex items-center mb-4"
                  onClick={() => toggleCollapse(setIsCollapsedOther)}
                >
                  <span>Other Notable Projects</span>
                  <ToggleIndicator isCollapsed={isCollapsedOther} onClick={() => toggleCollapse(setIsCollapsedOther)} />
                </h3>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isCollapsedOther ? 'max-h-0' : 'max-h-[800px]'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 shadow-md rounded-lg p-6">
                      <h3 className="text-lg font-semibold">Insurance Core System</h3>
                      <p>Product creation, policy management, and underwriting.</p>
                    </div>
                    <div className="bg-gray-50 shadow-md rounded-lg p-6">
                      <h3 className="text-lg font-semibold">Standalone Tools</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>OCR for Indonesia KTP</strong> - Automated ID data extraction.</li>
                        <li><strong>Bank Statement Extractor</strong> - Structured financial data extraction.</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 shadow-md rounded-lg p-6">
                      <h3 className="text-lg font-semibold">Organization App</h3>
                      <p>Membership onboarding, digital cards, and cadre management.</p>
                    </div>
                    <div className="bg-gray-50 shadow-md rounded-lg p-6">
                      <h3 className="text-lg font-semibold">Investment App</h3>
                      <p>Real-time news feeds, market data, and portfolio management.</p>
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
