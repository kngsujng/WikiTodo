import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './SignUp.style';
import { signupEmail } from '../../Api/firebase';
import { useInputWithValidation } from '../../Hooks/useInputWithValidation';

export default function Signup() {
	const {
		value: { email, pwd, confirmPwd },
		errorMsg: { emailErr, pwdErr, etcErr },
		isBtnActive,
		onChange,
		onInputReset,
		setErrorMsg,
	} = useInputWithValidation({
		email: '',
		pwd: '',
		confirmPwd: '',
	});
	const [isVisible, setIsVisible] = useState({ pwd: false, confirmPwd: false });

	const navigate = useNavigate();

	const handleSignupBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const result = await signupEmail(email, pwd);
		if (result === 'auth/email-already-in-use') {
			setErrorMsg((prev) => ({
				...prev,
				etcErr:
					'✔︎ 이미 사용중인 이메일 주소입니다. 다른 이메일을 사용해주세요.',
			}));
			setTimeout(onInputReset, 3000);
		} else {
			navigate('/main');
		}
	};

	return (
		<>
			<S.Container>
				<S.SignUpFormWrapper>
					<header>
						<h1>회원가입</h1>
					</header>
					<form>
						<label htmlFor="inp_email">Email</label>
						<input
							required
							type="text"
							name="email"
							id="inp_email"
							value={email}
							onChange={onChange}
						/>
						<p className="errorTxt">{emailErr}</p>
						<>
							<label htmlFor="inp_pwd">Password</label>
							<S.InpPwdWrapper>
								<input
									required
									type={isVisible.pwd ? 'text' : 'password'}
									name="pwd"
									id="inp_pwd"
									value={pwd}
									onChange={onChange}
								/>
								<button
									type="button"
									onClick={() =>
										setIsVisible({ ...isVisible, pwd: !isVisible.pwd })
									}
								>
									{isVisible ? (
										<FaEyeSlash size="18px" />
									) : (
										<FaEye size="18px" />
									)}
								</button>
							</S.InpPwdWrapper>
							<p className="errorTxt">{pwdErr}</p>
						</>
						<>
							<label htmlFor="inp_pwdCheck">Confirm password</label>
							<S.InpPwdWrapper>
								<input
									required
									type={isVisible.confirmPwd ? 'text' : 'password'}
									name="confirmPwd"
									id="inp_pwdCheck"
									value={confirmPwd}
									onChange={onChange}
								/>
								<button
									type="button"
									onClick={() =>
										setIsVisible({
											...isVisible,
											confirmPwd: !isVisible.confirmPwd,
										})
									}
								>
									{isVisible.confirmPwd ? (
										<FaEyeSlash size="18px" />
									) : (
										<FaEye size="18px" />
									)}
								</button>
							</S.InpPwdWrapper>
							<p className="errorTxt">{etcErr}</p>
						</>
						<S.BtnWrapper>
							<button
								disabled={!isBtnActive}
								onClick={handleSignupBtn}
							>
								회원가입
							</button>
						</S.BtnWrapper>
					</form>
					<S.LinkWrapper>
						<p>계정이 이미 있으신가요?</p>
						<Link to="/login">로그인 바로가기</Link>
					</S.LinkWrapper>
				</S.SignUpFormWrapper>
			</S.Container>
		</>
	);
}
