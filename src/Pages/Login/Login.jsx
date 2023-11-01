import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		pwd: '',
	});
	const [loginError, setLoginError] = useState({
		email: '',
		pwd: '',
	});
	const [isBtnActive, setIsBtnActive] = useState(false);
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
				: '✔︎ 비밀번호 형식이 올바르지 않습니다.';
			setLoginError((prev) => value && { ...prev, [name]: errorMsg });
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
							required
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
							required
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
						<S.BtnWrapper>
							<h2 className="screen-out">
								이메일을 통한 로그인 버튼과 구글계정을 통한 로그인 버튼
							</h2>
							<button
								className="emailLogin"
								disabled={!isBtnActive}
							>
								Sign in
							</button>
							<button className="googleLogin">
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
