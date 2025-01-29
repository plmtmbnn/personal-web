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

  const toggleCollapse = (setter: any) => {
    setter((prevState: any) => !prevState);
  };

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
        labels: {
          font: {
            size: 14 // Increased font size for better readability
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: { label: any; raw: any; }) => `${context.label}: ${context.raw}%`
        },
        bodyFont: {
          size: 14 // Increased font size for tooltip
        },
        titleFont: {
          size: 16 // Increased font size for tooltip title
        }
      }
    }
  };

  return (
    <div
      id="portfolio"
      className="min-h-screen bg-gray-100 py-20 px-4 md:px-6 lg:px-8" // Improved padding and background
    >
      <div className="container mx-auto"> {/* Added container for centering */}
        <JackInTheBox delay={200}>
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            My Portfolio
          </h2>
        </JackInTheBox>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8"> {/* Added gap */}
          <div className="w-full lg:w-1/4"> {/* Adjusted width for better responsiveness */}
            <Zoom>
              <div className="bg-white rounded-lg shadow-lg p-6"> {/* Added card styling */}
                <Pie data={data} options={{...options as any}} />
              </div>
            </Zoom>
          </div>

          <div className="w-full lg:w-3/4">
            <Fade>
              <div className="space-y-6"> {/* Added spacing between sections */}
                <Zoom>
                  <div className="bg-white rounded-lg shadow-lg p-6"> {/* Added card styling */}
                    <h3
                      className="text-2xl font-semibold cursor-pointer flex items-center mb-4"
                      onClick={() => toggleCollapse(setIsCollapsedLOS)}
                    >
                      <span>LOS & LMS Core Systems</span>
                      <ToggleIndicator isCollapsed={isCollapsedLOS} onClick={() => toggleCollapse(setIsCollapsedLOS)} />
                    </h3>
                    <div
                      className={`transition-all duration-300 ${isCollapsedLOS ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}
                    >
                      <p className="text-lg leading-relaxed mb-4">
                        Developed end-to-end LOS & LMS systems for five companies, significantly improving operational efficiency and customer experience:
                      </p>
                      <ul className="list-disc list-inside text-md leading-relaxed space-y-2"> {/* Added spacing in list */}
                        <li><strong>Borrower Onboarding</strong> - Streamlined registration and verification processes.</li>
                        <li><strong>EKYC System</strong> - Automated identity verification.</li>
                        <li><strong>Underwriting Workflow</strong> - Automated and manual risk assessment.</li>
                        <li><strong>Digital Signing</strong> - Secure document signing and authentication.</li>
                        <li><strong>Disbursement System</strong> - Automated and manual loan disbursement processes.</li>
                        <li><strong>Collection Module</strong> - Debt recovery and repayment management.</li>
                        <li><strong>Accounting & Reporting</strong> - Financial reporting, compliance, and auditing tools.</li>
                      </ul>
                    </div>
                  </div>
                </Zoom>

                <Zoom>
                  <div className="bg-white rounded-lg shadow-lg p-6"> {/* Added card styling */}
                    <h3
                      className="text-2xl font-semibold cursor-pointer flex items-center mb-4"
                      onClick={() => toggleCollapse(setIsCollapsedOther)}
                    >
                      <span>Other Notable Projects</span>
                      <ToggleIndicator isCollapsed={isCollapsedOther} onClick={() => toggleCollapse(setIsCollapsedOther)} />
                    </h3>
                    <div
                      className={`transition-all duration-300 ${isCollapsedOther ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 shadow-md rounded-lg p-6">
                          <h3 className="text-lg font-semibold">Insurance Core System</h3>
                          <p>Manual system for product creation, policy management, and underwriting.</p>
                        </div>
                        <div className="bg-gray-50 shadow-md rounded-lg p-6">
                          <h3 className="text-lg font-semibold">Standalone Tools</h3>
                          <ul className="list-disc list-inside space-y-2"> {/* Added spacing in list */}
                            <li><strong>OCR for Indonesia KTP</strong> - Automated ID data extraction.</li>
                            <li><strong>Bank Statement Extractor</strong> - Structured financial data extraction.</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 shadow-md rounded-lg p-6">
                          <h3 className="text-lg font-semibold">Organization App</h3>
                          <p>Features for membership onboarding, digital cards, cadre management, and vocational activities.</p>
                        </div>
                        <div className="bg-gray-50 shadow-md rounded-lg p-6">
                          <h3 className="text-lg font-semibold">Investment App</h3>
                          <p>Real-time news feeds, market data, and portfolio management for investors.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;