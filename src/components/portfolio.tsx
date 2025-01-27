import { Zoom, Fade, JackInTheBox } from 'react-awesome-reveal';

const Portfolio = () => (
  <div
    id="portfolio"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out p-4"
  >
    <div className="max-w-4xl">
      <JackInTheBox delay={200}><h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        Portfolio
      </h2></JackInTheBox>
      <Fade delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Zoom delay={200}>
            <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
            LOS and LMS for Financial Companies
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
            Developed and implemented Loan Origination System (LOS) and Loan
            Management System (LMS) solutions for three companies. These
            systems encompass borrower onboarding, EKYC processes, underwriting
            systems, auto disbursement, and seamless auto repayment integration
            with payment gateways.
              </p>
            </div>
          </Zoom>
          <Zoom delay={500}>
            <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Community App for Religious Organization
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
            Created a comprehensive app for one of Indonesia's largest
            religious organizations. The app includes features such as
            membership cards, job connection services, cadre management, and a
            built-in social media platform to enhance community engagement.
              </p>
            </div>
          </Zoom>
        </div>
      </Fade>
    </div>
  </div>
);

export default Portfolio;
