import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../state/actionCreators';

export function SignUp(props) {
	const {signUpFormChange, signUpValues, signUp} = props;

	const onInputChange = event => {
		signUpFormChange(event.target)
	}

	const onSignUpSubmit = event => {
		event.preventDefault();
		signUp(signUpValues)
	}

	return (
		<div>
			<form onSubmit={onSignUpSubmit}>
				<div>
					<input name='username' type='text' placeholder='Username' 
					value={signUpValues.username}
					onChange={onInputChange}/>
				</div>
				<div>
					<input name='password' type='password' placeholder='Password'
						value={signUpValues.password}
						onChange={onInputChange} />
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	)
}

export default connect(
	state => state,
	actionCreators,
)(SignUp)