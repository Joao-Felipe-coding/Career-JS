import React from "react";

//Components
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./styled";

function Login() {
	return (
		<Container>
			<Title>
				Login
				<small>Oie</small>
			</Title>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</Paragraph>
			<button type="button">Enviar</button>
		</Container>
	);
}
export default Login;
