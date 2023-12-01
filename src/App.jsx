import { ThemeModeProvider } from './Context/ThemeModeProvider';
import GlobalStyle from './Style/GlobalStyle';
import { Router } from './Routes/Router';
import AuthContextProvider from './Context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<ThemeModeProvider>
				<GlobalStyle />
				<Router />
			</ThemeModeProvider>
		</AuthContextProvider>
	);
}

export default App;
