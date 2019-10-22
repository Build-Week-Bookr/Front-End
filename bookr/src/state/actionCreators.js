import * as types from '../state/actionTypes';
import axios from 'axios';

export function signUpFormChange(target) {
	return {
		type: types.ON_INPUT_CHANGE,
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
	.post('https://bookr-build-backend.herokuapp.com/api/auth/register', addUser)
	.then(res => {
		console.log('response', res)
		console.log('user added', addUser)
		localStorage.setItem('token', res.data.token)
		dispatch(signUpUser(res.data.user))
	})
	.catch(error => {
		console.log('Sign up Error', error)
	})
}

export function logInFormChange(target) {
	return {
		type: types.ON_INPUT_CHANGE,
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
	axios.post('https://bookr-build-backend.herokuapp.com/api/auth/register', logUser)
	.then(res => {
		console.log('submitLogin', res)
		console.log('Log in user', logUser)
		localStorage.setItem('token', res.data.token)
		dispatch(logInUser(res.data.user))
	})
	.catch(error => {
		console.log('Login Error', error)
	})
}
