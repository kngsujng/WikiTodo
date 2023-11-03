import { ThemeModeProvider } from './Context/ThemeModeProvider';
import GlobalStyle from './Style/GlobalStyle';
import { Router } from './Routes/Router';

function App() {
	return (
		<ThemeModeProvider>
			<GlobalStyle />
			<Router />
		</ThemeModeProvider>
	);
}

export default App;
