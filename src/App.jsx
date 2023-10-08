import { ThemeModeProvider } from './Context/ThemeModeProvider';
import Router from './Router';
import GlobalStyle from './Style/GlobalStyle';

function App() {
	return (
		<ThemeModeProvider>
			<GlobalStyle />
			<Router />
		</ThemeModeProvider>
	);
}

export default App;
