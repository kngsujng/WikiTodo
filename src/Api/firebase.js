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
import { get, getDatabase, ref, remove, set, update } from 'firebase/database';

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
	return await createUserWithEmailAndPassword(auth, email, pwd).catch(
		(error) => error.code
	);
}

// Email 로그인
export async function emailLogin(email, password) {
	return await signInWithEmailAndPassword(auth, email, password).catch(
		(error) => error.code
	);
}

export function logout() {
	signOut(auth).catch(console.error);
}

export function getUserInfo(callback) {
	onAuthStateChanged(auth, (user) => {
		callback(user);
	});
}

export async function addNewTodo(userId, todoItem) {
	set(ref(database, `todoList/${userId}/${todoItem.id}`), {
		...todoItem,
	});
}

export async function getTodos(userId) {
	return get(ref(database, `todoList/${userId}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				return Object.values(snapshot.val());
			}
			return [];
		})
		.catch(console.error);
}

export function editTodo(userId, todoItem) {
	const { id: todoId } = todoItem;
	const todoToUpdate = {};
	todoToUpdate[`/todoList/${userId}/${todoId}`] = todoItem;
	return update(ref(database), todoToUpdate);
}

export function deleteTodo(userId, todoItem) {
	const { id: todoId } = todoItem;
	return remove(ref(database, `todoList/${userId}/${todoId}`));
}

// function removeAllTodos(){
//   return remove(ref(database, 'todoList'));
// }
