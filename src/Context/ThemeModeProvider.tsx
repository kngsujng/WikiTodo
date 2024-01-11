import React, { ReactNode, createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from '../Style/GlobalTheme';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeMode } from '../Model/theme';

interface ThemeContextType {
	themeMode: ThemeMode;
	setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
	toggleTheme: () => void;
}

const defaultTheme: ThemeContextType = {
	themeMode: 'light',
	setThemeMode: () => null,
	toggleTheme: () => null,
};

export const ThemeModeContext = createContext<ThemeContextType>(defaultTheme);

const ThemeModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [themeMode, setThemeMode] = useState<ThemeMode>('light');
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
};

export const useThemeContext = () => {
	return useContext(ThemeModeContext);
};

export default ThemeModeProvider;
