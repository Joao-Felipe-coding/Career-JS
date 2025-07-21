//Pages
import Login from "./pages/Login";

//Styles
import GlobalStyle from "./styles/GlobalStyles";

//Components
import Header from "../src/components/Header";

function App() {
	return (
		<>
			<Header />
			<Login />
			<GlobalStyle />
		</>
	);
}

export default App;
