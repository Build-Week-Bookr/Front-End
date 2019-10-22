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
	const {signUpFormChange, signUpValues, signUp} = props;

	const onInputChange = event => {
		signUpFormChange(event.target)

	}

	const onSignUpSubmit = event => {
			event.preventDefault();
			signUp(signUpValues)
			props.history.push('/')
		}
	return (
		<Formik 
		validationSchema={validationSchema}
		onSubmit={onSignUpSubmit}
		render={props => {
			return (
				<div>
				<Form onSubmit={onSignUpSubmit}>
				<div>
				<Field type="username" name="username" placeholder='Username' onChange={onInputChange}/>
          <ErrorMessage name="username" component="div" />
				</div>
				<div>
          <Field type="password" name="password" placeholder='Password' onChange={onInputChange} />
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