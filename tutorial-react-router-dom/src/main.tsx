import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Global style
import "./styles/global.css";

//Components
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { Redirect } from "./components/Redirect";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/posts" element={<Post />} />
				<Route path="/posts/:id" element={<Post />} />
				<Route path="/redirect" element={<Redirect />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
