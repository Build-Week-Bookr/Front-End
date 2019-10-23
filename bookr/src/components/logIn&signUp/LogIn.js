import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../state/actionCreators';
import {Link} from 'react-router-dom'

export function LogIn(props) {
	const {logInFormChange, logInValues, logIn} = props;

	const onInputChange = event => {
		logInFormChange(event.target)
	}

	const onLogInSubmit = event => {
		event.preventDefault();
		logIn(logInValues)
	}

	return (
		<div>
			<form onSubmit={onLogInSubmit}>
				<div>
					<input name='username' type='text' placeholder='Username'
					value={logInValues.username}
					onChange={onInputChange} />
					
				</div>
				<div>
					<input name='password' type='password' placeholder='Password'
					value={logInValues.password}
					onChange={onInputChange} />
				</div>
				<button>Login</button>
			</form>
			<p>Don't have an account with us yet?
				 <Link to='/signup'>Sign Up here</Link>
			</p>
		</div>
	)
}

export default connect(
	state => state,
	actionCreators,
)(LogIn)