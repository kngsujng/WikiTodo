import { createContext, useState } from 'react';
import { darkTheme, lightTheme } from '../Style/GlobalTheme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeModeContext = createContext();

export function ThemeModeProvider({ children }) {
	const [themeMode, setThemeMode] = useState('light');
	// const themeObject = themeMode === 'light' ? lightTheme : darkTheme;
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

// export function DarkModeProvider({ children }) {
// 	const [darkMode, setDarkMode] = useState(false);
// 	const toggleDarkMode = () => setDarkMode((mode) => !mode);
// 	return (
// 		// Consumer : 값 전달 -> useContext로 더 쉽게 전달 가능
// 		// Provider : 값 변경
// 		<DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode }}>
// 			{children}
// 		</DarkModeContext.Provider>
// 	);
// }
