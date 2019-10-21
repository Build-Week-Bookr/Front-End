import * as types from '../state/actionTypes';

// Counter test:
const initialCount = 0;
export function countReducer(count=initialCount, action) {
    switch (action.type) {
        case types.INCREMENT:
            return count + 1;
        case types.DECREMENT:
            return count -1;
        default:
            return count;
    }

}

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
}