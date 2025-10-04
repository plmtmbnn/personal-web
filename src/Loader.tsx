import { useEffect, useState } from "react";

const Loader = () => {
	const [_dots, setDots] = useState("");

	// Dynamic dot animation for "serving..."
	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev.length < 3 ? `${prev}.` : ""));
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="loading">
			<svg width="64px" height="48px">
				<polyline
					points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
					id="back"
				></polyline>
				<polyline
					points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
					id="front"
				></polyline>
			</svg>
		</div>
	);
};

export default Loader;
