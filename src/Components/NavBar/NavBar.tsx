import { useContext, useEffect } from 'react';
import { ThemeModeContext } from '../../Context/ThemeModeProvider';
import * as S from './NavBar.style';
import { FiSun, FiMoon } from 'react-icons/fi';
import { LuListTodo } from 'react-icons/lu';
import User from '../User/User';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import ScrapStatus from '../ScrapStatus/ScrapStatus';
import { ThemeMode } from '../../Model/theme';

export default function NavBar() {
	const { themeMode, setThemeMode, toggleTheme } = useContext(ThemeModeContext);
	const { user, logout } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', themeMode);
		} else {
			const storedTheme = localStorage.getItem('theme');
			setThemeMode(storedTheme as ThemeMode);
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
								window.location.reload();
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
