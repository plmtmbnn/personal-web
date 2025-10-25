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

// ============================================
// OPTION 1: Top Header Bar with Logo
// ============================================
export const TopHeaderNavbar = () => {
	const location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl py-3"
					: "bg-transparent py-6"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link
						to="/"
						className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
					>
						PT
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-1">
						{navItems.map(({ to, icon: Icon, label, color }) => {
							const isActive = location.pathname === to;
							return (
								<Link
									key={to}
									to={to}
									className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
										isActive ? "text-white" : "text-gray-400 hover:text-white"
									}`}
								>
									{isActive && (
										<div
											className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg opacity-20`}
										></div>
									)}
									<div className="relative flex items-center gap-2">
										<Icon className="w-5 h-5" />
										<span className="text-sm font-medium">{label}</span>
									</div>
									{isActive && (
										<div
											className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${color} rounded-full`}
										></div>
									)}
								</Link>
							);
						})}
					</nav>

					{/* Mobile Menu Button */}
					<button className="md:hidden p-2 text-gray-400 hover:text-white">
						<HiMenu className="w-6 h-6" />
					</button>
				</div>
			</div>
		</header>
	);
};

// ============================================
// OPTION 2: Sidebar Navigation
// ============================================
export const SidebarNavbar = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile Toggle */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden fixed top-4 left-4 z-50 p-3 bg-gray-800 rounded-xl text-white shadow-xl"
			>
				{isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
			</button>

			{/* Sidebar */}
			<aside
				className={`fixed top-0 left-0 h-screen bg-gray-900/95 backdrop-blur-xl border-r border-gray-700/50 shadow-2xl z-40 transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
				} w-20 md:w-20 lg:w-64`}
			>
				<div className="flex flex-col h-full py-8">
					{/* Logo */}
					<Link to="/" className="px-6 mb-12 text-center lg:text-left">
						<span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							PT
						</span>
					</Link>

					{/* Navigation */}
					<nav className="flex-1 px-3 space-y-2">
						{navItems.map(({ to, icon: Icon, label, color }) => {
							const isActive = location.pathname === to;
							return (
								<Link
									key={to}
									to={to}
									className={`group relative flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 ${
										isActive ? "text-white" : "text-gray-400 hover:text-white"
									}`}
								>
									{isActive && (
										<div
											className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl opacity-20`}
										></div>
									)}
									<Icon className="w-6 h-6 relative z-10 flex-shrink-0" />
									<span className="text-sm font-medium relative z-10 hidden lg:block">
										{label}
									</span>
									{isActive && (
										<div
											className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${color} rounded-r-full`}
										></div>
									)}
								</Link>
							);
						})}
					</nav>
				</div>
			</aside>

			{/* Overlay for mobile */}
			{isOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black/50 z-30"
					onClick={() => setIsOpen(false)}
				></div>
			)}
		</>
	);
};

// ============================================
// OPTION 3: Dock Style (macOS-like)
// ============================================
export const DockNavbar = () => {
	const location = useLocation();

	return (
		<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
			<div className="relative group">
				{/* Glow effect */}
				<div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

				{/* Dock container */}
				<div className="relative flex gap-3 px-6 py-4 bg-gray-900/90 backdrop-blur-2xl border border-gray-700/50 rounded-3xl shadow-2xl">
					{navItems.map(({ to, icon: Icon, label, color }) => {
						const isActive = location.pathname === to;
						return (
							<Link
								key={to}
								to={to}
								className="group/item relative"
								title={label}
							>
								<div
									className={`relative w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 ${
										isActive
											? "scale-110 -translate-y-2"
											: "scale-100 hover:scale-110 hover:-translate-y-2"
									}`}
								>
									{isActive ? (
										<div
											className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl shadow-lg`}
										></div>
									) : (
										<div className="absolute inset-0 bg-gray-800/60 rounded-2xl"></div>
									)}
									<Icon
										className={`w-7 h-7 relative z-10 ${isActive ? "text-white" : "text-gray-400 group-hover/item:text-white"}`}
									/>
								</div>
								{/* Label on hover */}
								<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
									{label}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

// ============================================
// OPTION 4: Minimal Dots Navigation
// ============================================
export const DotsNavbar = () => {
	const location = useLocation();

	return (
		<nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
			<div className="flex flex-col gap-4 p-4 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-full shadow-2xl">
				{navItems.map(({ to, label, color }) => {
					const isActive = location.pathname === to;
					return (
						<Link key={to} to={to} className="group relative" title={label}>
							<div
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									isActive
										? `bg-gradient-to-r ${color} scale-125`
										: "bg-gray-600 hover:bg-gray-400 hover:scale-110"
								}`}
							></div>
							{/* Label */}
							<div className="absolute right-8 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
								{label}
							</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

// ============================================
// OPTION 5: Compact Bottom Bar
// ============================================
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
