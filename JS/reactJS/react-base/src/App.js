import { ToastContainer } from "react-toastify";

//Styles
import GlobalStyle from "./styles/GlobalStyles";

//Components
import Header from "../src/components/Header";

//Routes
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes />
			<GlobalStyle />
			<ToastContainer autoClose={3000} className="toast-container" />
		</BrowserRouter>
	);
}

export default App;
