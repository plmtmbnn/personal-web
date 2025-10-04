import { Fade, Slide } from "react-awesome-reveal";
import { GrDeploy } from "react-icons/gr";
import { LiaRunningSolid } from "react-icons/lia";
import profileImage from "/profile.jpg";
import CountdownNumber from "../useCountdown";

const experienceYears = new Date().getFullYear() - 2018;

const Home = () => (
	<section
		id="home"
		className="min-h-screen lg:h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-12 xl:px-20 py-8 sm:py-12 lg:py-6 relative overflow-hidden"
	>
		{/* Subtle background patterns */}
		<div className="absolute inset-0">
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
			<div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
		</div>

		<div className="w-full max-w-none xl:max-w-7xl 2xl:max-w-full 2xl:px-32 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-8 lg:gap-16 xl:gap-20 items-center relative z-10">
			{/* Enhanced Avatar */}
			<Fade delay={100} triggerOnce>
				<div className="flex justify-center lg:justify-start xl:justify-center">
					<div className="relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
						<img
							src={profileImage}
							alt="Polma Tambunan"
							className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-full shadow-2xl border-2 border-gray-700 object-cover group-hover:border-gray-600 transition-colors duration-300"
						/>
						{/* Online indicator */}
						<div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-5 h-5 lg:w-8 lg:h-8 bg-green-500 rounded-full border-3 border-gray-900 animate-pulse"></div>
					</div>
				</div>
			</Fade>

			{/* Enhanced Text Content */}
			<div className="lg:col-span-4 xl:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10 text-left lg:text-left xl:text-left">
				<Fade delay={150} triggerOnce>
					<div className="space-y-4 lg:space-y-6">
						<div className="flex items-center gap-2 text-gray-400 text-sm lg:text-base font-medium tracking-wider uppercase">
							<div className="w-8 lg:w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
							Software Engineer
						</div>

						<h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-4xl 2xl:text-4xl font-bold text-white leading-tight">
							Hi 🌏, I'm{" "}
							<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
								Polma Tambunan
							</span>
							.
						</h1>

						<div className="w-20 lg:w-32 h-1 lg:h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
					</div>
				</Fade>

				<Fade delay={350} triggerOnce>
					<p className="text-lg sm:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl text-gray-300 max-w-4xl leading-relaxed">
						For the past{" "}
						<span className="text-blue-400 font-semibold">
							{experienceYears}+ years
						</span>
						, I've been building secure, scalable, and impactful
						software—primarily in the{" "}
						<span className="text-purple-400 font-semibold">fintech space</span>
						. From lending platforms to digital identity systems, I bring
						engineering focus to critical business needs.
					</p>
				</Fade>

				{/* Enhanced Stats Cards */}
				<Slide direction="up" delay={450} triggerOnce>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6">
						<div className="group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative flex items-center gap-4 lg:gap-6 p-6 lg:p-8 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
								<div className="p-3 lg:p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg">
									<GrDeploy className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
								</div>
								<div>
									<p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
										<CountdownNumber to={experienceYears} duration={1000} />+
										Years
									</p>
									<p className="text-gray-400 text-sm lg:text-base">
										Software Development
									</p>
								</div>
							</div>
						</div>

						<div className="group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative flex items-center gap-4 lg:gap-6 p-6 lg:p-8 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
								<div className="p-3 lg:p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-lg">
									<LiaRunningSolid className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
								</div>
								<div>
									<p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
										<CountdownNumber to={1000} duration={2000} />+ KM
									</p>
									<p className="text-gray-400 text-sm lg:text-base">
										Running per year
									</p>
								</div>
							</div>
						</div>
					</div>
				</Slide>
			</div>
		</div>

		{/* Scroll indicator */}
		<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
			<div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center">
				<div className="w-1 h-2 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
			</div>
		</div>
	</section>
);

export default Home;
