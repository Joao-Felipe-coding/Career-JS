import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Global style
import "./styles/global.css";

//Components
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Menu } from "./components/Menu";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
