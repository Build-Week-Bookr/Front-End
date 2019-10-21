import * as types from '../state/actionTypes';

// Counter test:
export function incrementCount() {
    return { type: types.INCREMENT }
}
export function decrementCount() {
    return { type: types.DECREMENT }
}

// Books: