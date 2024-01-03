import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import {
	child,
	get,
	getDatabase,
	push,
	ref,
	remove,
	set,
	update,
} from 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase();

// Google 로그인
export async function googleLogin() {
	return signInWithPopup(auth, provider).catch(console.error);
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
export async function emailLogin(email, password) {
	return await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential);
		})
		.catch((error) => error.code);
}

export function logout() {
	signOut(auth).catch(console.error);
}

export function getUserInfo(callback) {
	onAuthStateChanged(auth, (user) => {
		callback(user);
	});
}

export async function addNewTodo(todoItem) {
	const { id } = todoItem;
	set(ref(database, `todoList/${id}`), {
		...todoItem,
	});
}

export async function getTodos() {
	return get(ref(database, 'todoList'))
		.then((snapshot) => {
			if (snapshot.exists()) {
				return Object.values(snapshot.val());
			}
			return [];
		})
		.catch(console.error);
}

export function editTodo(todoItem) {
	const { id } = todoItem;
	const updates = {};
	updates['/todoList/' + id] = todoItem;
	return update(ref(database), updates);
}

// function removeAllTodos(){
//   return remove(ref(database, 'todoList'));
// }
