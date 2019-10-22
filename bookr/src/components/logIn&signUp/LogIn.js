import React from 'react';

export default function LogIn() {

	return (
		<div>
			<form>
				<div>
					<input name='username' type='text' placeholder='Username' />
				</div>
				<div>
					<input name='passowrd' type='password' placeholder='Password' />
				</div>
				<button>Login</button>
			</form>
			<p>Don't have an account with us yet? Sign Up here</p>
		</div>
	)
}