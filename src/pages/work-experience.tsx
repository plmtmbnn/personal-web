import { Fade, Slide } from "react-awesome-reveal";
import { FaChartLine, FaCode, FaRocket, FaTrophy } from "react-icons/fa";
import {
	HiAcademicCap,
	HiBriefcase,
	HiCalendar,
	HiLocationMarker,
	HiSparkles,
	HiTrendingUp,
} from "react-icons/hi";

interface Experience {
	company: string;
	location: string;
	positions: Position[];
	description: string;
	achievements?: string[];
	color: string;
	icon: JSX.Element;
}

interface Position {
	title: string;
	period: string;
	responsibilities: string[];
	highlights?: string[];
}

const experiences: Experience[] = [
	{
		company: "RELIID (PT Relianceintegrasi Dunia Anda)",
		location: "Indonesia – Remote",
		positions: [
			{
				title: "Head of Engineering",
				period: "October 2024 - Present",
				responsibilities: [
					"Direct all technology strategy, architecture, and engineering operations across multiple large-scale fintech and enterprise platforms",
					"Lead engineering strategy and product development focusing on scalable fintech and enterprise systems",
					"Oversee maintenance and enhancement of Loan Origination System (LOS) and Loan Management System (LMS) across holding subsidiaries",
					"Direct development of new version of 'RELIID' mobile app, integrating multiple products into a single ecosystem",
				],
				highlights: [
					"Architect 'Relipay' - group-wide payment system with top-up, bank transfers, and QRIS payments",
					"Supervise 'RELI Invest' development - community platform with feeds, CMS, and event management",
					"Built Bank Statement Extractor for major Indonesian banks (BCA, BRI, BNI, CIMB, Permata)",
					"Developed OCR API for Indonesian KTP extraction for KYC automation",
				],
			},
		],
		description: "Technology Solution Company",
		color: "from-blue-500 to-cyan-500",
		icon: <FaRocket className="w-full h-full" />,
	},
	{
		company: "Finsoft (PT. Solutif Teknologi Indonesia)",
		location: "Indonesia – Remote",
		positions: [
			{
				title: "Chief Technology Officer",
				period: "April 2023 - October 2024",
				responsibilities: [
					"Directed all technology strategy, architecture, and engineering operations across multiple large-scale fintech and enterprise platforms",
					"Oversaw full development lifecycle of comprehensive lending ecosystem (LOS & LMS)",
					"Directed creation of Insurance Platform supporting policy generation, billing, and claims management",
					"Spearheaded SIAPPS - massive community platform for GP Ansor Organization (5M+ members)",
				],
				highlights: [
					"🏆 Winner of World CIO 200 Summit 2024 (Indonesia Edition, Next-Gen Category)",
					"Led team building complete fintech ecosystem with eKYC, underwriting, and disbursement",
					"Integrated multiple banks and payment gateways",
					"Built platforms serving 5M+ users",
				],
			},
		],
		description: "Technology Solution Company",
		color: "from-purple-500 to-pink-500",
		icon: <FaTrophy className="w-full h-full" />,
	},
	{
		company: "Cooderu (PT. Cakrawala Optimal Deru Edukasi)",
		location: "Remote",
		positions: [
			{
				title: "Co-founder & CEO / Lead Instructor",
				period: "January 2022 - December 2023",
				responsibilities: [
					"Founded and led fully remote technology bootcamp with intensive 3-month programs",
					"Designed entire curriculum covering JavaScript, Node.js, React.js, REST APIs, databases, and cloud fundamentals",
					"Managed operations, student admissions, marketing, and mentor coordination",
					"Taught core backend and frontend modules with hands-on coding and real project-based learning",
				],
			},
		],
		description: "Self-Founded EdTech Startup",
		color: "from-orange-500 to-red-500",
		icon: <HiAcademicCap className="w-full h-full" />,
	},
	{
		company: "Pinjam Modal (PT Finansial Integrasi Teknologi)",
		location: "Tangerang, Indonesia (Remote)",
		positions: [
			{
				title: "Software Engineering Manager",
				period: "January 2022 - April 2023",
				responsibilities: [
					"Lead cross-functional engineering team in developing end-to-end digital lending system",
					"Manage sprint planning, code reviews, and system architecture design",
					"Collaborate with product and business teams to define technical strategy",
					"Mentor and coach junior developers",
				],
				highlights: [
					"🏆 Recognized as Best Mentor 2021 for technical guidance and leadership excellence",
				],
			},
			{
				title: "Senior Full Stack Developer",
				period: "October 2020 - January 2022",
				responsibilities: [
					"Designed and implemented major system modules for lending platform",
					"Integrated APIs for KYC verification, credit scoring, and payment gateways",
					"Enhanced backend performance optimizing PostgreSQL queries and Node.js microservices",
					"Supported frontend development using React.js and Next.js",
				],
			},
			{
				title: "Full Stack Developer",
				period: "September 2018 - October 2020",
				responsibilities: [
					"Developed and maintained first-generation loan management system using Node.js, React, and PostgreSQL",
					"Built internal dashboards for loan tracking, user management, and financial reporting",
				],
				highlights: [
					"🏆 Recognized as Best Employee 2020 for outstanding technical performance and teamwork",
				],
			},
		],
		description: "Fintech Company",
		color: "from-emerald-500 to-teal-500",
		icon: <FaChartLine className="w-full h-full" />,
	},
];

const WorkExperience = () => {
	return (
		<section className="min-h-screen bg-gray-900 px-4 sm:px-6 py-16 lg:py-20 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Header */}
				<div className="text-center mb-16 lg:mb-20">
					<Fade delay={200} triggerOnce>
						<div className="flex items-center justify-center gap-3 mb-4">
							<HiBriefcase className="w-8 h-8 text-blue-400 animate-pulse" />
							<span className="text-blue-300 text-sm font-medium tracking-wider uppercase">
								Professional Journey
							</span>
							<HiSparkles className="w-8 h-8 text-purple-400 animate-pulse delay-300" />
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight mb-4">
							Work Experience
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
						<p className="text-gray-300 text-lg max-w-2xl mx-auto">
							7+ years of building scalable fintech solutions and leading
							engineering teams
						</p>
					</Fade>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform sm:-translate-x-1/2 hidden sm:block"></div>

					{/* Mobile Timeline Line */}
					<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 sm:hidden"></div>

					{/* Timeline Items */}
					<div className="space-y-12 lg:space-y-16">
						{experiences.map((exp, expIdx) => (
							<Fade key={expIdx} delay={300 + expIdx * 100} triggerOnce>
								<div
									className={`relative ${expIdx % 2 === 0 ? "sm:ml-0" : "sm:ml-auto"} sm:w-[calc(50%-2rem)]`}
								>
									{/* Timeline Dot */}
									<div
										className={`absolute left-8 sm:left-auto ${expIdx % 2 === 0 ? "sm:-right-[2.6rem]" : "sm:-left-[2.6rem]"} top-0 transform -translate-x-1/2 sm:translate-x-0 z-20`}
									>
										<div
											className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} p-1 shadow-lg`}
										>
											<div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center p-3">
												<div
													className={`text-white w-full h-full flex items-center justify-center`}
												>
													{exp.icon}
												</div>
											</div>
										</div>
										{/* Pulsing Ring */}
										<div
											className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-20 animate-ping`}
										></div>
									</div>

									{/* Content Card */}
									<div
										className={`ml-24 sm:ml-0 ${expIdx % 2 === 0 ? "sm:pr-16" : "sm:pl-16"}`}
									>
										<Slide
											direction={expIdx % 2 === 0 ? "right" : "left"}
											triggerOnce
										>
											<div className="group relative">
												{/* Glowing Border */}
												<div
													className={`absolute -inset-1 bg-gradient-to-br ${exp.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}
												></div>

												<div className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 lg:p-8 hover:border-gray-600 transition-all duration-300">
													{/* Company Header */}
													<div className="mb-6">
														<h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
															{exp.company}
														</h3>
														<div
															className={`w-16 h-1 bg-gradient-to-r ${exp.color} rounded-full mb-3`}
														></div>
														<p className="text-gray-400 text-sm mb-2">
															{exp.description}
														</p>
														<div className="flex items-center gap-2 text-gray-400 text-sm">
															<HiLocationMarker className="w-4 h-4" />
															<span>{exp.location}</span>
														</div>
													</div>

													{/* Positions */}
													<div className="space-y-6">
														{exp.positions.map((pos, posIdx) => (
															<div
																key={posIdx}
																className={`${posIdx > 0 ? "pt-6 border-t border-gray-700/50" : ""}`}
															>
																{/* Position Title & Period */}
																<div className="mb-4">
																	<div className="flex items-start justify-between flex-wrap gap-2 mb-2">
																		<h4 className="text-xl font-bold text-white">
																			{pos.title}
																		</h4>
																		<div className="flex items-center gap-2 text-gray-400 text-sm">
																			<HiCalendar className="w-4 h-4" />
																			<span>{pos.period}</span>
																		</div>
																	</div>
																</div>

																{/* Responsibilities */}
																<div className="space-y-3 mb-4">
																	{pos.responsibilities.map((resp, respIdx) => (
																		<div
																			key={respIdx}
																			className="flex items-start gap-3 text-gray-300 text-sm"
																		>
																			<div
																				className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
																			></div>
																			<p>{resp}</p>
																		</div>
																	))}
																</div>

																{/* Highlights */}
																{pos.highlights &&
																	pos.highlights.length > 0 && (
																		<div
																			className={`mt-4 p-4 bg-gradient-to-br ${exp.color} bg-opacity-5 rounded-xl border border-gray-700/30`}
																		>
																			<div className="flex items-center gap-2 mb-3">
																				<HiTrendingUp
																					className={`w-4 h-4 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
																				/>
																				<p className="text-white font-semibold text-sm">
																					Key Achievements
																				</p>
																			</div>
																			<div className="space-y-2">
																				{pos.highlights.map(
																					(highlight, hIdx) => (
																						<div
																							key={hIdx}
																							className="flex items-start gap-2 text-gray-300 text-sm"
																						>
																							<span>•</span>
																							<p>{highlight}</p>
																						</div>
																					),
																				)}
																			</div>
																		</div>
																	)}
															</div>
														))}
													</div>

													{/* Additional Achievements */}
													{exp.achievements && exp.achievements.length > 0 && (
														<div
															className={`mt-6 p-4 bg-gradient-to-br ${exp.color} bg-opacity-5 rounded-xl border border-gray-700/30`}
														>
															<div className="space-y-2">
																{exp.achievements.map((achievement, aIdx) => (
																	<div
																		key={aIdx}
																		className="flex items-start gap-2 text-gray-300 text-sm"
																	>
																		<span>⭐</span>
																		<p>{achievement}</p>
																	</div>
																))}
															</div>
														</div>
													)}
												</div>
											</div>
										</Slide>
									</div>
								</div>
							</Fade>
						))}
					</div>
				</div>

				{/* Summary Stats */}
				<Fade delay={800} triggerOnce>
					<div className="mt-20 pt-12 border-t border-gray-700/50">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{[
								{
									number: "7+",
									label: "Years Experience",
									icon: <HiBriefcase />,
									color: "text-blue-400",
								},
								{
									number: "4",
									label: "Companies",
									icon: <HiLocationMarker />,
									color: "text-purple-400",
								},
								{
									number: "3",
									label: "Awards Won",
									icon: <FaTrophy />,
									color: "text-yellow-400",
								},
								{
									number: "5M+",
									label: "Users Impacted",
									icon: <FaCode />,
									color: "text-emerald-400",
								},
							].map((stat, index) => (
								<div
									key={index}
									className="p-6 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group text-center"
								>
									<div className={`flex justify-center mb-3 ${stat.color}`}>
										<div className="w-8 h-8">{stat.icon}</div>
									</div>
									<p
										className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
									>
										{stat.number}
									</p>
									<p className="text-gray-400 text-sm">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default WorkExperience;
