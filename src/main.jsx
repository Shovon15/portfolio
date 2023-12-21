import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);
