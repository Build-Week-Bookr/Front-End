import * as types from '../state/actionTypes';
import axios from 'axios';
import axiosWithAuth from "../axios";

// Forms:
export function signUpFormChange(target) {
	return {
		type: types.ON_SIGN_UP_INPUT_CHANGE,
		payload: {
			name: target.name,
			value: target.value
		}
	}
}

const signUpUser = user => {
	return {
		type: types.POST_SIGN_UP,
		payload: user
	}
}

export const signUp = addUser => dispatch => {
	axios
	.post('https://bookr-eu.herokuapp.com/api/auth/register', addUser)
	.then(res => {
		console.log('response', res)
		console.log('user added', addUser)
		localStorage.setItem('token', res.data.token)
		dispatch(signUpUser(res.data.user))
		alert('sign up successful')
		
	})
	.catch(error => {
		console.log('Sign up Error', error)
		alert('error.response.data.message')
	})
}

export function logInFormChange(target) {
	return {
		type: types.ON_LOGIN_INPUT_CHANGE,
		payload: {
			name: target.name,
			value: target.value
		}
	}
}
const logInUser = user => {
	return {
		type: types.POST_LOGIN_DATA,
		payload: user
	}
}
export const logIn = logUser => dispatch => {
	axios.post('https://bookr-eu.herokuapp.com/api/auth/login', logUser)
	.then(res => {
		console.log('submitLogin', res)
		console.log('Log in user', logUser)
		localStorage.setItem('token', res.data.token)
		dispatch(logInUser(res.data.user))
		alert('Login successful')
	})
	.catch(error => {
		console.log('Login Error', error)
		alert(error.response.data.message)
	})
}

// Books:
export const fetchBooks = history => dispatch => {
	axiosWithAuth().get("https://bookr-eu.herokuapp.com/api/books")
		.then(res => {
			const books = res.data;
			dispatch({ 
				type: types.FETCH_BOOKS,
				payload: books, 
			});
		})
		.catch(err => {
			if (err.response.status === 401) {
				alert("Your session has expired. Please log back in.");
				history.push("/");
			} else {
				alert(err.message);
			}
		});
};
export const fetchBook = id => dispatch => {
	axiosWithAuth().get(`https://bookr-eu.herokuapp.com/api/books/${id}`)
		.then(res => {
			const book = res.data;
			dispatch({
				type: types.FETCH_BOOK,
				payload: book,
			})
		})
		.catch(err => {
			alert(err.message);
		});
};
export const clearBook = () => {
	return { type: types.CLEAR_BOOK }
};
export const addBook = formValues => dispatch => {
	const dummyUserId = 1;
	const bookToPost = {
		title: formValues.title,
		author: formValues.author,
		publisher: formValues.publisher,
		synopsis: formValues.synopsis,
		cover_image: formValues.cover_image,
		purchase_url: formValues.purchase_url,
		added_by: dummyUserId,
	}

	axiosWithAuth().post("https://bookr-eu.herokuapp.com/api/books", bookToPost)
		.then(res => {
			const book = res.data;
			dispatch({
				type: types.ADD_BOOK,
				payload: book,
			})
		})
		.catch(err => {
			debugger
		});
}
export const deleteBook = id => dispatch => {
	axiosWithAuth().delete(`https://bookr-eu.herokuapp.com/api/books/${id}`)
		.then(res => {
			const booksSansDeletedBook = res.data;
			dispatch({
				type: types.DELETE_BOOK,
				payload: booksSansDeletedBook,
			});
		})
		.catch(err => {
			debugger
		});
}

export const fetchReviews = id => dispatch => {
	axiosWithAuth().get(`https://bookr-eu.herokuapp.com/api/reviews/book/${id}`)
		.then(res => {
			const reviews = res.data;
			dispatch({
				type: types.FETCH_REVIEWS,
				payload: reviews,
			});
		})
		.catch(err => {
			if (err.response.status === 404) {
				dispatch({
					type: types.FETCH_REVIEWS,
					payload: [],
				});
			}
		});
};
export const clearReviews = () => {
	return { type: types.CLEAR_REVIEWS }
}

export const fetchUser = id => dispatch => {
	axiosWithAuth().get(`https://bookr-eu.herokuapp.com/api/users/${id}`)
		.then(res => {
			dispatch({
				type: types.FETCH_USER,
				payload: res.data,
			});
		})
		.catch(err => {
			debugger
		})
};

// Modal:
export const triggerModal = message => {
	setTimeout(killModal(), 5000);
	return { 
		type: types.TRIGGER_MODAL,
		payload: message,
	}
}
const killModal = () => {
	return { type: types.KILL_MODAL }
}