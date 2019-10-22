import * as types from '../state/actionTypes';

// Book State:
const initialBooks = [
    {
        id: 1,
        title: "The Beginning of Infinity",
        author: "David Deutsch",
        publisher: "Viking",
    },
    {
        id: 2,
        title: "The Blank Slate",
        author: "Stephen Pinker",
        publisher: "Penguin",
    }
];
export function booksReducer(books = initialBooks, action) {
    switch(action.type) {
        default:
            return books;
    }
}

const initialReviews = [
    {
        reviewer: "Carnun",
        review: "Great book! 10/10 would read again."
    },
    {
        reviewer: "Francis",
        review: "Loved it! Made me think."
    }
];
export function reviewsReducer(reviews = initialReviews, action) {
    switch(action.type) {
        default:
            return reviews;
    }

const initialFormState = {
	username: '',
	password: ''
}

// Form state:
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

export function logInReducer(state = initialFormState, action) {
	switch (action.type) {
		case types.ON_INPUT_CHANGE:
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