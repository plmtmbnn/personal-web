import { useState } from 'react';
import { Zoom, Fade, JackInTheBox } from 'react-awesome-reveal';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Registering chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const ToggleIndicator = ({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) => (
  <div className="ml-auto text-lg cursor-pointer" onClick={onClick}>
    {isCollapsed ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
  </div>
);

const Portfolio = () => {
  const [isCollapsedLOS, setIsCollapsedLOS] = useState(true); // State for LOS section
  const [isCollapsedOther, setIsCollapsedOther] = useState(true); // State for Other Projects section

  const toggleCollapseLOS = () => {
    setIsCollapsedLOS(!isCollapsedLOS);
  };

  const toggleCollapseOther = () => {
    setIsCollapsedOther(!isCollapsedOther);
  };

  // Data for the Pie chart (80% and 20% breakdown)
  const data = {
    labels: ['LOS & LMS Core Systems', 'Other Projects'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#38b2ac', '#edf2f7'], // Teal for 80%, light gray for 20%
        borderColor: ['#2c7a7b', '#e2e8f0'], // Darker shades for borders
        borderWidth: 2
      }
    ]
  };

  // Options for Pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (context: any) => `${context.label}: ${context.raw}%` // Display percentage
        }
      }
    }
  };

  return (
    <div
      id="portfolio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 transition-all duration-1000 ease-in-out p-4"
    >
      {/* Fixed Header */}
      <div className="w-full fixed top-0 left-0 right-0 p-6 z-10">
        <JackInTheBox delay={200}>
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            My Portfolio
          </h2>
        </JackInTheBox>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between mt-24">
        {/* Left side - Pie Chart (20%) */}
        <div className="w-full lg:w-1/5 h-full flex justify-center mb-8 lg:mb-0 mx-auto">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-xs">
            <Pie data={data} options={options} />
          </div>
        </div>

        {/* Right side - Collapsible Content (80%) */}
        <div className="w-full lg:w-4/5 h-full flex flex-col items-start justify-start p-6 lg:p-8 overflow-auto">
          <Fade delay={200}>
            <div className="w-full h-auto flex flex-col items-center justify-between">
              {/* 80% Section - LOS & LMS Core Systems */}
              <Zoom delay={200}>
                <div className="w-full p-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg shadow-2xl hover:shadow-3xl transition duration-300 border-l-8 border-teal-800 mb-4">
                  <h3
                    className="text-2xl font-semibold cursor-pointer flex items-center mb-4"
                    onClick={toggleCollapseLOS}
                  >
                    <span>80% - LOS & LMS Core Systems</span>
                    <ToggleIndicator isCollapsed={isCollapsedLOS} onClick={toggleCollapseLOS} />
                  </h3>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-300 ${isCollapsedLOS ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}
                  >
                    <p className="text-lg leading-relaxed">
                      Developed end-to-end LOS & LMS systems for five companies, significantly improving operational efficiency and customer experience:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-md leading-relaxed">
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

              {/* 20% Section - Other Notable Projects */}
              <Zoom delay={500}>
                <div className="w-full p-6 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-gray-600 mb-4">
                  <h3
                    className="text-2xl font-semibold cursor-pointer flex items-center mb-4"
                    onClick={toggleCollapseOther}
                  >
                    <span>20% - Other Notable Projects</span>
                    <ToggleIndicator isCollapsed={isCollapsedOther} onClick={toggleCollapseOther} />
                  </h3>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-300 ${isCollapsedOther ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}
                  >
                    <div className="grid md:grid-cols-2 gap-6 text-base md:text-sm">
                      <div className="bg-gray-50 shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold">Insurance Core System</h3>
                        <p>Manual system for product creation, policy management, and underwriting.</p>
                      </div>
                      <div className="bg-gray-50 shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold">Standalone Tools</h3>
                        <ul className="list-disc list-inside">
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
  );
};

export default Portfolio;
