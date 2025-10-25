import { useEffect, useState } from "react";

const Loader = () => {
	const [dots, setDots] = useState("");

	// Dynamic dot animation
	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev.length < 3 ? `${prev}.` : ""));
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			{/* Loader Content */}
			<div className="relative z-10 flex flex-col items-center gap-8">
				{/* Main Loader Animation */}
				<div className="relative">
					{/* Outer Ring */}
					<div className="w-24 h-24 rounded-full border-2 border-gray-700/30 absolute inset-0"></div>

					{/* Spinning Gradient Ring */}
					<div className="w-24 h-24 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>

					{/* Inner Pulse Circle */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
					</div>

					{/* Center Dot */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50 animate-pulse"></div>
					</div>

					{/* Orbiting Dots */}
					<div
						className="absolute inset-0 animate-spin"
						style={{ animationDuration: "3s" }}
					>
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400"></div>
					</div>
					<div
						className="absolute inset-0 animate-spin"
						style={{ animationDuration: "3s", animationDelay: "1s" }}
					>
						<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
					</div>
				</div>

				{/* Loading Text */}
				<div className="text-center space-y-2">
					<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
						Loading{dots}
					</h3>
					<p className="text-gray-400 text-sm">Preparing your experience</p>
				</div>

				{/* Progress Bar */}
				<div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
					<div
						className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
						style={{
							width: "100%",
							animation: "loading-progress 2s ease-in-out infinite",
						}}
					></div>
				</div>
			</div>

			{/* Inline Keyframes */}
			<style>{`
				@keyframes loading-progress {
					0% {
						transform: translateX(-100%);
					}
					50% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(100%);
					}
				}

				.delay-1000 {
					animation-delay: 1s;
				}
			`}</style>
		</div>
	);
};

export default Loader;
