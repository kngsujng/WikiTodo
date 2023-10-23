import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();
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
							type="text"
							placeholder="Enter your email"
							id="inp_email"
						/>
						<label htmlFor="inp_pwd">Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							id="inp_pwd"
						/>
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
								disabled={isDisabled}
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
