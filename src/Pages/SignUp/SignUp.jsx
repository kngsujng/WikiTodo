import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './SignUp.style';
import { signupEmail } from '../../Api/firebase';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [confirmPwd, setConfirmPwd] = useState('');
	const [emailError, setEmailError] = useState('');
	const [pwdError, setPwdError] = useState('');
	const [confirmPwdError, setConfirmPwdError] = useState('');
	const [isVisiblePwd, setIsVisiblePwd] = useState(false);
	const [isVisibleConfirmPwd, setIsVisibleConfirmPwd] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const navigate = useNavigate();

	function handleInputEmail(e) {
		const emailPattern =
			/^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
		if (emailPattern.test(e.target.value) === false)
			setEmailError('✔︎ 이메일 형식이 올바르지 않습니다.');
		else setEmailError('');
		setEmail(e.target.value);
	}

	function handleInputPwd(e) {
		const pwdPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
		if (pwdPattern.test(e.target.value) === false)
			setPwdError(
				'✔︎ 영문, 숫자, 특수기호를 조합하여 8자리 이상 입력해주세요.'
			);
		else setPwdError('');
		setPwd(e.target.value);
	}

	function handleInputConfirmPwd(e) {
		if (pwd !== e.target.value)
			setConfirmPwdError('✔︎ 비밀번호가 일치하지 않습니다.');
		else setConfirmPwdError('');
		setConfirmPwd(e.target.value);
	}

	const handleSignupBtn = async (e) => {
		e.preventDefault();
		const result = await signupEmail(email, pwd);
		if (result === 'auth/email-already-in-use') {
			setEmailError(
				'✔︎ 이미 사용중인 이메일 주소입니다. 다른 이메일을 사용해주세요.'
			);
		} else {
			setEmailError('');
			navigate('/');
		}
	};

	useEffect(() => {
		if (email === '') {
			setEmailError('');
		}
		if (pwd === '') {
			setPwdError('');
		}
		if (confirmPwd === '') {
			setConfirmPwdError('');
		}
		if (
			email !== '' &&
			pwd !== '' &&
			confirmPwd !== '' &&
			!emailError &&
			!pwdError &&
			!confirmPwdError
		) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email, pwd, confirmPwd, emailError, pwdError, confirmPwdError]);

	useEffect(() => {
		setIsDisabled(true);
	}, []);

	return (
		<>
			<S.Container>
				<S.SignUpFormWrapper>
					<header>
						<h1>Join us !</h1>
					</header>
					<form>
						<label htmlFor="inp_email">Email</label>
						<input
							required
							type="text"
							id="inp_email"
							value={email}
							onChange={handleInputEmail}
						/>
						<p className="errorTxt">{emailError}</p>
						<>
							<label htmlFor="inp_pwd">Password</label>
							<S.InpPwdWrapper>
								<input
									required
									type={isVisiblePwd ? 'text' : 'password'}
									id="inp_pwd"
									value={pwd}
									onChange={handleInputPwd}
								/>
								<button
									type="button"
									onClick={() => setIsVisiblePwd((prev) => !prev)}
								>
									{isVisiblePwd ? (
										<FaEyeSlash size="18px" />
									) : (
										<FaEye size="18px" />
									)}
								</button>
							</S.InpPwdWrapper>
							<p className="errorTxt">{pwdError}</p>
						</>
						<>
							<label htmlFor="inp_pwdCheck">Confirm password</label>
							<S.InpPwdWrapper>
								<input
									required
									type={isVisibleConfirmPwd ? 'text' : 'password'}
									id="inp_pwdCheck"
									value={confirmPwd}
									onChange={handleInputConfirmPwd}
								/>
								<button
									type="button"
									onClick={() => setIsVisibleConfirmPwd((prev) => !prev)}
								>
									{isVisibleConfirmPwd ? (
										<FaEyeSlash size="18px" />
									) : (
										<FaEye size="18px" />
									)}
								</button>
							</S.InpPwdWrapper>
							<p className="errorTxt">{confirmPwdError}</p>
						</>
						<S.BtnWrapper>
							<button
								disabled={isDisabled}
								onClick={handleSignupBtn}
							>
								Sign up
							</button>
						</S.BtnWrapper>
					</form>
					<S.LinkWrapper>
						<p>Already have any account?</p>
						<Link to="/login">Sign in</Link>
					</S.LinkWrapper>
				</S.SignUpFormWrapper>
			</S.Container>
		</>
	);
}
