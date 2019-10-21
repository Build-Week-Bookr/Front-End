import * as types from '../state/actionTypes';

export function incrementCount() {
    return {
        type: types.INCREMENT
    }
}

export function decrementCount() {
    return {
        type: types.DECREMENT
    }
}