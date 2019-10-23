import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../state/actionCreators';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const validationSchema = yup.object().shape({
	username: yup.string()
	.required('A username is required')
	.min(3, 'Name must be 3 characters or longer'),

	password: yup.string()
	.min(6, 'Password must be at least 6 characters')
	.required('A password is required'),
})

export function LogIn(props) {
	const {logIn} = props;

	const onLogInSubmit = logInValues => {
		logIn(logInValues)
		alert('Login successful')
		props.history.push('/books')

	}

	return (
		<Formik
		validationSchema={validationSchema}
		onSubmit={onLogInSubmit}
		render={props => {
			return (
<div>
			<Form>
			<div>
				<Field type="username" name="username" placeholder='Username'/>
          <ErrorMessage name="username" component="div" />
				</div>
				<div>
          <Field type="password" name="password" placeholder='Password' />
          <ErrorMessage name="password" component="div" />
				</div>
          <button type="submit">Login</button>
			</Form>
			<p>Don't have an account with us yet?
				 <Link to='/signup'>Sign Up here</Link>
			</p>
		</div>
			)
		}}
		/>
	)
}

export default connect(
	state => state,
	actionCreators,
)(LogIn)