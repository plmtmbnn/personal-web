import * as toGeoJSON from "@tmcw/togeojson";
import * as turf from "@turf/turf";
import L from "leaflet";
import { useEffect, useRef, useState } from "react";
import { FaBolt, FaMountain, FaRoute, FaRunning } from "react-icons/fa";
import {
	HiChartBar,
	HiClock,
	HiTrendingUp,
	HiUpload,
	HiX,
} from "react-icons/hi";
import {
	Area,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface GPXStats {
	distance: number;
	elevationGain: number;
	duration: number;
	avgSpeed: number;
	avgPace: number;
	elevationData: { x: number; y: number }[];
}

// Helper to calculate haversine distance (meters)
const haversineDistance = (
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number,
): number => {
	const R = 6371e3; // metres
	const phi1 = (lat1 * Math.PI) / 180;
	const phi2 = (lat2 * Math.PI) / 180;
	const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
	const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

	const a =
		Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
		Math.cos(phi1) *
			Math.cos(phi2) *
			Math.sin(deltaLambda / 2) *
			Math.sin(deltaLambda / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return R * c; // in meters
};

export default function GPXActivityViewer() {
	const [fileName, setFileName] = useState<string | null>(null);
	const [stats, setStats] = useState<GPXStats | null>(null);
	const [geojson, setGeojson] = useState<any>(null);
	const mapRef = useRef<L.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const layerRef = useRef<L.GeoJSON | null>(null);

	/** 🗺️ Initialize Leaflet Map */
	useEffect(() => {
		if (mapRef.current || !mapContainerRef.current) return;
		mapRef.current = L.map(mapContainerRef.current, {
			zoomControl: true,
			preferCanvas: true,
		}).setView([0, 0], 2);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution: "&copy; OpenStreetMap contributors",
		}).addTo(mapRef.current);
	}, []);

	/** 📍 Render GeoJSON route on map */
	useEffect(() => {
		if (!geojson || !mapRef.current) return;
		if (layerRef.current) mapRef.current.removeLayer(layerRef.current);

		const layer = L.geoJSON(geojson, {
			// Pass the original geojson
			style: {
				color: "#10b981",
				weight: 3,
				opacity: 0.9,
			},
			// You can also add point to layer functionality here if needed for markers/waypoints
		}).addTo(mapRef.current);

		layerRef.current = layer;
		mapRef.current.fitBounds(layer.getBounds(), { padding: [30, 30] });
	}, [geojson]);

	/** 📤 Handle file upload */
	const handleFileUpload = async (file: File | null) => {
		if (!file) return;
		setFileName(file.name);

		const text = await file.text();
		const xml = new DOMParser().parseFromString(text, "application/xml");
		const converted = toGeoJSON.gpx(xml);
		// Pass the raw coordinate data to the stats extraction for accurate elevation calculation
		const stats = extractStatsFromGPX(xml, converted);
		setGeojson(converted);
		setStats(stats);
	};

	/** 🧮 Extract stats from GPX */
	const extractStatsFromGPX = (xml: Document, geojsonData: any): GPXStats => {
		// [lat, lon, ele, time(ms)]
		const points: [number, number, number, number][] = Array.from(
			xml.getElementsByTagName("trkpt"),
		).map((pt) => {
			const lat = parseFloat(pt.getAttribute("lat") || "0");
			const lon = parseFloat(pt.getAttribute("lon") || "0");
			// Find 'ele' tag - use optional chaining and nullish coalescing
			const ele = parseFloat(
				pt.getElementsByTagName("ele")[0]?.textContent || "0",
			);
			const timeStr = pt.getElementsByTagName("time")[0]?.textContent;
			const time = timeStr ? new Date(timeStr).getTime() : 0;
			return [lat, lon, ele, time];
		});

		// 1️⃣ Duration
		const validTimes = points.map((c) => c[3]).filter((t) => t > 0);
		const duration =
			validTimes.length > 1
				? (Math.max(...validTimes) - Math.min(...validTimes)) / 1000
				: 0;

		// 2️⃣ Distance (km)
		// Find the LineString feature
		const line = geojsonData.features.find(
			(f: any) => f.geometry.type === "LineString",
		);
		// turf.length automatically uses the 3rd dimension if it exists but it's
		// better to rely on the library to handle basic distance calculation.
		const distance = turf.length(line, { units: "kilometers" });

		// 3️⃣ Elevation gain and data
		let elevationGain = 0;
		const elevationData: { x: number; y: number }[] = [];
		let cumulativeDistanceKm = 0;

		for (let i = 1; i < points.length; i++) {
			const prev = points[i - 1]; // [lat, lon, ele, time]
			const curr = points[i]; // [lat, lon, ele, time]

			const eleDiff = curr[2] - prev[2]; // current elevation - previous elevation (meters)

			// FIX 2: To calculate accurate elevation gain, you need to consider the distance
			// between points to filter out noise (small, frequent, and often erroneous
			// elevation changes in raw GPS data). This is typically done by only
			// accumulating a gain if the change is greater than a **threshold**,
			// e.g., 5-10 meters, or by using smoothing/segmentation.
			// For a simple fix, let's use a 5-meter threshold.
			const elevationThreshold = 5; // meters

			if (eleDiff > elevationThreshold) {
				elevationGain += eleDiff;
			}

			// Calculate cumulative distance for the X-axis of the chart
			const distM = haversineDistance(prev[0], prev[1], curr[0], curr[1]);
			cumulativeDistanceKm += distM / 1000;

			// Use cumulative distance (km) for the X-axis for a more accurate profile
			elevationData.push({ x: cumulativeDistanceKm, y: curr[2] });
		}

		// The first point needs to be added for a complete profile
		if (points.length > 0) {
			elevationData.unshift({ x: 0, y: points[0][2] });
		}

		// 4️⃣ Avg Speed (km/h) & Pace (min/km)
		const avgSpeed = duration > 0 ? distance / (duration / 3600) : 0;
		const avgPace = distance > 0 ? duration / 60 / distance : 0;

		return {
			distance: +distance.toFixed(2),
			elevationGain: Math.round(elevationGain),
			duration,
			avgSpeed: +avgSpeed.toFixed(2),
			avgPace: +avgPace.toFixed(2),
			elevationData,
		};
	};

	const formatTime = (s: number) => {
		if (!s || s <= 0) return "-";
		const h = Math.floor(s / 3600);
		const m = Math.floor((s % 3600) / 60);
		const sec = Math.floor(s % 60);
		return h > 0 ? `${h}h ${m}m` : `${m}m ${sec}s`;
	};

	const formatPace = (minPerKm: number) => {
		if (!minPerKm || minPerKm <= 0) return "-";
		const m = Math.floor(minPerKm);
		const s = Math.round((minPerKm - m) * 60);
		return `${m}:${s.toString().padStart(2, "0")} /km`;
	};

	const reset = () => {
		if (mapRef.current && layerRef.current) {
			mapRef.current.removeLayer(layerRef.current);
		}
		setGeojson(null);
		setStats(null);
		setFileName(null);
	};

	// Recharts custom tooltip to show both distance and elevation
	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload && payload.length) {
			const data = payload[0].payload;
			return (
				<div className="bg-gray-700 p-2 text-white text-sm rounded-md shadow-lg border border-gray-600">
					<p className="font-bold">{`${data.x.toFixed(2)} km`}</p>
					<p className="text-emerald-300">{`${Math.round(data.y)} m`}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col">
			{/* HEADER */}
			<div className="py-8 text-center">
				<div className="flex justify-center items-center gap-2">
					<FaRunning className="text-emerald-400 w-6 h-6" />
					<span className="text-emerald-300 font-semibold uppercase text-sm">
						GPX Activity Viewer
					</span>
				</div>
				<h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
					Visualize Your Run
				</h1>
			</div>

			{/* MAIN */}
			<div className="flex flex-col lg:flex-row gap-6 px-6 pb-10 max-w-6xl mx-auto w-full">
				{/* LEFT: MAP / UPLOAD */}
				<div className="flex-1 bg-gray-800/70 rounded-2xl overflow-hidden">
					{!geojson ? (
						<div className="p-10 text-center border-2 border-dashed border-gray-700">
							<HiUpload className="mx-auto text-emerald-400 w-10 h-10 mb-4" />
							<h2 className="text-xl font-semibold mb-2">
								Drop or Select a GPX file
							</h2>
							<label
								htmlFor="upload"
								className="inline-flex items-center px-6 py-3 bg-emerald-600 rounded-lg hover:bg-emerald-700 cursor-pointer"
							>
								<HiUpload className="mr-2" /> Choose File
							</label>
							<input
								id="upload"
								type="file"
								accept=".gpx"
								onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
								className="hidden"
							/>
						</div>
					) : (
						// Ensure the map container is rendered only when geojson is available
						// to prevent rendering a map over the file upload area.
						<div
							ref={mapContainerRef}
							className="h-[400px] sm:h-[500px] w-full"
						/>
					)}
				</div>

				{/* RIGHT: STATS */}
				{stats && (
					<div className="flex-1 space-y-4">
						<div className="flex justify-between items-center">
							<div>
								<h2 className="font-semibold text-lg">{fileName}</h2>
								<p className="text-gray-400 text-sm">
									Duration: {formatTime(stats.duration)}
								</p>
							</div>
							<button
								onClick={reset}
								className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg"
								aria-label="Remove GPX file"
							>
								<HiX />
							</button>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
							{[
								{
									icon: <FaRoute />,
									label: "Distance",
									value: `${stats.distance} km`,
								},
								{
									icon: <HiClock />,
									label: "Duration",
									value: formatTime(stats.duration),
								},
								{
									icon: <HiTrendingUp />,
									label: "Avg Pace",
									value: formatPace(stats.avgPace),
								},
								{
									icon: <FaBolt />,
									label: "Avg Speed",
									value: `${stats.avgSpeed} km/h`,
								},
								{
									icon: <FaMountain />,
									label: "Elev Gain",
									value: `${stats.elevationGain} m`,
								},
							].map((s, i) => (
								<div
									key={i}
									className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition"
								>
									<div className="text-emerald-400 text-xl mb-1">{s.icon}</div>
									<div className="text-sm text-gray-400">{s.label}</div>
									<div className="text-lg font-semibold">{s.value}</div>
								</div>
							))}
						</div>

						{/* Elevation Chart */}
						{stats.elevationData && stats.elevationData.length > 0 && (
							<div className="bg-gray-800 rounded-xl p-4">
								<p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
									<HiChartBar className="text-emerald-400" /> Elevation Profile
								</p>
								<ResponsiveContainer width="100%" height={200}>
									<AreaChart data={stats.elevationData}>
										{/* X-Axis for Distance (x) */}
										<XAxis
											dataKey="x"
											type="number"
											tickFormatter={(value) => `${value.toFixed(1)} km`}
											stroke="#9ca3af" // gray-400
											fontSize={10}
										/>
										{/* FIX: Make Y-Axis dynamic by removing domain and letting Recharts auto-scale */}
										<YAxis
											dataKey="y"
											type="number"
											// Remove the 'domain' prop to allow auto-scaling based on min/max elevation (y)
											// domain={['auto', 'auto']} // 'auto' is the default if not provided
											tickFormatter={(value) => `${Math.round(value)} m`}
											stroke="#9ca3af" // gray-400
											fontSize={10}
											orientation="right"
										/>
										<Tooltip content={<CustomTooltip />} />
										<Area
											type="monotone"
											dataKey="y"
											stroke="#10b981"
											fill="#10b981"
											fillOpacity={0.4}
											name="Elevation"
										/>
									</AreaChart>
								</ResponsiveContainer>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
