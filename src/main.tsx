import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</HelmetProvider>
	</StrictMode>,
);
