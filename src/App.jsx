import Main from './Pages/Main/Main';
import Router from './Router';
import GlobalStyle from './Style/GlobalStyle';
import { useState } from 'react';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router />
		</>
	);
}

export default App;
