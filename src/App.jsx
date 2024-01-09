import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeModeProvider } from './Context/ThemeModeProvider';
import GlobalStyle from './Style/GlobalStyle';
import { Router } from './Routes/Router';
import AuthContextProvider from './Context/AuthContext';
import { TodoProvider } from './Context/TodoContext';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<ThemeModeProvider>
					<TodoProvider>
						<GlobalStyle />
						<Router />
					</TodoProvider>
				</ThemeModeProvider>
			</AuthContextProvider>
		</QueryClientProvider>
	);
}

export default App;
