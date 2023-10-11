import { createContext, useState } from 'react';
import { darkTheme, lightTheme } from '../Style/GlobalTheme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeModeContext = createContext();

export function ThemeModeProvider({ children }) {
	const [themeMode, setThemeMode] = useState('light');
	const toggleTheme = () => {
		const newTheme = themeMode === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', newTheme);
		setThemeMode(newTheme);
	};
	return (
		<ThemeModeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
			<StyledProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
				{children}
			</StyledProvider>
		</ThemeModeContext.Provider>
	);
}
