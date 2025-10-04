import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import { HiArrowLeft, HiExclamationCircle, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => (
	<section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-center relative overflow-hidden">
		{/* Background Effects */}
		<div className="absolute inset-0">
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
			<div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
		</div>

		<div className="relative z-10 max-w-2xl mx-auto">
			{/* 404 Number with Glitch Effect */}
			<JackInTheBox triggerOnce>
				<div className="relative">
					<h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text tracking-tight select-none">
						404
					</h1>
					{/* Glitch layers */}
					<h1 className="absolute top-0 left-0 text-8xl sm:text-9xl lg:text-[12rem] font-black text-red-500/20 tracking-tight animate-pulse transform translate-x-1 translate-y-1 select-none">
						404
					</h1>
					<h1 className="absolute top-0 left-0 text-8xl sm:text-9xl lg:text-[12rem] font-black text-blue-500/20 tracking-tight animate-pulse transform -translate-x-1 -translate-y-1 delay-75 select-none">
						404
					</h1>
				</div>
			</JackInTheBox>

			{/* Error Icon */}
			<Fade delay={300} triggerOnce>
				<div className="flex justify-center mb-6">
					<div className="p-4 bg-red-500/20 rounded-full border border-red-500/30">
						<HiExclamationCircle className="w-12 h-12 text-red-400" />
					</div>
				</div>
			</Fade>

			{/* Title and Description */}
			<Slide direction="up" delay={400} triggerOnce>
				<div className="space-y-4 mb-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-white">
						Oops! Page Not Found
					</h2>
					<p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto">
						The page you're looking for seems to have vanished into the digital
						void. Don't worry though, even the best developers get lost
						sometimes.
					</p>
				</div>
			</Slide>

			{/* Action Buttons */}
			<Slide direction="up" delay={600} triggerOnce>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link
						to="/"
						className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
					>
						<HiHome className="w-5 h-5 group-hover:animate-bounce" />
						<span>Back to Home</span>
					</Link>

					<button
						onClick={() => window.history.back()}
						className="group flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-300"
					>
						<HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
						<span>Go Back</span>
					</button>
				</div>
			</Slide>

			{/* Fun Stats */}
			<Fade delay={800} triggerOnce>
				<div className="mt-12 pt-8 border-t border-gray-700/50">
					<p className="text-gray-400 text-sm mb-4">Fun Fact</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
						<div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
							<p className="text-2xl font-bold text-blue-400">404</p>
							<p className="text-gray-400 text-xs">Status Code</p>
						</div>
						<div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
							<p className="text-2xl font-bold text-purple-400">1995</p>
							<p className="text-gray-400 text-xs">First 404 Error</p>
						</div>
						<div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
							<p className="text-2xl font-bold text-red-400">∞</p>
							<p className="text-gray-400 text-xs">Possibilities</p>
						</div>
					</div>
				</div>
			</Fade>

			{/* Easter Egg Message */}
			<Fade delay={1000} triggerOnce>
				<div className="mt-8">
					<p className="text-gray-500 text-xs italic">
						"There are only 10 types of people: those who understand binary and
						those who don't." 🤖
					</p>
				</div>
			</Fade>
		</div>

		{/* Floating Elements */}
		<div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
		<div className="absolute top-1/3 right-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
		<div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-bounce delay-700"></div>
		<div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
	</section>
);

export default NotFound;
