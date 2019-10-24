import * as types from '../state/actionTypes';

// Form state:
const initialFormState = {
	username: '',
	password: ''
}

export function signUpReducer(state = initialFormState, action) {
	switch (action.type) {
		case types.ON_SIGN_UP_INPUT_CHANGE:
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

export function logInReducer(state = initialFormState, action) {
	switch (action.type) {
		case types.ON_LOGIN_INPUT_CHANGE:
			return {
				...state, 
				[action.payload.name]: action.payload.value
			}
		case types.POST_LOGIN_DATA:
			return {
				...state,
				username: action.payload,
				password: action.payload
			}
			default:
				return state;
	}
}

// Books state:
const initialBooks = [];
export function booksReducer(books = initialBooks, action) {
    switch(action.type) {
		case types.FETCH_BOOKS:
			return action.payload;
		case types.ADD_BOOK:
			return [...books, action.payload];
		case types.DELETE_BOOK:
			return action.payload;
        default:
            return books;
    }
}

const initialBook = null;
export function bookReducer(book = initialBook, action) {
	switch(action.type) {
		case types.FETCH_BOOK:
			return action.payload;
		case types.CLEAR_BOOK:
			return null;
		default:
			return book;
	}
}

const initialReviews = [];
export function reviewsReducer(reviews = initialReviews, action) {
    switch(action.type) {
			case types.ADD_REVIEW:
			return [...reviews, ...action.payload]	
		case types.FETCH_REVIEWS:
			return action.payload;
		case types.ADD_REVIEW:
			return [...reviews, ...action.payload]	
		case types.CLEAR_REVIEWS:
			return null;
        default:
            return reviews;
    }
}

const initialUser = null;
export function userReducer(user = initialUser, action) {
	switch(action.type) {
		case types.FETCH_USER:
			return action.payload;
		default:
			return user;
	}
}

const initialAuthedUserId = null;
export function authedUserIdReducer(authedUserId = initialAuthedUserId, action) {
	switch(action.type) {
		case types.SET_AUTHED_USER_ID:
			return action.payload;
		default:
			return authedUserId;
	}
}

// Modal state:
const initialModalState = {
	triggered: false,
	message: "",
}
export function modalReducer(modalState = initialModalState, action) {
	switch(action.type) {
		case types.TRIGGER_MODAL:
			return {
				triggered: true,
				message: action.payload,
			}
		case types.KILL_MODAL:
			return initialModalState;
		default:
			return modalState;
	}
}