import * as types from '../state/actionTypes';

const initialCount = 0;

export function countReducer(count = initialCount, action) {
	switch (action.type) {
		case types.INCREMENT:
			return count + 1;
		case types.DECREMENT:
			return count - 1;
		default:
			return count;
	}

}

const initialFormState = {
	username: '',
	password: ''
}

export function signUpReducer(state = initialFormState, action) {
	switch (action.type) {
		case types.ON_INPUT_CHANGE:
			return {
				...state,
				[action.payload.name]: action.payload.value
			}
		case types.POST_SIGN_UP:
			return {
				...state, 
				username: action.payload,
				password: action.payload
			}
			default:
				return state;
	}
}