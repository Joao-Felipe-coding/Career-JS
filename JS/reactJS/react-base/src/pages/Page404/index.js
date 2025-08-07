import { useNavigate } from "react-router-dom";
import { Container404, Title, SubTitle } from "./styled";

export default function Page404() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<Container404>
			<Title>Página não encontrada</Title>
			<SubTitle>
				A página que você está procurando não foi encontrada. Verifique se o
				endereço está correto ou volte para a tela inicial para continuar
				navegando.
			</SubTitle>
			<button type="button" onClick={handleGoHome}>
				Voltar para a tela inicial
			</button>
		</Container404>
	);
}
