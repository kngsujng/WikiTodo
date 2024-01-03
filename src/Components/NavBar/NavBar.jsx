import React, { useContext, useEffect } from 'react';
import { ThemeModeContext } from './../../Context/ThemeModeProvider';
import * as S from './NavBar.style';
import { FiSun, FiMoon } from 'react-icons/fi';
import { LuListTodo } from 'react-icons/lu';
import User from '../User/User';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import ScrapStatus from '../ScrapStatus/ScrapStatus';

export default function NavBar() {
	const { themeMode, setThemeMode, toggleTheme } = useContext(ThemeModeContext);
	const { user, logout } = useAuthContext();
	const navigate = useNavigate();

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
					<LuListTodo size="1.5rem" />
					<h1
						onClick={() => {
							navigate('/main');
						}}
					>
						Wiki-Todo
					</h1>
				</div>
				<div className="btn_wrapper">
					<button
						className="btn_toggle"
						onClick={() => toggleTheme()}
					>
						{themeMode === 'light' ? <FiMoon /> : <FiSun />}
					</button>
					{user && (
						<Link to="/scrap">
							<ScrapStatus />
						</Link>
					)}
					{user && <User user={user} />}
					{!user && (
						<button
							className="btn_login"
							onClick={() => navigate('/login')}
						>
							Login
						</button>
					)}
					{user && (
						<button
							className="btn_logout"
							onClick={() => {
								logout();
								navigate('/');
							}}
						>
							Logout
						</button>
					)}
				</div>
			</S.NavWrapper>
		</>
	);
}
