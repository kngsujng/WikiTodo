import React, { useContext, useEffect, useState } from 'react';
import { ThemeModeContext } from './../../Context/ThemeModeProvider';
import * as S from './NavBar.style';
import { LuListTodo } from 'react-icons/lu';
import { login, logout, ouUserStateChange } from '../../Api/firebase';

export default function NavBar() {
	const { themeMode, setThemeMode, toggleTheme } = useContext(ThemeModeContext);
	const [user, setUser] = useState();
	useEffect(() => {
		ouUserStateChange(setUser);
	}, []);

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', themeMode);
		} else {
			// 새로고침해도 로컬스토리지 데이터 보이기 위해선, 저장해야 함 ! (핵심)
			const storedTheme = localStorage.getItem('theme');
			setThemeMode(storedTheme);
		}
	}, [themeMode, setThemeMode]);
	return (
		<>
			<S.NavWrapper>
				<div>
					<LuListTodo style={{ fontSize: '1.5rem' }} />
					<h1>Wiki-Todo</h1>
				</div>
				<div>
					<button
						className="btn_toggle"
						onClick={() => toggleTheme()}
					>
						{themeMode === 'light' ? '🌚' : '🌞'}
					</button>
					{!user && (
						<button
							className="btn_login"
							onClick={login}
						>
							Login
						</button>
					)}
					{user && (
						<button
							className="btn_login"
							onClick={logout}
						>
							Logout
						</button>
					)}
				</div>
			</S.NavWrapper>
		</>
	);
}
