import { ThemeModeProvider } from './Context/ThemeModeProvider';
import Main from './Pages/Main/Main';
import GlobalStyle from './Style/GlobalStyle';

function App() {
	return (
		<ThemeModeProvider>
			<GlobalStyle />
			<Main />
		</ThemeModeProvider>
	);
}

export default App;
