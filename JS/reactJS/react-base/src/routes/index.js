import { Routes as RouterRoutes, Route } from "react-router-dom";
import { toast } from "react-toastify";

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Routes() {
	toast.success("oii");
	toast.error("oii");
	return (
		<RouterRoutes>
			<Route
				path="/"
				element={
					<MyRoute >
						<Login />
					</MyRoute>
				}
			/>
			<Route
				path="*"
				element={
					<MyRoute>
						<Page404 />
					</MyRoute>
				}
			/>
		</RouterRoutes>
	);
}
