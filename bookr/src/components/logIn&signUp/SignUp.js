import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../state/actionCreators';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
	username: yup.string()
	.required('A username is required')
	.min(3, 'Name must be 3 characters or longer'),

	password: yup.string()
	.min(6, 'Password must be at least 6 characters')
	.required('A password is required'),
})

export function SignUp(props) {
	const {signUp} = props;

	const onSignUpSubmit = signUpValues => {
			signUp(signUpValues)
			alert('sign up successful')
			props.history.push('/')
		}
	return (
		<Formik 
		validationSchema={validationSchema}
		onSubmit={onSignUpSubmit}
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
          <button type="submit">Sign Up</button>
				</Form>
			</div>
			)
		}}
	/>
	)
}

export default connect(
	state => state,
	actionCreators,
)(SignUp)