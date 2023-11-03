import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import { FcGoogle } from 'react-icons/fc';
import { login, signinEmail } from '../../Api/firebase';

export default function Login() {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		pwd: '',
	});
	const [loginError, setLoginError] = useState({
		email: '',
		pwd: '',
		etc: '',
	});
	const [isBtnActive, setIsBtnActive] = useState(false);
	const [isRequired, setIsRequired] = useState(true);
	const navigate = useNavigate();

	const handleInputHandle = (e) => {
		const { name, value } = e.target;
		setLoginInfo((prev) => ({ ...prev, [name]: value }));

		// 이메일 로그인 유효성 검사
		if (name === 'email') {
			const emailPattern =
				/^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
			const errorMsg = emailPattern.test(value)
				? ''
				: '✔︎ 이메일 형식이 올바르지 않습니다.';
			setLoginError((prev) => value && { ...prev, [name]: errorMsg });
		}
		// 비밀번호 로그인 유효성 검사
		if (name === 'pwd') {
			const pwdPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
			const errorMsg = pwdPattern.test(value)
				? ''
				: '✔︎ 영문, 숫자, 특수기호를 조합하여 8자리 이상 입력해주세요.';
			setLoginError((prev) => value && { ...prev, [name]: errorMsg });
		}
	};

	const handleGoogleLoginBtn = async (e) => {
		e.preventDefault();
		setIsRequired(false);
		await login();
		navigate('/');
	};

	const handleEmailLoginBtn = async (e) => {
		e.preventDefault();
		const result = await signinEmail(loginInfo.email, loginInfo.pwd);
		if (result === 'auth/invalid-login-credentials') {
			setLoginError((prev) => ({
				...prev,
				etc: '✔︎ 아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.',
			}));
			setTimeout(() => {
				setLoginError({ email: '', pwd: '', etc: '' });
			}, 4000);
			setLoginInfo({ email: '', pwd: '' });
		} else {
			console.log('성공적으로 이메일 로그인함');
			navigate('/');
		}
	};

	useEffect(() => {
		if (
			loginError.email ||
			loginError.pwd ||
			!loginInfo.email ||
			!loginInfo.pwd
		) {
			setIsBtnActive(false);
		} else {
			setIsBtnActive(true);
		}
	}, [loginInfo, loginError]);

	return (
		<>
			<S.Container>
				<S.LoginFormWrapper>
					<header>
						<h1>Welcome!</h1>
						<p>Please enter your details.</p>
					</header>
					<form>
						<label htmlFor="inp_email">Email</label>
						<input
							required={isRequired}
							type="text"
							placeholder="Enter your email"
							id="inp_email"
							name="email"
							value={loginInfo.email ?? ''}
							onChange={handleInputHandle}
						/>
						<p className="errorTxt">{loginError.email}</p>
						<label htmlFor="inp_pwd">Password</label>
						<input
							required={isRequired}
							type="password"
							placeholder="Enter your password"
							id="inp_pwd"
							name="pwd"
							value={loginInfo.pwd ?? ''}
							onChange={handleInputHandle}
						/>
						<p className="errorTxt">{loginError.pwd}</p>
						<div className="wrap_loginKeep">
							<input
								type="checkbox"
								id="saveInfo"
							/>
							<label htmlFor="saveInfo">Remember for 30 days</label>
						</div>
						{loginError.etc && <p className="errorTxt">{loginError.etc}</p>}
						<S.BtnWrapper>
							<h2 className="screen-out">
								이메일을 통한 로그인 버튼과 구글계정을 통한 로그인 버튼
							</h2>
							<button
								className="emailLogin"
								disabled={!isBtnActive}
								onClick={handleEmailLoginBtn}
							>
								Sign in
							</button>
							<button
								className="googleLogin"
								onClick={handleGoogleLoginBtn}
							>
								<FcGoogle />
								Sign in with Google
							</button>
						</S.BtnWrapper>
					</form>
					<S.LinkWrapper>
						<p>Don't have an account?</p>
						<Link to="/signup">Sign up for free</Link>
					</S.LinkWrapper>
				</S.LoginFormWrapper>
			</S.Container>
		</>
	);
}
