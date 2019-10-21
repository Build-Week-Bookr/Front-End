import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Counter(props) {
const {count, incrementCount, decrementCount} = props;
    return (
        <div>
            The count is {count}
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
} 

export default connect(
    state => state,
    actionCreators,
)(Counter)