import { ThemeModeProvider } from './Context/ThemeModeProvider';
import GlobalStyle from './Style/GlobalStyle';
import { Router } from './Routes/Router';
import AuthContextProvider from './Context/AuthContext';
import { TodoProvider } from './Context/TodoContext';

function App() {
	return (
		<AuthContextProvider>
			<ThemeModeProvider>
				<TodoProvider>
					<GlobalStyle />
					<Router />
				</TodoProvider>
			</ThemeModeProvider>
		</AuthContextProvider>
	);
}

export default App;
