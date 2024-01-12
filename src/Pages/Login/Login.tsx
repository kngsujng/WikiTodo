import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import { FcGoogle } from 'react-icons/fc';
import { googleLogin, emailLogin } from '../../Api/firebase';

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

	const handleInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLoginInfo((prev) => ({ ...prev, [name]: value }));

		// 이메일 로그인 유효성 검사
		if (name === 'email') {
			const emailPattern =
				/^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
			const errorMsg = emailPattern.test(value)
				? ''
				: '✔︎ 이메일 형식이 올바르지 않습니다.';
			setLoginError((prev) => ({ ...prev, [name]: errorMsg }));
		}
		// 비밀번호 로그인 유효성 검사
		if (name === 'pwd') {
			const pwdPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
			const errorMsg = pwdPattern.test(value)
				? ''
				: '✔︎ 영문, 숫자, 특수기호를 조합하여 8자리 이상 입력해주세요.';
			setLoginError((prev) => ({ ...prev, [name]: errorMsg }));
		}
	};
	const handleGoogleLoginBtn = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		setIsRequired(false);
		await googleLogin();
		navigate('/main');
	};

	const handleEmailLoginBtn = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		const result = await emailLogin(loginInfo.email, loginInfo.pwd);
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
			navigate('/main');
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
						<h1>로그인</h1>
						<p>지금 바로 위키투두를 시작하세요 !</p>
					</header>
					<form>
						<label htmlFor="inp_email">Email</label>
						<input
							required={isRequired}
							type="text"
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
							<label htmlFor="saveInfo">로그인 상태 유지</label>
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
								로그인
							</button>
							<button
								className="googleLogin"
								onClick={handleGoogleLoginBtn}
							>
								<FcGoogle />
								구글로 시작하기
							</button>
						</S.BtnWrapper>
					</form>
					<S.LinkWrapper>
						<p>계정이 없으신가요?</p>
						<Link to="/signup">회원가입 바로가기</Link>
					</S.LinkWrapper>
				</S.LoginFormWrapper>
			</S.Container>
		</>
	);
}
