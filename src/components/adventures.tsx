import { Fade, JackInTheBox, Zoom } from "react-awesome-reveal";

const Adventures = () => (
  <div
    id="adventures"
    className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 transition-all duration-1000 ease-in-out p-4"
  >
    <div className="max-w-4xl">
      <JackInTheBox delay={200}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        Adventures
      </h2>
      </JackInTheBox>
      <Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Zoom delay={200}>
        <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Running Milestone
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Details about your running achievements.
          </p>
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.strava.com/athletes/38682026/activity-summary/84e311c34f606bea25b477bc6aa3e24b84c55e33"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        </Zoom>
        <Zoom delay={500}>
        <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Photography</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Showcase your best photographs.
          </p>
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.instagram.com/p/DBqBiMYzd4D/embed"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        </Zoom>
      </div>
      </Fade>
    </div>
  </div>
);

export default Adventures;
