import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

import "leaflet/dist/leaflet.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</HelmetProvider>
	</StrictMode>,
);
