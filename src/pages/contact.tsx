import { Fade, JackInTheBox, Zoom } from "react-awesome-reveal";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChatAlt2, HiSparkles } from "react-icons/hi";

// Contact Links Data
const contactLinks = [
	{
		href: "mailto:plmtmbnn@gmail.com",
		label: "Email",
		Icon: FaEnvelope,
		gradient: "from-red-500 to-orange-500",
		description: "plmtmbnn@gmail.com",
		bgGradient: "from-red-500/20 to-orange-500/20",
	},
	{
		href: "https://www.linkedin.com/in/polma-tambunan/",
		label: "LinkedIn",
		Icon: FaLinkedin,
		gradient: "from-blue-500 to-cyan-500",
		description: "Connect professionally",
		bgGradient: "from-blue-500/20 to-cyan-500/20",
	},
	{
		href: "https://github.com/plmtmbnn",
		label: "GitHub",
		Icon: FaGithub,
		gradient: "from-gray-600 to-gray-800",
		description: "Check out my code",
		bgGradient: "from-gray-600/20 to-gray-800/20",
	},
];

const Contact = () => (
	<section
		id="contact"
		className="min-h-screen lg:h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-8 sm:py-12 lg:py-6 relative overflow-hidden"
	>
		{/* Background Effects */}
		<div className="absolute inset-0">
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
			<div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
			<div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
		</div>

		<div className="max-w-5xl w-full text-center space-y-8 lg:space-y-12 relative z-10">
			{/* Section Header */}
			<div className="space-y-4 lg:space-y-6">
				<JackInTheBox delay={200} triggerOnce>
					<div className="flex items-center justify-center gap-3 mb-4">
						<HiChatAlt2 className="w-7 h-7 lg:w-8 lg:h-8 text-blue-400 animate-pulse" />
						<span className="text-blue-300 text-sm font-medium tracking-wider uppercase">
							Get In Touch
						</span>
						<HiSparkles className="w-7 h-7 lg:w-8 lg:h-8 text-purple-400 animate-pulse delay-300" />
					</div>
					<h2 className="text-5xl sm:text-6xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
						Let's Connect!
					</h2>
				</JackInTheBox>
			</div>

			{/* Subtitle */}
			<Fade delay={300} triggerOnce>
				<p className="text-xl lg:text-md text-gray-300 max-w-2xl mx-auto leading-relaxed">
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your vision.
				</p>
			</Fade>

			{/* Contact Links Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12">
				{contactLinks.map(
					({ href, label, Icon, gradient, description, bgGradient }, index) => (
						<Zoom
							key={label}
							delay={400 + index * 100}
							duration={700}
							triggerOnce
						>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visit my ${label}`}
								className="group relative block"
							>
								{/* Glowing border effect */}
								<div
									className={`absolute -inset-1 bg-gradient-to-r ${bgGradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}
								></div>

								<div className="relative h-full p-8 lg:p-10 bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 flex flex-col items-center justify-center">
									{/* Icon */}
									<div
										className={`p-5 bg-gradient-to-br ${gradient} rounded-2xl shadow-xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
									>
										<Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
									</div>

									{/* Label */}
									<h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
										{label}
									</h3>

									{/* Description */}
									<p className="text-gray-400 text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300">
										{description}
									</p>

									{/* Hover indicator */}
									<div className="mt-6 flex items-center gap-2 text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
										<span className="text-sm font-medium">
											Click to connect
										</span>
										<svg
											className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>

									{/* Bottom accent line */}
									<div
										className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
									></div>
								</div>
							</a>
						</Zoom>
					),
				)}
			</div>
		</div>
	</section>
);

export default Contact;
