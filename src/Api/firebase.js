import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Google 로그인
export function login() {
	signInWithPopup(auth, provider).catch(console.error);
}

// Email 회원가입
export async function signupEmail(email, pwd) {
	return await createUserWithEmailAndPassword(auth, email, pwd)
		.then((userCredential) => {
			console.log(userCredential);
		})
		.catch((error) => error.code);
}

// Email 로그인
// export async function signinEmail(email, password) {
// 	return await signInWithEmailAndPassword(auth, email, password)
// 		.then((userCredential) => {
// 			console.log(userCredential);
// 		})
// 		.catch((err) => console.log(err));
// }

export function logout() {
	signOut(auth).catch(console.error);
}

export function ouUserStateChange(callback) {
	onAuthStateChanged(auth, (user) => {
		// 콜백함수 전달
		callback(user);
	});
}
