import { FaRegAddressCard, FaUserNinja } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { TbActivityHeartbeat, TbHomeHeart } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const navItems = [
	{
		to: "/",
		icon: TbHomeHeart,
		label: "Home",
		color: "from-blue-500 to-cyan-500",
	},
	{
		to: "/about",
		icon: FaUserNinja,
		label: "About",
		color: "from-purple-500 to-pink-500",
	},
	{
		to: "/portfolio",
		icon: GrDeploy,
		label: "Portfolio",
		color: "from-indigo-500 to-blue-500",
	},
	{
		to: "/adventures",
		icon: TbActivityHeartbeat,
		label: "Adventures",
		color: "from-emerald-500 to-teal-500",
	},
	{
		to: "/blog",
		icon: PiArticleNyTimesLight,
		label: "Blog",
		color: "from-orange-500 to-red-500",
	},
	{
		to: "/contact",
		icon: FaRegAddressCard,
		label: "Contact",
		color: "from-cyan-500 to-blue-500",
	},
];

const FloatingNavbar = () => {
	const location = useLocation();

	return (
		<nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
			{/* Container with glassmorphism */}
			<div className="relative group">
				{/* Glowing background effect */}
				<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

				{/* Nav container */}
				<div className="relative flex gap-1 sm:gap-2 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl p-2 rounded-2xl">
					{navItems.map(({ to, icon: Icon, label, color }) => {
						const isActive = location.pathname === to;
						return (
							<Link
								key={to}
								to={to}
								aria-label={label}
								className="group/item relative flex items-center justify-center"
							>
								{/* Button container */}
								<div
									className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl transition-all duration-300
                  ${isActive ? "scale-110" : "scale-100 hover:scale-105"}`}
								>
									{/* Active gradient background */}
									{isActive && (
										<div
											className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl shadow-lg`}
										></div>
									)}

									{/* Inactive background */}
									{!isActive && (
										<div className="absolute inset-0 bg-gray-700/50 group-hover/item:bg-gray-700 rounded-xl transition-colors duration-300"></div>
									)}

									{/* Icon */}
									<div
										className={`relative z-10 transition-all duration-300 ${
											isActive
												? "text-white"
												: "text-gray-400 group-hover/item:text-white"
										}`}
									>
										<Icon size={20} className="sm:w-6 sm:h-6" />
									</div>

									{/* Active indicator dot */}
									{isActive && (
										<div className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
									)}
								</div>

								{/* Tooltip */}
								<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-700 shadow-xl">
									{label}
									{/* Tooltip arrow */}
									<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-r border-b border-gray-700 transform rotate-45"></div>
								</div>

								{/* Hover glow effect */}
								{!isActive && (
									<div
										className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl opacity-0 group-hover/item:opacity-20 transition-opacity duration-300`}
									></div>
								)}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default FloatingNavbar;
