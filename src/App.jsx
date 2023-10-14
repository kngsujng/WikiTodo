import Layout from './Components/Layout/Layout';
import { ThemeModeProvider } from './Context/ThemeModeProvider';
import Main from './Pages/Main/Main';
import GlobalStyle from './Style/GlobalStyle';

function App() {
	return (
		<ThemeModeProvider>
			<GlobalStyle />
			<Layout>
				<Main />
			</Layout>
		</ThemeModeProvider>
	);
}

export default App;
