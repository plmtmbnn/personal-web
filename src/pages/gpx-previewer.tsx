import * as toGeoJSON from "@tmcw/togeojson";
import * as turf from "@turf/turf";
import L from "leaflet";
import { useEffect, useRef, useState } from "react";

interface GPXStats {
	distance: number;
	elevationGain: number;
	duration: number;
	avgSpeed: number;
}

export default function GPXActivityViewer() {
	const [fileName, setFileName] = useState<string | null>(null);
	const [stats, setStats] = useState<GPXStats | null>(null);
	const [loading, setLoading] = useState(false);
	const [geojson, setGeojson] = useState<any>(null);
	const mapRef = useRef<L.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement | null>(null);

	// init map once
	useEffect(() => {
		if (mapContainerRef.current && !mapRef.current) {
			mapRef.current = L.map(mapContainerRef.current, {
				zoomControl: true,
			}).setView([0, 0], 2);

			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "&copy; OpenStreetMap contributors",
			}).addTo(mapRef.current);
		}
	}, []);

	// render geojson on map
	useEffect(() => {
		if (geojson && mapRef.current) {
			const layer = L.geoJSON(geojson, {
				style: { color: "#2563eb", weight: 3 },
			}).addTo(mapRef.current);

			mapRef.current.fitBounds(layer.getBounds(), { padding: [30, 30] });

			return () => {
				mapRef.current?.removeLayer(layer);
			};
		}
	}, [geojson]);

	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setLoading(true);
		setFileName(file.name);

		try {
			const text = await file.text();
			const parser = new DOMParser();
			const xml = parser.parseFromString(text, "application/xml");
			const converted = toGeoJSON.gpx(xml);
			setGeojson(converted);

			const stats = calculateStats(converted);
			console.log(stats, converted);

			setStats(stats);
		} catch (err) {
			console.error("Error parsing GPX:", err);
			alert("Failed to parse GPX file");
		} finally {
			setLoading(false);
		}
	};

	const calculateStats = (geojsonData: any): GPXStats => {
		if (!geojsonData?.features?.length) {
			return { distance: 0, elevationGain: 0, duration: 0, avgSpeed: 0 };
		}

		const line = geojsonData.features.find(
			(f: any) => f.geometry.type === "LineString",
		);
		if (!line)
			return { distance: 0, elevationGain: 0, duration: 0, avgSpeed: 0 };

		const distance = turf.length(line, { units: "kilometers" });
		const coords = line.geometry.coordinates;

		// elevation gain
		let elevationGain = 0;
		for (let i = 1; i < coords.length; i++) {
			const prev = coords[i - 1][2] || 0;
			const curr = coords[i][2] || 0;
			if (curr > prev) elevationGain += curr - prev;
		}

		// extract timestamps (robustly)
		const times: number[] = [];

		// 1️⃣ from properties.coordTimes (most common)
		if (line.properties?.coordTimes?.length) {
			line.properties.coordTimes.forEach((t: string) => {
				const ts = Date.parse(t);
				if (!isNaN(ts)) times.push(ts);
			});
		}

		// 2️⃣ fallback: scan all features for coordTimes
		if (times.length === 0) {
			geojsonData.features.forEach((f: any) => {
				f.properties?.coordTimes?.forEach((t: string) => {
					const ts = Date.parse(t);
					if (!isNaN(ts)) times.push(ts);
				});
			});
		}

		// 3️⃣ fallback: parse from GPX manually if needed (rare case)
		if (times.length === 0) {
			const timeNodes = geojsonData.xml?.getElementsByTagName("time");
			if (timeNodes && timeNodes.length > 1) {
				for (let i = 0; i < timeNodes.length; i++) {
					const ts = Date.parse(timeNodes[i].textContent || "");
					if (!isNaN(ts)) times.push(ts);
				}
			}
		}

		const duration =
			times.length > 1 ? (Math.max(...times) - Math.min(...times)) / 1000 : 0;
		const avgSpeed = duration > 0 ? distance / (duration / 3600) : 0;

		return {
			distance: Number(distance.toFixed(2)),
			elevationGain: Number(elevationGain.toFixed(0)),
			duration: Number(duration.toFixed(0)),
			avgSpeed: Number(avgSpeed.toFixed(2)),
		};
	};

	const formatTime = (seconds: number) => {
		if (!seconds) return "0s";
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = Math.floor(seconds % 60);
		return `${h}h ${m}m ${s}s`;
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
			<div className="w-full max-w-3xl bg-white rounded-2xl shadow p-4 sm:p-6 space-y-4">
				<h1 className="text-2xl font-bold text-center text-gray-800">
					GPX Activity Viewer
				</h1>

				<div className="flex flex-col sm:flex-row justify-center items-center gap-3">
					<input
						type="file"
						accept=".gpx"
						onChange={handleFileUpload}
						className="block text-sm text-gray-700 bg-gray-100 rounded-lg border border-gray-300 p-2 cursor-pointer hover:bg-gray-200"
					/>
					{fileName && <p className="text-gray-500 text-sm">{fileName}</p>}
				</div>

				<div
					ref={mapContainerRef}
					className="w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden"
				></div>

				{loading && (
					<p className="text-center text-gray-500">Loading GPX data...</p>
				)}

				{stats && (
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4">
						<div className="bg-blue-50 rounded-lg p-3">
							<p className="text-sm text-gray-500">Distance</p>
							<p className="font-semibold text-blue-700">{stats.distance} km</p>
						</div>
						<div className="bg-green-50 rounded-lg p-3">
							<p className="text-sm text-gray-500">Elevation Gain</p>
							<p className="font-semibold text-green-700">
								{stats.elevationGain} m
							</p>
						</div>
						<div className="bg-yellow-50 rounded-lg p-3">
							<p className="text-sm text-gray-500">Duration</p>
							<p className="font-semibold text-yellow-700">
								{formatTime(stats.duration)}
							</p>
						</div>
						<div className="bg-purple-50 rounded-lg p-3">
							<p className="text-sm text-gray-500">Avg Speed</p>
							<p className="font-semibold text-purple-700">
								{stats.avgSpeed} km/h
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
