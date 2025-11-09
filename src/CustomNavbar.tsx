import { useEffect, useState } from "react";
import { FaRegAddressCard, FaUserNinja } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";
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
		to: "/work-experience",
		icon: FaUserNinja,
		label: "Experience",
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

export const CompactBottomBar = () => {
	const location = useLocation();

	return (
		<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
			<div className="flex items-center gap-1 px-2 py-3 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-full shadow-2xl">
				{navItems.map(({ to, icon: Icon, label, color }) => {
					const isActive = location.pathname === to;
					return (
						<Link
							key={to}
							to={to}
							className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
								isActive ? `bg-gradient-to-r ${color}` : "hover:bg-gray-800"
							}`}
							title={label}
						>
							<Icon
								className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
							/>
							{isActive && (
								<span className="text-white text-sm font-medium hidden sm:block">
									{label}
								</span>
							)}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

// Export default (choose which one you want as default)
export default CompactBottomBar;
