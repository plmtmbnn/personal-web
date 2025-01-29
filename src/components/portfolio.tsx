import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { Zoom, Fade, JackInTheBox } from 'react-awesome-reveal';

const ToggleIndicator = ({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) => (
  <div className="ml-auto text-sm cursor-pointer" onClick={onClick}>
    {isCollapsed ? <ArrowDown /> : <ArrowUp />}
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

  return (
    <div
      id="portfolio"
      className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 transition-all duration-1000 ease-in-out p-8"
    >
      <div className="max-w-6xl w-full">
        <JackInTheBox delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Portfolio
          </h2>
        </JackInTheBox>

        <Fade delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Collapsible 80% Section */}
            <Zoom delay={200}>
              <div className="p-4 md:p-14 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-md shadow-xl hover:shadow-2xl transition duration-300 border-l-8 border-blue-800">
                <h3
                  className="text-3xl font-bold cursor-pointer flex items-center"
                  onClick={toggleCollapseLOS}
                >
                  <span>80% - LOS & LMS Core Systems</span>
                  <ToggleIndicator isCollapsed={isCollapsedLOS} onClick={toggleCollapseLOS} />
                </h3>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ${isCollapsedLOS ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}
                >
                  <p className="mb-2 text-lg leading-relaxed">
                    Developed end-to-end LOS & LMS systems for five companies, streamlining operations and enhancing user experience:
                  </p>
                  <ul className="list-disc list-inside text-md leading-relaxed">
                    <li><strong>Borrower Onboarding</strong> - Streamlined registration and verification.</li>
                    <li><strong>EKYC System</strong> - Automated identity verification.</li>
                    <li><strong>Underwriting Workflow</strong> - Manual & automatic risk assessment.</li>
                    <li><strong>Digital Signing</strong> - Secure document authentication.</li>
                    <li><strong>Disbursement System</strong> - Automated & manual loan disbursement.</li>
                    <li><strong>Collection Module</strong> - Repayment processing & debt recovery.</li>
                    <li><strong>Accounting & Reporting</strong> - Financial tracking & compliance.</li>
                  </ul>
                </div>
              </div>
            </Zoom>

            {/* Collapsible 20% Section */}
            <Zoom delay={500}>
              <div className="p-4 md:p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-l-4 border-gray-800">
                <h3
                  className="text-md font-bold cursor-pointer flex items-center"
                  onClick={toggleCollapseOther}
                >
                  <span>20% - Other Notable Projects</span>
                  <ToggleIndicator isCollapsed={isCollapsedOther} onClick={toggleCollapseOther} />
                </h3>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ${isCollapsedOther ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}
                >
                  <div className="grid md:grid-cols-2 gap-3 text-base md:text-sm">
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
                      <p>Membership onboarding, digital cards, cadre management, events, and vocational features.</p>
                    </div>
                    <div className="bg-gray-50 shadow-md rounded-lg p-6">
                      <h3 className="text-lg font-semibold">Investment App</h3>
                      <p>News feeds, real-time market data, customer real-time chat, and portfolio management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Portfolio;

